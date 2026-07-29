========================================================================
PANADERÍA Y REPOSTERÍA LA PRIMERA - PROYECTO DE LABORATORIO HTML5
========================================================================

DOCUMENTACIÓN Y DETALLES DEL CÓDIGO HTML5

------------------------------------------------------------------------
1. DESCRIPCIÓN DEL PROYECTO
------------------------------------------------------------------------
Este proyecto consiste en la creación de la estructura básica y semántica 
de una página web para el negocio "Panadería y Repostería La Primera", 
utilizando exclusivamente el estándar HTML5. 

El sitio ofrece información sobre los servicios comerciales del negocio:
  - Panadería artesanal y criolla.
  - Repostería fina y bizcochos personalizables.
  - Desayunos preparados al momento.
  - Almuerzos y menú criollo del día.

La página está diseñada en una sola estructura de documento que simula 
múltiples páginas mediante enlaces de anclaje interno (#) y separadores 
de sección, cumpliendo con los requisitos de evaluación y las mejores 
prácticas de la W3C.

------------------------------------------------------------------------
2. HERRAMIENTAS Y FLUJO DE TRABAJO
------------------------------------------------------------------------
Para el desarrollo, prueba y entrega de este proyecto se utilizan las 
siguientes herramientas:

1. Visual Studio Code (VS Code):
   - Editor de código utilizado para escribir, estructurar y editar la 
     sintaxis de HTML5.

2. Navegador Web (Chrome, Edge, Firefox o Safari):
   - Herramienta utilizada para visualizar el resultado final, probar la 
     interactividad de los enlaces internos e inspeccionar el comportamiento 
     de los reproductores multimedia nativos.

3. Git & GitHub:
   - Control de versiones y almacenamiento seguro en la nube. Permite 
     mantener una copia de respaldo en línea y facilitar la colaboración o 
     evaluación del proyecto.

------------------------------------------------------------------------
3. ESTRUCTURA Y SINTAXIS BÁSICA DE HTML
------------------------------------------------------------------------
El documento cumple estrictamente con la regla de apertura y cierre de 
etiquetas, el uso de atributos y valores válidos:

- <!DOCTYPE html>: Declaración del tipo de documento HTML5.
- <html lang="es">: Elemento raíz que especifica el idioma español.
- <head>: Contiene la metainformación del documento (codificación UTF-8, 
  configuración del viewport para dispositivos móviles y el título de la página).
- <body>: Contiene todo el cuerpo visible del sitio web.
- <h1>, <h2>, <h3>: Encabezados jerárquicos que organizan los títulos 
  de forma lógica.
- <p>: Etiquetas de párrafos para el texto descriptivo.
- <ul>, <ol>, <li>: Listas ordenadas y no ordenadas para estructurar el menú 
  y las ventajas tecnológicas.
- <a>: Enlaces de hipertexto con atributos 'href', 'target' y 'rel'.

------------------------------------------------------------------------
4. SEMÁNTICA DE HTML5
------------------------------------------------------------------------
Se implementan etiquetas semánticas para dar significado real a cada bloque 
de la página sin depender de divisiones genéricas (<div>):

- <header>: Bloque de cabecera que contiene el título principal del negocio 
  y la barra de navegación principal.
- <nav>: Contiene la lista de enlaces de navegación que permiten saltar 
  entre las distintas "páginas" o secciones del laboratorio.
- <main>: Delimita el contenido central y principal del documento.
- <section>: Define los bloques temáticos principales (Inicio, Servicios/Menú, 
  Multimedia y Ventajas de HTML5).
- <article>: Subsecciones independientes dentro de un grupo temático 
  (ej. cada ítem multimedia o propuestas de valor).
- <footer>: Pie de página que contiene los derechos de autor y la 
  información de entrega en GitHub.

------------------------------------------------------------------------
5. CARACTERÍSTICAS Y ELEMENTOS MULTIMEDIA DE HTML5
------------------------------------------------------------------------
Se integran las capacidades nativas de HTML5 para reproducción multimedia 
sin el uso de complementos (plugins) externos:

- <video controls width="320" height="240">:
  Permite reproducir un video promocional o del proceso de horneado.
  Incluye el atributo 'controls' para mostrar la barra de reproducción nativa.
  Utiliza la etiqueta interna <source src="video-panaderia.mp4" type="video/mp4">.

- <audio controls>:
  Permite incorporar un archivo de audio del ambiente o la cocina en vivo.
  Utiliza la etiqueta interna <source src="audio-panaderia.mp3" type="audio/mpeg">.

------------------------------------------------------------------------
6. COMPARACIÓN Y VENTAJAS DE LA ESTRUCTURA HTML5
------------------------------------------------------------------------
1. Accesibilidad: Los lectores de pantalla para personas con discapacidad 
   pueden identificar rápidamente las áreas principales (<header>, <nav>, 
   <main>, <footer>) mejorando la usabilidad.
2. SEO (Posicionamiento en Buscadores): Los motores de búsqueda (Google) 
   comprenden mejor la jerarquía y relevancia del contenido comercial del negocio.
3. Soporte Nativo: Eliminación de tecnologías propietarias para audio y video.
4. Mantenimiento y Creador de Código: El código es legible, estructurado y 
   fácil de actualizar a futuro.

------------------------------------------------------------------------
7. INSTRUCCIONES PARA PUBLICAR EN GITHUB
------------------------------------------------------------------------
1. Abrir la terminal en la carpeta del proyecto en VS Code.
2. Inicializar el repositorio Git:
   $ git init
3. Agregar los archivos al área de preparación:
   $ git add index.html readme.txt
4. Registrar los cambios con un mensaje explicativo:
   $ git commit -m "Estructura HTML5 inicial para Panaderia La Primera"
5. Vincular y subir al repositorio de GitHub:
   $ git remote add origin <URL_DE_TU_REPOSITO_EN_GITHUB>
   $ git branch -M main
   $ git push -u origin main
========================================================================
