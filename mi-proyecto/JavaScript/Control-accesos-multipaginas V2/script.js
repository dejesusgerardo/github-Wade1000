let usuarioActual = null;

document.addEventListener("DOMContentLoaded", () => {
    inicializarBaseDeDatosSimulada();
    
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            procesarLogin();
        });
    }

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
        
        if (usuarioEncontrado.usuario === "admin") {
            window.location.href = "admin.html";
        } else {
            window.location.href = "generico.html";
        }
    } else {
        errorDiv.innerText = "Usuario o contraseña incorrectos.";
    }
}

/**
 * FUNCIÓN DE PROTECCIÓN (DESACTIVADA PARA MODO ESTUDIO)
 * 
 * En un entorno de producción, esta función verifica si el usuario tiene una sesión 
 * activa en 'sessionStorage'. Si no hay sesión, redirige automáticamente a 'index.html'.
 * 
 * NOTA DE APRENDIZAJE: Se ha desactivado la redirección obligatoria para permitir la
 * libre navegación entre páginas (admin.html, generico.html, construccion.html) sin 
 * necesidad de iniciar sesión previamente.
 */
function protegerPagina(requiereRol) {
    const sesionGuardada = sessionStorage.getItem("usuarioSesion");

    if (sesionGuardada) {
        // Si hay un usuario que inició sesión, cargamos sus datos para mostrar su nombre
        usuarioActual = JSON.parse(sesionGuardada);
    } else {
        // MODO PEDAGÓGICO: Si no hay usuario en sesión, creamos un usuario de prueba
        // para que la interfaz no dé errores al intentar mostrar nombres o roles.
        usuarioActual = {
            usuario: "invitado",
            nombre: "Estudiante / Invitado",
            rol: "Invitado"
        };
    }

    // Actualizamos los elementos visuales de la barra superior (Top Bar)
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
        const esAdminPrincipal = u.usuario === "admin";

        tr.innerHTML = `
            <td><strong>${u.usuario}</strong></td>
            <td>${u.nombre}</td>
            <td>${u.correo}</td>
            <td><span class="badge">${u.rol}</span></td>
            <td>
                ${
                    esAdminPrincipal
                        ? `<small style="color: #888;">(Protegido)</small>`
                        : `<button class="btn btn-logout" style="padding: 4px 8px; font-size: 0.8em;" onclick="eliminarUsuario('${u.usuario}')">🗑️ Eliminar</button>`
                }
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function eliminarUsuario(usuarioAEliminar) {
    if (!confirm(`¿Deseas eliminar al usuario '${usuarioAEliminar}'?`)) return;

    let usuarios = obtenerUsuarios();
    usuarios = usuarios.filter((u) => u.usuario !== usuarioAEliminar);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    const msgDiv = document.getElementById("register-message");
    if (msgDiv) {
        msgDiv.className = "info-message info-success";
        msgDiv.innerText = `El usuario '${usuarioAEliminar}' fue eliminado.`;
    }

    cargarTablaUsuarios();
}

// =======================================================
// EXPORTAR E IMPORTAR DATOS
// =======================================================

// 1. Exportar a TXT (Reporte de lectura)
function descargarUsuariosTXT() {
    const usuarios = obtenerUsuarios();
    if (usuarios.length === 0) return alert("No hay usuarios para exportar.");

    let txt = "==================================================\n";
    txt += "       REPORTE DE USUARIOS REGISTRADOS\n";
    txt += "==================================================\n\n";

    usuarios.forEach((u, i) => {
        txt += `Usuario #${i + 1}\n`;
        txt += `NombreCompleto : ${u.nombre}\n`;
        txt += `Usuario        : ${u.usuario}\n`;
        txt += `Contraseña     : ${u.password}\n`;
        txt += `Correo         : ${u.correo}\n`;
        txt += `Rol            : ${u.rol}\n`;
        txt += `--------------------------------------------------\n\n`;
    });

    descargarArchivo(txt, "reporte_usuarios.txt", "text/plain");
}

// 2. Exportar a JSON (Respaldo técnico importable)
function descargarUsuariosJSON() {
    const usuarios = obtenerUsuarios();
    if (usuarios.length === 0) return alert("No hay usuarios para exportar.");

    const jsonStr = JSON.stringify(usuarios, null, 2);
    descargarArchivo(jsonStr, "respaldo_usuarios.json", "application/json");
}

// Función auxiliar para forzar la descarga del navegador
function descargarArchivo(contenido, nombreArchivo, tipo) {
    const blob = new Blob([contenido], { type: `${tipo};charset=utf-8` });
    const enlace = document.createElement("a");
    enlace.href = URL.createObjectURL(blob);
    enlace.download = nombreArchivo;
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
    URL.revokeObjectURL(enlace.href);
}

// 3. Importar desde JSON usando la FileReader API
function importarUsuariosJSON(event) {
    const archivo = event.target.files[0];
    if (!archivo) return;

    const lector = new FileReader();

    lector.onload = function(e) {
        try {
            const nuevosUsuarios = JSON.parse(e.target.result);

            // Validar que sea un Array con formato válido
            if (!Array.isArray(nuevosUsuarios)) {
                throw new Error("El archivo no contiene un formato de lista válido.");
            }

            let usuariosActuales = obtenerUsuarios();
            let agregados = 0;

            nuevosUsuarios.forEach((nuevo) => {
                // Validar estructura mínima
                if (nuevo.usuario && nuevo.password) {
                    const existe = usuariosActuales.some((u) => u.usuario.toLowerCase() === nuevo.usuario.toLowerCase());
                    if (!existe) {
                        usuariosActuales.push(nuevo);
                        agregados++;
                    }
                }
            });

            // Guardar cambios
            localStorage.setItem("usuarios", JSON.stringify(usuariosActuales));
            cargarTablaUsuarios();

            alert(`¡Importación completada! Se agregaron ${agregados} usuarios nuevos.`);
        } catch (err) {
            alert("Error al leer el archivo JSON: " + err.message);
        }
    };

    lector.readAsText(archivo);
}

function cerrarSesion() {
    sessionStorage.removeItem("usuarioSesion");
    window.location.href = "index.html";
}