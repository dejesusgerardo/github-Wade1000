/* ============================================================
   LÓGICA JAVASCRIPT INTEGRADA - LA PRIMERA
   ============================================================ */

// Estado global del carrito
let cart = [];

document.addEventListener("DOMContentLoaded", () => {

    // 1. EVALUAR ESTADO DEL LOCAL (EN VIVO SEGÚN HORA)
    checkBusinessStatus();

    // 2. SCROLLSPY
    const sections = document.querySelectorAll(".page-section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute("id");
            }
        });
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });

    // 3. FILTRADO DINÁMICO POR BOTONES
    const filterButtons = document.querySelectorAll(".btn-filter");
    const menuItems = document.querySelectorAll(".menu-item");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            const selectedCategory = button.getAttribute("data-category");
            menuItems.forEach((item) => {
                const itemCategory = item.getAttribute("data-category");
                if (selectedCategory === "todos" || selectedCategory === itemCategory) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // 4. BUSCADOR EN TIEMPO REAL
    const searchInput = document.getElementById("menu-search");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const searchTerm = e.target.value.toLowerCase();
            menuItems.forEach((item) => {
                const itemName = item.getAttribute("data-name").toLowerCase();
                if (itemName.includes(searchTerm)) {
                    item.style.display = "flex";
                } else {
                    item.style.display = "none";
                }
            });
        });
    }

    // 5. EVENTO BOTÓN DEL CARRITO EN HEADER
    document.getElementById("cart-btn").addEventListener("click", toggleCartModal);

    // 6. CONTROL MULTIMEDIA AL CAMBIAR DE PESTAÑA
    const video = document.getElementById("video-panaderia");
    const audio = document.getElementById("audio-panaderia");
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            if (video && !video.paused) video.pause();
            if (audio && !audio.paused) audio.pause();
        }
    });

    // Inicializar cálculo de bizcocho
    calculateCakePrice();
});

/* FUNCIONES DEL CARRITO DE COMPRAS */
function addToCart(name, price) {
    cart.push({ name, price });
    updateCartUI();
    showToast(`¡"${name}" agregado al pedido!`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
    renderCartModalItems();
}

function updateCartUI() {
    document.getElementById("cart-count").innerText = cart.length;
}

function toggleCartModal() {
    const modal = document.getElementById("cart-modal");
    if (modal.style.display === "flex") {
        modal.style.display = "none";
    } else {
        renderCartModalItems();
        modal.style.display = "flex";
    }
}

function renderCartModalItems() {
    const container = document.getElementById("cart-items-container");
    const totalElement = document.getElementById("cart-total");

    if (cart.length === 0) {
        container.innerHTML = `<p class="empty-cart-msg">Tu pedido está vacío actualmente.</p>`;
        totalElement.innerText = "$0.00";
        return;
    }

    container.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const row = document.createElement("div");
        row.className = "cart-item-row";
        row.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)} 
                <button class="btn-remove" onclick="removeFromCart(${index})">X</button>
            </span>
        `;
        container.appendChild(row);
    });

    totalElement.innerText = `$${total.toFixed(2)}`;
}

function sendOrderWhatsApp() {
    if (cart.length === 0) {
        alert("Agrega productos antes de enviar el pedido.");
        return;
    }

    let message = "Hola Panadería La Primera, me gustaría hacer el siguiente pedido:\n\n";
    let total = 0;

    cart.forEach((item) => {
        message += `- ${item.name} ($${item.price.toFixed(2)})\n`;
        total += item.price;
    });

    message += `\nTotal Estimado: $${total.toFixed(2)}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encoded}`, "_blank");
}

/* CALCULADORA DE BIZCOCHOS */
function calculateCakePrice() {
    const sizePrice = parseFloat(document.getElementById("cake-size").value);
    const flavorPrice = parseFloat(document.getElementById("cake-flavor").value);
    const fillingPrice = parseFloat(document.getElementById("cake-filling").value);

    const total = sizePrice + flavorPrice + fillingPrice;
    document.getElementById("cake-total").innerText = `$${total.toFixed(2)}`;
    return total;
}

function addCustomCakeToCart() {
    const total = calculateCakePrice();
    const sizeText = document.getElementById("cake-size").options[document.getElementById("cake-size").selectedIndex].text.split("(")[0];
    const name = `Bizcocho Personalizado (${sizeText.trim()})`;
    addToCart(name, total);
}

/* VISTA PREVIA DE PRODUCTOS (LIGHTBOX) */
function openPreview(title, price, description) {
    document.getElementById("preview-title").innerText = title;
    document.getElementById("preview-price").innerText = price;
    document.getElementById("preview-desc").innerText = description;
    document.getElementById("preview-modal").style.display = "flex";
}

function closePreview() {
    document.getElementById("preview-modal").style.display = "none";
}

/* NOTIFICACIÓN TOAST */
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.className = "toast show";
    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}

/* COMPROBADOR DE ESTADO (ABIERTO / CERRADO) */
function checkBusinessStatus() {
    const statusBadge = document.getElementById("business-status");
    const currentHour = new Date().getHours();

    // Abierto de 6 AM (6) a 8 PM (20)
    if (currentHour >= 6 && currentHour < 20) {
        statusBadge.innerText = "● ¡Estamos Horneando! (Abierto)";
        statusBadge.className = "status-badge open";
    } else {
        statusBadge.innerText = "● Cerrado por hoy";
        statusBadge.className = "status-badge closed";
    }
}