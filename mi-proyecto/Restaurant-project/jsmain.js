/**
 * RESTAURANTE SABOR & TRADICIÓN - LÓGICA PRINCIPAL
 * Módulo 6: Interacción JavaScript y Validaciones en Tiempo Real
 */

document.addEventListener('DOMContentLoaded', () => {
  initDishModal();
  initContactFormValidation();
});

/**
 * 1. Muestra detalles dinámicos al hacer clic en las tarjetas de platos/bebidas
 */
function initDishModal() {
  const dishCards = document.querySelectorAll('.dish-card');
  const modalElement = document.getElementById('dishDetailModal');

  if (!modalElement) return;

  const dishModal = new bootstrap.Modal(modalElement);

  dishCards.forEach(card => {
    card.addEventListener('click', () => {
      const name = card.getAttribute('data-name');
      const description = card.getAttribute('data-description');
      const price = card.getAttribute('data-price');
      const image = card.getAttribute('data-image');

      document.getElementById('modalDishTitle').textContent = name || 'Detalle del plato';
      document.getElementById('modalDishDesc').textContent = description || '';
      document.getElementById('modalDishPrice').textContent = price || '';
      document.getElementById('modalDishImg').src = image || '';

      dishModal.show();
    });
  });
}

/**
 * 2. Validación del Formulario de Contacto en Tiempo Real
 */
function initContactFormValidation() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const inputs = form.querySelectorAll('input, textarea');

  // Funciones auxiliares de validación individual
  const validateField = (field) => {
    const value = field.value.trim();
    let isValid = true;

    if (field.type === 'email') {
      // Expresión regular estándar para correo electrónico
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = emailRegex.test(value);
    } else {
      // Validación de campo requerido no vacío
      isValid = value.length > 0;
    }

    if (isValid) {
      field.classList.remove('is-invalid');
      field.classList.add('is-valid');
    } else {
      field.classList.remove('is-valid');
      field.classList.add('is-invalid');
    }

    return isValid;
  };

  // Validación en tiempo real (al escribir y al perder el foco)
  inputs.forEach(input => {
    input.addEventListener('input', () => validateField(input));
    input.addEventListener('blur', () => validateField(input));
  });

  // Manejo del envío del formulario
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isFormValid = true;

    // Validar todos los campos antes de enviar
    inputs.forEach(input => {
      if (!validateField(input)) {
        isFormValid = false;
      }
    });

    const responseDiv = document.getElementById('responseMessage');
    if (!responseDiv) return;

    if (!isFormValid) {
      responseDiv.className = 'alert alert-danger mt-3';
      responseDiv.textContent = 'Por favor, corrige los campos marcados en rojo antes de enviar.';
      responseDiv.classList.remove('d-none');
      return;
    }

    // Datos del usuario para la confirmación
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();

    // Mensaje de éxito dinámico
    responseDiv.className = 'alert alert-success mt-3';
    responseDiv.innerHTML = `
      <h5>¡Gracias por contactarnos, ${nombre}!</h5>
      <p>Hemos recibido tu consulta/reserva. Enviaremos la confirmación a <strong>${email}</strong>.</p>
    `;
    responseDiv.classList.remove('d-none');

    // Limpiar el formulario y remover clases de validación
    form.reset();
    inputs.forEach(input => {
      input.classList.remove('is-valid', 'is-invalid');
    });
  });
}