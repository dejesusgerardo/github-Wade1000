========================================================================
 GUÍA PEDAGÓGICA Y ARQUITECTURA DEL PROYECTO
 Sistema de Control de Acceso sin Base de Datos (HTML5, CSS3, JS)
========================================================================

¡Bienvenido/a al proyecto de control de accesos! Este documento sirviendo 
como material didáctico explica las bases teóricas y técnicas empleadas.

------------------------------------------------------------------------
1. ESTRUCTURA Y MÓDULOS DEL PROYECTO
------------------------------------------------------------------------
El proyecto sigue una arquitectura modular limipia en 3 archivos principales:

 - index.html: Estructura DOM de la aplicación. Contiene las 3 vistas principales
   (Login, Panel de Admin y Menú Genérico) dentro del mismo archivo para simular
   una aplicación de una sola página (SPA - Single Page Application).
 
 - styles.css: Hoja de estilos en CSS Puro. Utiliza Variables CSS, Flexbox para
   centrado, CSS Grid para tarjetas/formularios y transiciones suaves.

 - script.js: Maneja toda la lógica dinámica, almacenamiento local y cambios de vista.

------------------------------------------------------------------------
2. CONCEPTOS CLAVE DE APRENDIZAJE EN JAVASCRIPT
------------------------------------------------------------------------

A) ¿Cómo persistimos datos sin una Base de Datos real?
   Utilizamos la API 'localStorage' integrada en todos los navegadores modernos.
   - localStorage.setItem(clave, valor): Guarda una cadena de texto en memoria permanente.
   - localStorage.getItem(clave): Recupera el texto guardado.
   
   Debido a que localStorage solo guarda TEXTO, usamos JSON:
   - JSON.stringify(objeto): Convierte un Objeto/Array JavaScript a texto.
   - JSON.parse(texto): Convierte un texto JSON de vuelta a un Objeto/Array de JavaScript.

B) Control de Sesión (sessionStorage vs localStorage):
   - localStorage guarda a largo plazo (los usuarios creados se quedan aunque apagues la PC).
   - sessionStorage guarda datos TEMPORALES (solo durante la pestaña abierta). Lo usamos
     para saber quién está logueado en este momento sin obligarlo a ingresar clave al refrescar.

C) Navegación entre Vistas (SPA):
   En lugar de crear 3 archivos .html diferentes, usamos clases CSS (.screen y .active).
   JavaScript le quita la clase '.active' a una pantalla y se la pone a otra.

------------------------------------------------------------------------
3. CREDENCIALES POR DEFECTO PARA PRUEBAS
------------------------------------------------------------------------
 - Usuario Administrador: admin
 - Contraseña: windows

Acciones para probar:
 1. Inicia sesión como 'admin' / 'windows'.
 2. Entra al 'Menú Especial' y crea un nuevo usuario (ej: 'jperez', pass: '1234').
 3. Haz clic en 'Cerrar Sesión'.
 4. Inicia sesión con el nuevo usuario 'jperez' para verificar que solo ve el menú genérico.
 5. Refresca la página o cierra el navegador para comprobar que los datos persisten.

------------------------------------------------------------------------
4. SUGERENCIAS PARA SEGUIR APRENDIENDO Y MEJORANDO
------------------------------------------------------------------------
 - Ejercicio 1: Añadir una opción para "Eliminar Usuario" en la tabla del Admin.
 - Ejercicio 2: Crear un botón de "Editar Perfil" en el Menú Genérico para que el usuario 
   pueda cambiar su nombre o contraseña.
 - Nota de Seguridad: En sistemas de desarrollo profesional real, este flujo se realiza 
   conectando el frontend con un servidor Backend (Node.js, PHP, Python) y bases de datos 
   reales (MySQL, PostgreSQL, MongoDB) para encriptar las contraseñas.