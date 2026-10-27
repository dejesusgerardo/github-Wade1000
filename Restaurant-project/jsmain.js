/**
 * RESTAURANTE SABOR & TRADICIÓN - LÓGICA PRINCIPAL
 * Módulo 6: Interacción JavaScript y Validaciones
 */

document.addEventListener('DOMContentLoaded', () => {
  initDishModal();
  initContactFormValidation();
});

// 1. Mostrar detalles al hacer clic en un plato
function initDishModal() {
  const dishCards = document.querySelectorAll('.dish-card');
  const dishModal = new bootstrap.Modal(document.getElementById('dishDetailModal'));
  
  dishCards.forEach(card => {
    card.addEventListener('click', () => {
      const name = card.getAttribute('data-name');
      const description = card.getAttribute('data-description');
      const price = card.getAttribute('data-price');
      const image = card.getAttribute('data-image');

      document.getElementById('modalDishTitle').textContent = name;
      document.getElementById('modalDishDesc').textContent = description;
      document.getElementById('modalDishPrice').textContent = price;
      document.getElementById('modalDishImg').src = image;

      dishModal.show();
    });
  });
}

// 2. Validación del Formulario de Contacto / Reservas en Tiempo Real
function initContactFormValidation() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const responseDiv = document.getElementById('responseMessage');

    // Validación básica
    if (nombre === '' || email === '' || mensaje === '') {
      responseDiv.className = 'alert alert-danger mt-3';
      responseDiv.textContent = 'Por favor, complete todos los campos requeridos.';
      responseDiv.classList.remove('d-none');
      return;
    }

    // Respuesta dinámica exitosa
    responseDiv.className = 'alert alert-success mt-3';
    responseDiv.innerHTML = `
      <h5>¡Gracias por contactarnos, ${nombre}!</h5>
      <p>Hemos recibido tu consulta/reserva. Enviaremos la confirmación a <strong>${email}</strong>.</p>
    `;
    responseDiv.classList.remove('d-none');

    // Limpieza del formulario
    form.reset();
  });
}