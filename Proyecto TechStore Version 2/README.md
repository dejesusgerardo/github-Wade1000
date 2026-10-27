# README - Proyecto TechStore (Evaluación de Laboratorio HTML5 / CSS3)

## 📌 Descripción del Proyecto
**TechStore** es una plataforma web para una tienda de productos tecnológicos y electrónicos de última generación. El proyecto ha sido desarrollado utilizando estándares de **HTML5 semántico** y **CSS3 responsivo**, optimizado para el cumplimiento estricto de las rúbricas de evaluación académica.

El sitio cuenta con una página principal completada (*Landing Page*) y cuatro páginas subordinadas que representan las distintas secciones de la tienda (`Productos`, `Ofertas`, `Nosotros` y `Contacto`), configuradas con avisos ilustrados e interactivos de **"En Construcción"** junto con arte vectorial SVG dedicado y tematizado a cada sección.

---

## 📁 Estructura de Archivos del Proyecto

```text
TechStore/
├── index.html        # Página principal (Landing Page con productos y propuesta de valor)
├── productos.html    # Página subordinada (En construcción con gráfico de catálogo)
├── ofertas.html      # Página subordinada (En construcción con gráfico de promociones)
├── nosotros.html     # Página subordinada (En construcción con gráfico institucional)
├── contacto.html     # Página subordinada (En construcción con gráfico de comunicación)
├── styles.css        # Hoja de estilos globales, utilidades, layout y diseño responsivo
└── README.md         # Documentación técnica del laboratorio
```

---

## 🛠️ Cumplimiento de Rúbrica y Características Técnicas

### 1. HTML5 Semántico y Accesibilidad
- **Etiquetas Semánticas:** Implementación de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>` y `<footer>` en todas las páginas.
- **Estructura Jerárquica:** Uso correcto de encabezados `<h1>` a `<h3>` respetando el árbol de accesibilidad.
- **Metaetiquetas:** Inclusión de `<meta charset="UTF-8">`, `<meta name="viewport">` y descripciones SEO.

### 2. Navegación e Interconexión
- Enlaces funcionales entre todas las páginas subordinadas.
- Indicador visual (`class="active"`) en el menú de navegación para reflejar la página activa.
- Botones de retorno rápido hacia la página principal desde cualquier sección subordinada.

### 3. Diseño Responsivo y CSS3
- Layout adaptable mediante **CSS Grid** y **Flexbox** para adaptarse a ordenadores, tabletas y móviles.
- Uso de variables CSS (`:root`) para mantener consistencia de colores, tipografía y sombras.
- Gráficos **SVG vectoriales** incrustados nativamente para asegurar escalabilidad y alta definición sin depender de imágenes externas.

---

## 🚀 Instrucciones para Previsualización y Despliegue en GitHub

1. **Descarga / Clonación:**
   Guarda todos los archivos (`index.html`, `productos.html`, `ofertas.html`, `nosotros.html`, `contacto.html`, `styles.css` y `README.md`) en la misma carpeta raíz de tu proyecto local.

2. **Previsualización Local:**
   Abre el archivo `index.html` en cualquier navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge) o utiliza la extensión *Live Server* en Visual Studio Code.

3. **Subida a GitHub / GitHub Pages:**
   ```bash
   git init
   git add .
   git commit -m "Añadidos archivos del proyecto TechStore con paginas subordinadas en construccion"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/techstore.git
   git push -u origin main
   ```
   Para activar la vista web pública, dirígete a los ajustes de tu repositorio en GitHub: **Settings > Pages > Branch: main / root > Save**.
