// ==========================================================================
// UTILIDAD: IMPRIMIR TANTO EN CONSOLA WEB COMO EN DEVELOPER TOOLS (F12)
// ==========================================================================
function logVisual(mensaje, reset = false) {
    console.log(mensaje); // Imprime en la consola F12 de Developer Tools
    
    const outputConsole = document.getElementById("outputConsole");
    if (reset) {
        outputConsole.innerHTML = "";
    }
    
    // Remover mensaje inicial si existe
    const sysMsg = outputConsole.querySelector(".system-msg");
    if (sysMsg) sysMsg.remove();

    const nuevaLinea = document.createElement("div");
    nuevaLinea.className = "console-line";
    nuevaLinea.innerText = `> ${mensaje}`;
    outputConsole.appendChild(nuevaLinea);
    outputConsole.scrollTop = outputConsole.scrollHeight; // Scroll automático al final
}

function limpiarConsolaUI() {
    const outputConsole = document.getElementById("outputConsole");
    outputConsole.innerHTML = '<p class="system-msg">> Consola limpiada. Presiona un botón para continuar...</p>';
    console.clear();
}


// ==========================================================================
// 1. CONCEPTOS BÁSICOS Y VARIABLES
// ==========================================================================
let nombreEstudiante = "Gerardo";
const edadEstudiante = 25;
let cursos = ["Programación Web", "Bases de Datos", "Ciberseguridad", "Redes"];


// ==========================================================================
// 2. CONDICIONALES (IF, ELSE IF, ELSE)
// ==========================================================================
function evaluarCalificacion(nota) {
    if (nota >= 90) return `Nota: ${nota} - Resultado: Excelente (A)`;
    if (nota >= 80) return `Nota: ${nota} - Resultado: Bueno (B)`;
    if (nota >= 70) return `Nota: ${nota} - Resultado: Satisfactorio (C)`;
    return `Nota: ${nota} - Resultado: Necesita Mejorar (F)`;
}

function probarCondicionalUI() {
    const inputNota = document.getElementById("inputNota").value;
    const notaNum = parseFloat(inputNota);
    
    if (isNaN(notaNum)) {
        logVisual("[Error] Por favor ingresa un número válido.");
        return;
    }
    
    const resultado = evaluarCalificacion(notaNum);
    logVisual(`[Condicional] ${resultado}`);
}


// ==========================================================================
// 3. BUCLES E ITERACIÓN (FOR, WHILE, DO...WHILE)
// ==========================================================================
function probarBuclesUI() {
    logVisual("=== INICIO DE PRUEBA DE BUCLES ===");
    
    // A. Bucle FOR (Recorrer Arreglo)
    logVisual("-- Bucle FOR (Recorriendo Arreglo de Cursos) --");
    for (let i = 0; i < cursos.length; i++) {
        logVisual(`Curso ${i + 1}: ${cursos[i]}`);
    }
    
    // B. Bucle WHILE
    logVisual("-- Bucle WHILE (Contador Regresivo) --");
    let contador = 3;
    while (contador > 0) {
        logVisual(`Conteo regresivo: ${contador}`);
        contador--;
    }
    
    // C. Bucle DO...WHILE
    logVisual("-- Bucle DO...WHILE --");
    let num = 1;
    do {
        logVisual(`Paso Do...While #${num}`);
        num++;
    } while (num <= 2);
}


// ==========================================================================
// 4. FUNCIONES ESPECÍFICAS (PROMEDIO)
// ==========================================================================
function calcularPromedio(arregloNotas) {
    let suma = 0;
    for (let i = 0; i < arregloNotas.length; i++) {
        suma += arregloNotas[i];
    }
    return suma / arregloNotas.length;
}

function probarFuncionUI() {
    const inputTexto = document.getElementById("inputNotas").value;
    const arregloNotas = inputTexto.split(",").map(n => parseFloat(n.trim())).filter(n => !isNaN(n));

    if (arregloNotas.length === 0) {
        logVisual("[Error] Ingresa notas válidas separadas por coma.");
        return;
    }

    const promedio = calcularPromedio(arregloNotas);
    logVisual(`[Función Promedio] Notas ingresadas: [${arregloNotas.join(", ")}] | Promedio: ${promedio.toFixed(2)}`);
}


// ==========================================================================
// 5. ALCANCE (SCOPE) Y CLAUSURAS (CLOSURES)
// ==========================================================================
let variableGlobal = "Global Scope";

function probarScopeUI() {
    logVisual("=== PRUEBA DE SCOPE ===");
    let variableLocalFun = "Local Scope (Función)";
    
    if (true) {
        let variableBloque = "Block Scope (IF)";
        logVisual(`Acceso dentro de bloque -> Global: '${variableGlobal}' | Función: '${variableLocalFun}' | Bloque: '${variableBloque}'`);
    }
}

// Clausura (Closure)
function crearContador() {
    let contador = 0;
    return function() {
        contador++;
        return contador;
    };
}

const miContadorVisual = crearContador();

function probarClosureUI() {
    const valorActual = miContadorVisual();
    logVisual(`[Closure] Función interna retuvo variable 'contador'. Valor actual: ${valorActual}`);
}


// Ejercicio inicial automático al cargar
console.log("=== Aplicación Cargada Exitosamente ===");