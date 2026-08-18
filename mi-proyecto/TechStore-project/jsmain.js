/**
 * TechStore - Script de Interacciones y Validación
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Resaltar productos al pasar el ratón (Mouseover / Mouseout)
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.classList.add('product-card-highlight');
    });

    card.addEventListener('mouseout', () => {
      card.classList.remove('product-card-highlight');
    });
  });

  // 2. Mostrar detalles al hacer clic en el producto
  const viewDetailButtons = document.querySelectorAll('.view-details-btn');
  const productModalElement = document.getElementById('productModal');

  if (productModalElement) {
    const productModal = new bootstrap.Modal(productModalElement);

    viewDetailButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        const title = card.querySelector('.card-title').innerText;
        const price = card.querySelector('.card-text').innerText;
        const description = card.getAttribute('data-description');
        const imgSrc = card.querySelector('img').src;

        document.getElementById('modalTitle').innerText = title;
        document.getElementById('modalBody').innerHTML = `
          <div class="text-center mb-3">
            <img src="${imgSrc}" class="img-fluid style="max-height: 200px;" alt="${title}">
          </div>
          <p><strong>Precio:</strong> ${price}</p>
          <p><strong>Descripción:</strong> ${description}</p>
        `;

        productModal.show();
      });
    });
  }

  // 3. Validación de Formulario en Tiempo Real (Página de Contacto)
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successAlert = document.getElementById('formSuccess');

    // Funciones de validación
    const validateName = () => {
      const isValid = fullNameInput.value.trim().length >= 3;
      setValidationState(fullNameInput, isValid);
      return isValid;
    };

    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(emailInput.value.trim());
      setValidationState(emailInput, isValid);
      return isValid;
    };

    const validateMessage = () => {
      const isValid = messageInput.value.trim().length >= 10;
      setValidationState(messageInput, isValid);
      return isValid;
    };

    const setValidationState = (element, isValid) => {
      if (isValid) {
        element.classList.remove('is-invalid');
        element.classList.add('is-valid');
      } else {
        element.classList.remove('is-valid');
        element.classList.add('is-invalid');
      }
    };

    // Escuchadores de eventos para validación en tiempo real (Input/Blur)
    fullNameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    messageInput.addEventListener('input', validateMessage);

    // Evento Submit
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isMessageValid = validateMessage();

      if (isNameValid && isEmailValid && isMessageValid) {
        successAlert.classList.remove('d-none');
        contactForm.reset();
        
        // Limpiar clases de validación
        [fullNameInput, emailInput, messageInput].forEach(input => {
          input.classList.remove('is-valid', 'is-invalid');
        });
      }
    });
  }
});