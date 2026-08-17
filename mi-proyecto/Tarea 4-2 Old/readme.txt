========================================================================
PANADERÍA Y REPOSTERÍA LA PRIMERA - TAREA 4-2: ESTRUCTURA Y ESTILOS
========================================================================

DOCUMENTACIÓN TÉCNICA DEL CÓDIGO HTML5 Y CSS3

------------------------------------------------------------------------
1. VISIÓN GENERAL DE LA TAREA 4-2
------------------------------------------------------------------------
La Tarea 4-2 consiste en el desarrollo e integración de una página web 
completa para el negocio "Panadería y Repostería La Primera", combinando 
la maquetación semántica en HTML5 con el diseño y presentación visual en CSS3.

El proyecto simula una navegación entre páginas individuales dentro de un 
mismo documento, estructurando los servicios principales del negocio:
  - Panadería artesanal y criolla.
  - Repostería fina y bizcochos.
  - Desayunos completos.
  - Almuerzos y menú criollo.

------------------------------------------------------------------------
2. ARQUITECTURA DE ARCHIVOS
------------------------------------------------------------------------
El proyecto se organiza en la siguiente estructura de archivos:

├── index.html        (Estructura y contenido semántico en HTML5)
├── style.css         (Estilos, diseño responsive y simulación de páginas)
└── readme.txt        (Documentación técnica de la Tarea 4-2)

------------------------------------------------------------------------
3. EXPLICACIÓN DETALLADA DEL CÓDIGO HTML5 (index.html)
------------------------------------------------------------------------
El archivo 'index.html' utiliza el estándar HTML5 para proporcionar una 
estructura accesible y con significado semántico:

A. Cabecera y Metadatos (<head>):
   - <meta charset="UTF-8">: Garantiza la compatibilidad con caracteres en 
     español (tildes, ñ).
   - <meta name="viewport" content="width=device-width, initial-scale=1.0">: 
     Permite la adaptabilidad del diseño en dispositivos móviles.
   - <link rel="stylesheet" href="style.css">: Enlaza la hoja de estilos externa.

B. Estructura Semántica (<body>):
   - <header>: Bloque superior que alberga la marca del negocio y la barra 
     de navegación principal.
   - <nav>: Contiene la lista no ordenada (<ul>) con hipervínculos (<a>) que 
     apuntan a los identificadores de sección (#inicio, #servicios, etc.).
   - <main>: Agrupa el contenido central y sustancial del sitio web.
   - <section>: Delimita cada una de las 4 "páginas" del laboratorio mediante 
     clases (.page-section) e IDs únicos.
   - <article>: Sub-bloques con contenido independiente (ej. descripciones de 
     propuestas o reproductores multimedia).
   - <footer>: Pie de página con información de copyright y repositorio.

C. Elementos Multimedia y Enlaces:
   - <video controls>: Reproductor nativo con controles de pausa, volumen 
     y pantalla completa.
   - <audio controls>: Reproductor nativo de audio para ambientación.
   - Elementos <code>: Resaltan las etiquetas HTML evaluadas.

------------------------------------------------------------------------
4. EXPLICACIÓN DETALLADA DEL CÓDIGO CSS3 (style.css)
------------------------------------------------------------------------
El archivo 'style.css' controla la apariencia visual y la simulación de 
pantallas independientes:

A. Reglas Globales y Desplazamiento:
   - box-sizing: border-box: Asegura que el padding y los bordes no alteren 
     el ancho total calculable de los elementos.
   - scroll-behavior: smooth: Genera una transición animada suave cuando el 
     usuario hace clic en los enlaces del menú.

B. Encabezado Fijo (Fixed Navigation):
   - position: fixed: Mantiene el menú visible en la parte superior de la 
     pantalla durante el desplazamiento.
   - z-index: 1000: Asegura que la barra de navegación se mantenga por encima 
     del contenido al desplazarse.

C. Simulación de Páginas Separadas:
   - min-height: calc(100vh - 60px): Asigna a cada <section> una altura igual 
     al 100% de la ventana del navegador (menos la altura de la barra fija), 
     dando la apariencia de ser páginas individuales.
   - Alternancia de Colores: Fondos con tonos café suaves (#fcf8f2, #f5ebe0, 
     #efebe9, #e0d5d1) que refuerzan la temática de la panadería.

D. Tarjetas y Componentes Visuales (.card, .btn-next):
   - .card: Contenedores blancos con sombras (box-shadow) y bordes redondeados 
     (border-radius) para encuadrar la información.
   - .btn-next / .btn-top: Botones estilizados con efectos hover (:hover) 
     para guiar la navegación del usuario.

------------------------------------------------------------------------
5. VENTAJAS DE LA IMPLEMENTACIÓN HTML5 Y CSS3
------------------------------------------------------------------------
1. Accesibilidad: Estructura clara para lectores de pantalla.
2. Indexación SEO: Los buscadores identifican la jerarquía del negocio.
3. Presentación Profesional: Separación completa entre contenido (HTML) 
   y diseño (CSS).
4. Mantenibilidad: Código organizado, modular y fácil de escalar.

------------------------------------------------------------------------
6. PASOS PARA PUBLICAR EN GITHUB
------------------------------------------------------------------------
1. Abrir la terminal en Visual Studio Code.
2. Ejecutar los comandos de Git:
   $ git add .
   $ git commit -m "Tarea 4-2: Integración de HTML5, CSS3 y Readme.txt"
   $ git push origin main
========================================================================
