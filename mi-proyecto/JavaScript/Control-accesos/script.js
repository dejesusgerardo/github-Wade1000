/**
 * =======================================================
 * LÓGICA DE PROGRAMACIÓN JAVASCRIPT (FRONTEND)
 * =======================================================
 */

// Variable global para mantener el estado del usuario en sesión
let usuarioActual = null;

/**
 * 1. INICIALIZACIÓN DE LA APLICACIÓN
 * Se ejecuta automáticamente al cargar el archivo en la página.
 */
document.addEventListener("DOMContentLoaded", () => {
    inicializarBaseDeDatosSimulada();
    configurarFormularios();
    verificarSesionActiva();
});

/**
 * 2. MANEJO DE LOCALSTORAGE (BASE DE DATOS EN NAVEGADOR)
 * Inicializa la lista de usuarios si no existe aún en el navegador.
 */
function inicializarBaseDeDatosSimulada() {
    // Si la clave 'usuarios' no existe en localStorage, la creamos con el usuario 'admin'
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
        // Convertimos el Array de objetos a texto JSON para guardarlo
        localStorage.setItem("usuarios", JSON.stringify(usuariosIniciales));
        console.log("Base de datos simulada creada en localStorage.");
    }
}

/**
 * Función auxiliar para obtener la lista actualizada de usuarios.
 */
function obtenerUsuarios() {
    return JSON.parse(localStorage.getItem("usuarios")) || [];
}

/**
 * 3. CONFIGURACIÓN DE EVENTOS DE FORMULARIOS
 */
function configurarFormularios() {
    // Formulario de Iniciar Sesión
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita que la página se recargue
        procesarLogin();
    });

    // Formulario de Registro de Nuevos Usuarios
    const registerForm = document.getElementById("register-form");
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        procesarRegistroUsuario();
    });
}

/**
 * 4. AUTENTICACIÓN / LOGIN
 */
function procesarLogin() {
    const userInput = document.getElementById("username").value.trim();
    const passInput = document.getElementById("password").value;
    const errorDiv = document.getElementById("login-error");

    errorDiv.innerText = ""; // Limpiar errores previos

    const usuarios = obtenerUsuarios();

    // Buscar si existe un usuario que coincida con lo ingresado
    const usuarioEncontrado = usuarios.find(
        (u) => u.usuario === userInput && u.password === passInput
    );

    if (usuarioEncontrado) {
        // Guardar sesión activa en sessionStorage (se borra al cerrar pestaña)
        sessionStorage.setItem("usuarioSesion", JSON.stringify(usuarioEncontrado));
        usuarioActual = usuarioEncontrado;

        // Limpiar inputs del formulario
        document.getElementById("login-form").reset();

        // Dirigir al usuario según su rol
        redirigirSegunRol();
    } else {
        errorDiv.innerText = "Usuario o contraseña incorrectos.";
    }
}

/**
 * 5. REDIRECCIÓN Y NAVEGACIÓN ENTRE PANTALLAS
 */
function redirigirSegunRol() {
    if (!usuarioActual) return;

    // Ocultar todas las pantallas
    ocultarTodasLasPantallas();

    if (usuarioActual.usuario === "admin") {
        // Si es el usuario principal ADMIN
        document.getElementById("admin-screen").classList.add("active");
        document.getElementById("admin-name-display").innerText = usuarioActual.nombre;
        cargarTablaUsuarios(); // Actualizar tabla de usuarios registrados
    } else {
        // Cualquier otro usuario va al Menú Genérico
        irAMenuGenerico();
    }
}

function ocultarTodasLasPantallas() {
    const pantallas = document.querySelectorAll(".screen");
    pantallas.forEach((pantalla) => pantalla.classList.remove("active"));
}

/**
 * Acción del Admin: Mostrar u ocultar el menú especial de creación
 */
function mostrarSeccionAdmin(idSeccion) {
    const seccion = document.getElementById(idSeccion);
    seccion.classList.toggle("hidden");
}

/**
 * Acceso al Menú Genérico
 */
function irAMenuGenerico() {
    ocultarTodasLasPantallas();
    const genericScreen = document.getElementById("generic-screen");
    genericScreen.classList.add("active");

    // Actualizar nombre y badge de la interfaz
    document.getElementById("user-name-display").innerText = usuarioActual.nombre;
    document.getElementById("user-role-badge").innerText = `Rol: ${usuarioActual.rol}`;

    // Mostrar botón de regreso si el usuario actual es Admin navegando en el menú genérico
    const btnVolver = document.getElementById("btn-back-to-admin");
    if (usuarioActual.usuario === "admin") {
        btnVolver.classList.remove("hidden");
    } else {
        btnVolver.classList.add("hidden");
    }
}

function volverAAdmin() {
    redirigirSegunRol();
}

/**
 * 6. REGISTRO DE NUEVOS USUARIOS (SOLO ADMIN)
 */
function procesarRegistroUsuario() {
    const nombre = document.getElementById("reg-nombre").value.trim();
    const correo = document.getElementById("reg-correo").value.trim();
    const usuario = document.getElementById("reg-usuario").value.trim();
    const password = document.getElementById("reg-password").value;
    const rol = document.getElementById("reg-rol").value;
    const msgDiv = document.getElementById("register-message");

    const usuarios = obtenerUsuarios();

    // Validar que el nombre de usuario no exista ya
    const yaExiste = usuarios.some((u) => u.usuario.toLowerCase() === usuario.toLowerCase());
    if (yaExiste) {
        msgDiv.className = "info-message error-message";
        msgDiv.innerText = "Error: El nombre de usuario ya está registrado.";
        return;
    }

    // Crear nuevo objeto de usuario
    const nuevoUsuario = { usuario, password, nombre, correo, rol };

    // Agregar al arreglo existente y guardar en localStorage
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Notificar éxito y limpiar formulario
    msgDiv.className = "info-message info-success";
    msgDiv.innerText = `¡Usuario '${usuario}' creado con éxito!`;
    document.getElementById("register-form").reset();

    // Actualizar la lista visualmente
    cargarTablaUsuarios();
}

/**
 * Renderiza la lista de usuarios guardados en la tabla HTML
 */
function cargarTablaUsuarios() {
    const tbody = document.getElementById("users-table-body");
    const usuarios = obtenerUsuarios();

    tbody.innerHTML = ""; // Limpiar tabla

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

/**
 * 7. CONTROL DE SESIÓN (PERSISTENCIA Y CERRAR SESIÓN)
 */
function verificarSesionActiva() {
    const sesionGuardada = sessionStorage.getItem("usuarioSesion");
    if (sesionGuardada) {
        usuarioActual = JSON.parse(sesionGuardada);
        redirigirSegunRol();
    } else {
        ocultarTodasLasPantallas();
        document.getElementById("login-screen").classList.add("active");
    }
}

function cerrarSesion() {
    sessionStorage.removeItem("usuarioSesion");
    usuarioActual = null;
    ocultarTodasLasPantallas();
    document.getElementById("login-screen").classList.add("active");
}