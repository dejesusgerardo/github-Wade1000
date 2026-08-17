========================================================================
                      GUÍA DE PROYECTO: README.TXT
                Evaluación Práctica de JavaScript y HTML
                           Rúbrica 6.1
========================================================================

DESCRIPCIÓN DEL PROYECTO
------------------------------------------------------------------------
Este proyecto es una aplicación web interactiva diseñada para demostrar
y evaluar visualmente los conceptos fundamentales de JavaScript, CSS3
y HTML5 exigidos en la Rúbrica 6.1.

Permite al usuario/evaluador probar en tiempo real el comportamiento de:
- Estructuras de control condicionales (if, else if, else) con campos de entrada.
- Bucles iterativos (for, while, do...while) imprimiendo ciclos.
- Funciones con paso de arreglos y cálculo de datos.
- Demostración visual de Scope (Global, Local, Bloque) y Clausuras (Closures).
- Impresión simultánea en la consola interna de la página y en la Consola
  de Desarrollador del navegador (F12).


ESTRUCTURA DE ARCHIVOS DE ENTREGABLE
------------------------------------------------------------------------
El proyecto consta de los siguientes archivos en una misma carpeta:

  ├── index.html   --> Interfaz web interactiva con comentarios sobre HTML5
  ├── styles.css   --> Hoja de estilos responsiva con tema consola visual
  ├── app.js       --> Lógica interactiva de JS, scope, closures y bucles
  └── README.txt   --> Documentación y guía de cumplimiento de rúbrica


CUMPLIMIENTO DE MATRIZ DE CRITERIOS DE RÚBRICA 6.1
------------------------------------------------------------------------
1. Condicionales (7 pts): Probadas dinámicamente vía 'evaluarCalificacion()'.
2. Bucles (7 pts): Demostración en consola visual con 'for', 'while' y 'do...while'.
3. Funciones (7 pts): Función 'calcularPromedio()' procesa arreglos dinámicos.
4. Scope / Alcance (4 pts): Muestra interacción entre Global, Función y Bloque.
5. Closures / Clausuras (4 pts): Implementado con 'crearContador()' conservando estado.
6. Ejemplos Prácticos (7 pts): Botones interactivos con ejecución en tiempo real.
7. Consola de Navegador (4 pts): Todas las salidas se replican con console.log().
8. Pruebas con Múltiples Valores (4 pts): Entradas modificables por el usuario.
9. Video Screen Recorder (7 pts): Muestra la interacción en pantalla y en F12.
10. HTML5 Comentado (4 pts): index.html detalla DOCTYPE, html, head, body y script.
11. Archivo CSS (4 pts): styles.css incluido y vinculado.
12. Archivo README.txt (4 pts): Explicación estructurada del laboratorio.
13. Archivo JS (4 pts): app.js enlazado externamente.
14. Imágenes (4 pts): Logo de JavaScript incorporado en el encabezado.


INSTRUCCIONES PARA LA GRABACIÓN DEL VIDEO (3+ MINUTOS)
------------------------------------------------------------------------
1. Muestra los 4 archivos creados en Visual Studio Code.
2. Abre 'index.html' en tu navegador y abre la Consola de Desarrollador (F12).
3. Presiona el botón "Evaluar Nota" y cambia el valor del número.
4. Presiona "Ejecutar Bucles" para ver la iteración del arreglo y los ciclos.
5. Ingresa distintas notas para probar "Calcular Promedio".
6. Presiona "Demostrar Scope" y pulsa varias veces "Probar Clausura" para mostrar
   cómo el contador incrementa reteniendo el valor en memoria.
========================================================================