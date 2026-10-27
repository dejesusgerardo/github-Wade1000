========================================================================
                      GUÍA DE PROYECTO: README.TXT
                Evaluación Práctica de JavaScript y HTML
                           Rúbrica 6.1
========================================================================

DESCRIPCIÓN DEL PROYECTO
------------------------------------------------------------------------
Este proyecto es una práctica guiada diseñada para demostrar los conceptos
fundamentales de JavaScript, CSS3 y su integración con HTML5. Está diseñado
para ejecutarse y evaluarse a través de las herramientas de desarrollador
(Developer Tools) de cualquier navegador web moderno.

El objetivo principal es evidenciar el manejo de variables, tipos de datos,
arreglos, objetos, estructuras de control (condicionales y bucles), 
definición de funciones, así como la exploración práctica del alcance 
(scope) y las clausuras (closures) en JavaScript.


ESTRUCTURA DE ARCHIVOS DE ENTREGABLE
------------------------------------------------------------------------
El proyecto consta de los siguientes archivos dentro de la misma carpeta:

  ├── index.html   --> Documento HTML5 con estructura comentada e imagen
  ├── styles.css   --> Hoja de estilos CSS para presentación visual
  ├── app.js       --> Script externo de JavaScript con toda la lógica
  └── README.txt   --> Guía explicativa del proyecto y rúbrica


CUMPLIMIENTO DE MATRIZ DE CRITERIOS DE RÚBRICA 6.1
------------------------------------------------------------------------

1. Estructuras de control - Condicionales (7 pts):
   - Implementadas en la función 'evaluarCalificacion()' utilizando
     bloques 'if', 'else if' y 'else'.

2. Estructuras de control - Bucles / Loops (7 pts):
   - Demostración de 'for' (recorriendo e iterando el arreglo 'cursos'),
     'while' (contador regresivo) y 'do...while' en 'app.js'.

3. Estructuras de control - Funciones (7 pts):
   - Funciones 'evaluarCalificacion()' y 'calcularPromedio()' creadas
     para resolver tareas específicas y retornar datos.

4. Alcance / Scope (4 pts):
   - Demostrado mediante 'variableGlobal', 'variableLocal' (ámbito de
     función) y 'variableBloque' (ámbito de bloque 'let' dentro de IF).

5. Clausuras / Closures (4 pts):
   - Demostrado en 'crearContador()', donde una función interna retiene
     el acceso a la variable 'contador' de su contexto externo.

6. Ejemplos prácticos de Scope y Closures (7 pts):
   - Ejemplos ejecutables y funcionales presentes en la Sección 4 de 'app.js'.

7. Pruebas y experimentación - Consola del Navegador (4 pts):
   - Integración mediante la etiqueta <script> en 'index.html' permitiendo
     ver la salida ordenada en la consola del navegador.

8. Pruebas y experimentación - Múltiples Valores (4 pts):
   - Invocación de funciones con distintos argumentos ('evaluarCalificacion(95)',
     'evaluarCalificacion(50)', 'calcularPromedio(misNotas)').

9. Video Screen Recorder (7 pts):
   - Grabación de pantalla realizada (mínimo 3 minutos) mostrando el código
     en Visual Studio Code y su ejecución en el navegador.

10. Archivo HTML con comentarios de HTML5 (4 pts):
    - Incluido 'index.html' con comentarios descriptivos sobre DOCTYPE,
      html, head, body y script.

11. Archivo CSS (4 pts):
    - Incluido 'styles.css' vinculado al documento HTML.

12. Archivo README.txt (4 pts):
    - Presente en la entrega con la estructura explicativa.

13. Archivo JavaScript (4 pts):
    - Incluido 'app.js' enlazado externamente.

14. Incluye imágenes (4 pts):
    - Imagen del logo de JavaScript enlazada e insertada en 'index.html'.


INSTRUCCIONES DE EJECUCIÓN Y PRUEBAS
------------------------------------------------------------------------
1. Descarga e incluye los archivos 'index.html', 'styles.css', 'app.js' y 
   'README.txt' en un mismo directorio.
2. Abre el archivo 'index.html' en tu navegador de preferencia.
3. Abre la Consola de Desarrollador del navegador:
   - En Windows: Presiona F12 o Ctrl + Shift + I
   - En Mac: Presiona Cmd + Option + I
4. Revisa los resultados tabulados e impresos por la consola.
========================================================================