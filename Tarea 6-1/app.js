// ==========================================================================
// 1. CONCEPTOS BÁSICOS: VARIABLES Y TIPOS DE DATOS
// ==========================================================================

// Declaración de variables con distintos tipos de datos
let nombreEstudiante = "Gerardo";     // String
const edadEstudiante = 25;           // Number
let esActivo = true;                 // Boolean
let valorNulo = null;                // Null
let variableIndefinida;              // Undefined

// Salida de información por consola
console.log("=== 1. Salida de Variables y Tipos de Datos ===");
console.log("Nombre:", nombreEstudiante, "| Tipo:", typeof nombreEstudiante);
console.log("Edad:", edadEstudiante, "| Tipo:", typeof edadEstudiante);
console.log("Estado activo:", esActivo, "| Tipo:", typeof esActivo);
console.log("Valor nulo:", valorNulo, "| Tipo:", typeof valorNulo);
console.log("Indefinida:", variableIndefinida, "| Tipo:", typeof variableIndefinida);


// ==========================================================================
// 2. ARREGLOS Y OBJETOS
// ==========================================================================

console.log("\n=== 2. Arreglos y Objetos ===");

// Creación de un arreglo (Array)
let cursos = ["Programación Web", "Bases de Datos", "Ciberseguridad", "Redes"];
console.log("Arreglo inicial de cursos:", cursos);

// Manipulación del arreglo
cursos.push("Estructura de Datos"); // Agregar elemento al final
console.log("Arreglo después de push():", cursos);

// Creación de un Objeto
let estudiante = {
    nombre: "Gerardo",
    matricula: "ST-2026",
    semestre: 4,
    materiasAprobadas: ["HTML/CSS", "Lógica de Programación"]
};

// Manipulación del objeto
estudiante.promedio = 3.8; // Agregar nueva propiedad
console.log("Objeto estudiante manipulado:", estudiante);


// ==========================================================================
// 3. ESTRUCTURAS DE CONTROL Y FUNCIONES
// ==========================================================================

console.log("\n=== 3. Estructuras de Control y Funciones ===");

/* 
   --------------------------------------------------------------------------
   CRITERIO RÚBRICA 6.1: Estructuras de control y funciones
   - Utiliza estructuras de control condicionales (if, else if, else) para 
     crear una lógica de toma de decisiones en tu programa. (7 pts)
   --------------------------------------------------------------------------
*/
function evaluarCalificacion(nota) {
    console.log(`-- Evaluando nota: ${nota} --`);
    if (nota >= 90) {
        console.log("Resultado: Excelente (A)");
    } else if (nota >= 80) {
        console.log("Resultado: Bueno (B)");
    } else if (nota >= 70) {
        console.log("Resultado: Satisfactorio (C)");
    } else {
        console.log("Resultado: Necesita Mejorar (F)");
    }
}

/* 
   --------------------------------------------------------------------------
   CRITERIO RÚBRICA 6.1: Pruebas y experimentación
   - Realiza pruebas y experimenta con diferentes valores y lógicas para 
     fortalecer su comprensión de los conceptos. (4 pts)
   --------------------------------------------------------------------------
*/
evaluarCalificacion(95);
evaluarCalificacion(75);
evaluarCalificacion(50);


/* 
   --------------------------------------------------------------------------
   CRITERIO RÚBRICA 6.1: Estructuras de control y funciones
   - Crea bucles o loops (for, while, do...while) para realizar operaciones 
     repetitivas y practica la iteración en arreglos. (7 pts)
   --------------------------------------------------------------------------
*/

// A. Bucle FOR: Recorrer e iterar el arreglo 'cursos'
console.log("\n-- Iteración en arreglo con bucle FOR --");
for (let i = 0; i < cursos.length; i++) {
    console.log(`Curso ${i + 1}: ${cursos[i]}`);
}

// B. Bucle WHILE: Contador regresivo
console.log("\n-- Bucle WHILE (Contador) --");
let contador = 3;
while (contador > 0) {
    console.log(`Conteo regresivo: ${contador}`);
    contador--;
}

// C. Bucle DO...WHILE: Se ejecuta al menos una vez
console.log("\n-- Bucle DO...WHILE --");
let numero = 1;
do {
    console.log(`Ejecución Do...While paso #${numero}`);
    numero++;
} while (numero <= 2);


/* 
   --------------------------------------------------------------------------
   CRITERIO RÚBRICA 6.1: Estructuras de control y funciones
   - Define funciones para realizar tareas específicas y prueba su funcionamiento. (7 pts)
   --------------------------------------------------------------------------
*/
function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}

// Pruebas de la función con diferentes valores
let misNotas = [85, 90, 78, 92];
let promedioFinal = calcularPromedio(misNotas);
console.log("\n-- Prueba de Función Específica --");
console.log("Notas probadas:", misNotas);
console.log("Promedio Calculado:", promedioFinal.toFixed(2));


// ==========================================================================
// 4. EXPLORAR ALCANCE (SCOPE) Y CLAUSURAS (CLOSURES)
// ==========================================================================

console.log("\n=== 4. Alcance (Scope) y Clausuras (Closures) ===");

/* 
   --------------------------------------------------------------------------
   CRITERIO RÚBRICA 6.1: Explorar alcance y clausuras
   - Investiga sobre el alcance en JavaScript y cómo las variables pueden 
     tener diferentes alcances (Global vs Local/Bloque). (4 pts)
   - Crea ejemplos simples que demuestren tanto el alcance como las 
     clausuras. (7 pts)
   --------------------------------------------------------------------------
*/

// Definición de variable en Alcance Global
let variableGlobal = "Soy una variable de alcance Global";

function demostrarScope() {
    // Definición de variable en Alcance Local de Función
    let variableLocal = "Soy una variable de alcance Local (Función)";

    if (true) {
        // Definición de variable en Alcance de Bloque (Block Scope)
        let variableBloque = "Soy una variable de alcance de Bloque (IF)";
        console.log("Dentro del bloque IF:");
        console.log(" - Global:", variableGlobal);
        console.log(" - Local Función:", variableLocal);
        console.log(" - Local Bloque:", variableBloque);
    }

    // Nota: Intentar acceder a 'variableBloque' fuera del bloque 'if' generaría
    // un error de referencia (ReferenceError), demostrando el Scope de bloque.
}

demostrarScope();


/* 
   --------------------------------------------------------------------------
   CRITERIO RÚBRICA 6.1: Explorar alcance y clausuras
   - Comprende el concepto de clausuras y cómo se aplican en JavaScript. (4 pts)
   - Crea ejemplos simples que demuestren tanto el alcance como las 
     clausuras. (7 pts)
   --------------------------------------------------------------------------
   EXPLICACIÓN: Una clausura (closure) es una función interna que recuerda y 
   mantiene el acceso a las variables de su entorno léxico externo, incluso 
   después de que la función externa haya finalizado su ejecución.
*/

function crearContador() {
    let contador = 0; // Variable retenida en memoria por la clausura

    return function() {
        contador++; // Accede y modifica la variable del ámbito superior
        return `Conteo actual: ${contador}`;
    };
}

// Creación de la instancia de la clausura
const miContador = crearContador();

console.log("\n-- Prueba de Clausura (Closure) --");
console.log(miContador()); // Conteo actual: 1
console.log(miContador()); // Conteo actual: 2
console.log(miContador()); // Conteo actual: 3