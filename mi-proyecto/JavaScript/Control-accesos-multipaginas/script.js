// Variable global de usuario
let usuarioActual = null;

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    inicializarBaseDeDatosSimulada();
    
    // Si estamos en index.html, configurar el formulario de Login
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            procesarLogin();
        });
    }

    // Si estamos en admin.html, configurar formulario de registro
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            procesarRegistroUsuario();
        });
    }
});

function inicializarBaseDeDatosSimulada() {
    if (!localStorage.getItem("usuarios")) {
        const usuariosIniciales = [
            {
                usuario: "admin",
                password: "windows",
                nombre: "Administrador del Sistema",
                correo: "admin@sistema.local",
                rol: "Administrador"
            }
        ];
        localStorage.setItem("usuarios", JSON.stringify(usuariosIniciales));
    }
}

function obtenerUsuarios() {
    return JSON.parse(localStorage.getItem("usuarios")) || [];
}

// Login y Redirección entre archivos HTML (window.location.href)
function procesarLogin() {
    const userInput = document.getElementById("username").value.trim();
    const passInput = document.getElementById("password").value;
    const errorDiv = document.getElementById("login-error");

    const usuarios = obtenerUsuarios();
    const usuarioEncontrado = usuarios.find(
        (u) => u.usuario === userInput && u.password === passInput
    );

    if (usuarioEncontrado) {
        sessionStorage.setItem("usuarioSesion", JSON.stringify(usuarioEncontrado));
        
        // Redirección física de archivo
        if (usuarioEncontrado.usuario === "admin") {
            window.location.href = "admin.html";
        } else {
            window.location.href = "generico.html";
        }
    } else {
        errorDiv.innerText = "Usuario o contraseña incorrectos.";
    }
}

// "EL GUARDIÁN DE SESIÓN": Protege los archivos HTML
function protegerPagina(requiereRol) {
    const sesionGuardada = sessionStorage.getItem("usuarioSesion");

    if (!sesionGuardada) {
        // No hay sesión -> redirigir al login
        window.location.href = "index.html";
        return;
    }

    usuarioActual = JSON.parse(sesionGuardada);

    // Si la página exige 'admin' y el usuario no lo es -> enviar a menú genérico
    if (requiereRol === "admin" && usuarioActual.usuario !== "admin") {
        window.location.href = "generico.html";
        return;
    }

    // Si pasó las validaciones, actualizar la interfaz
    actualizarInterfaz();
}

function actualizarInterfaz() {
    const nameDisplayAdmin = document.getElementById("admin-name-display");
    const nameDisplayUser = document.getElementById("user-name-display");
    const roleBadge = document.getElementById("user-role-badge");
    const btnBackAdmin = document.getElementById("btn-back-to-admin");

    if (nameDisplayAdmin) nameDisplayAdmin.innerText = usuarioActual.nombre;
    if (nameDisplayUser) nameDisplayUser.innerText = usuarioActual.nombre;
    if (roleBadge) roleBadge.innerText = `Rol: ${usuarioActual.rol}`;

    if (btnBackAdmin && usuarioActual.usuario === "admin") {
        btnBackAdmin.classList.remove("hidden");
    }

    // Cargar tabla si estamos en admin.html
    if (document.getElementById("users-table-body")) {
        cargarTablaUsuarios();
    }
}

function mostrarSeccion(idSeccion) {
    const seccion = document.getElementById(idSeccion);
    seccion.classList.toggle("hidden");
}

function procesarRegistroUsuario() {
    const nombre = document.getElementById("reg-nombre").value.trim();
    const correo = document.getElementById("reg-correo").value.trim();
    const usuario = document.getElementById("reg-usuario").value.trim();
    const password = document.getElementById("reg-password").value;
    const rol = document.getElementById("reg-rol").value;
    const msgDiv = document.getElementById("register-message");

    const usuarios = obtenerUsuarios();

    if (usuarios.some((u) => u.usuario.toLowerCase() === usuario.toLowerCase())) {
        msgDiv.className = "info-message error-message";
        msgDiv.innerText = "Error: El usuario ya existe.";
        return;
    }

    usuarios.push({ usuario, password, nombre, correo, rol });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    msgDiv.className = "info-message info-success";
    msgDiv.innerText = `¡Usuario '${usuario}' creado con éxito!`;
    document.getElementById("register-form").reset();
    cargarTablaUsuarios();
}

function cargarTablaUsuarios() {
    const tbody = document.getElementById("users-table-body");
    const usuarios = obtenerUsuarios();
    tbody.innerHTML = "";

    usuarios.forEach((u) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${u.usuario}</strong></td>
            <td>${u.nombre}</td>
            <td>${u.correo}</td>
            <td><span class="badge">${u.rol}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

function cerrarSesion() {
    sessionStorage.removeItem("usuarioSesion");
    window.location.href = "index.html";
}