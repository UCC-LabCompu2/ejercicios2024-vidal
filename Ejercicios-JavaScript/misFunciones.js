/**
* Función para convertir unidades y mostrar el resultado en un alert
* @method convertirUnidades
* @return {void}
*/
function primeraWeb(){
    const dist = parseFloat(document.getElementById('distancia').value);
    const tipo = document.getElementById('distUnidad').value;
    switch(tipo){
        case 'metros':
            console.log(
                'yardas: ', dist * 1.09361,
                'pies: ', dist * 3.28084,
                'pulgadas: ', dist * 39.3701
            );
            break;
        case 'yardas':
            console.log(
                'metros: ', dist / 1.09361,
                'pies: ', dist * 3,
                'pulgadas: ', dist * 36
            );
            break;
        case 'pies':
            console.log(
                'metros: ', dist / 3.28084,
                'yardas: ', dist / 3,
                'pulgadas: ', dist * 12
            );
            break;
        case 'pulgadas':
            console.log(
                'metros: ', dist / 39.3701,
                'yardas: ', dist / 36,
                'pies: ', dist / 12
            );
            break;
    }
}

/**
 * Conversor de unidades
 * @method updateFields
 * @param {string} tipo - El tipo de unidad a convertir
 * @return {void}
 */
function updateFields(tipo) {
    switch (tipo) {
        case 'metros':
            const metros = parseFloat(document.querySelector('#metro').value);
            document.querySelector('#yarda').value = metros * 1.09361;
            document.querySelector('#pie').value = metros * 3.28084;
            document.querySelector('#pulgada').value = metros * 39.3701;
            break;
        case 'yardas':
            const yardas = parseFloat(document.querySelector('#yarda').value);
            document.querySelector('#metro').value = yardas / 1.09361;
            document.querySelector('#pie').value = yardas * 3;
            document.querySelector('#pulgada').value = yardas * 36;
            break;
        case 'pies':
            const pies = parseFloat(document.querySelector('#pie').value);
            document.querySelector('#metro').value = pies / 3.28084;
            document.querySelector('#yarda').value = pies / 3;
            document.querySelector('#pulgada').value = pies * 12;
            break;
        case 'pulgadas':
            const pulgadas = parseFloat(document.querySelector('#pulgada').value);
            document.querySelector('#metro').value = pulgadas / 39.3701;
            document.querySelector('#yarda').value = pulgadas / 36;
            document.querySelector('#pie').value = pulgadas / 12;
            break;    
    }
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('metro').addEventListener('input',() => updateFields('metros'));
    document.getElementById('yarda').addEventListener('input',() => updateFields('yardas'));
    document.getElementById('pie').addEventListener('input',() => updateFields('pies'));
    document.getElementById('pulgada').addEventListener('input',() => updateFields('pulgadas'));
});

/**
 * Conversor de unidades
 * @method gradosRadianes
 * @param {string} tipo - El tipo de unidad a convertir
 * @return {void}
 */
function gradosRadianes(tipo) {
    switch (tipo) {
        case 'grados':
            const grados = parseFloat(document.querySelector('#grados').value);
            document.querySelector('#radianes').value = grados * (Math.PI/180);
            break;
        case 'radianes':
            const radianes = parseFloat(document.querySelector('#radianes').value);
            document.querySelector('#grados').value = radianes * (180/Math.PI);
            break;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('grados').addEventListener('input',() => gradosRadianes('grados'));
    document.getElementById('radianes').addEventListener('input',() => gradosRadianes('radianes'));
});

/**
 * Mostrar/Ocultar
 * @method mostrarOcultar
 * @param {string} state - El estado de la visibilidad ('mostrar' o 'ocultar')
 * @return {void}
 */
function mostrarOcultar(state) {
    if(state == 'mostrar'){
        document.querySelector('#unDiv').style.display = 'block';
    }
    else if(state == 'ocultar'){
        document.querySelector('#unDiv').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mostrarDiv').addEventListener('click',() => mostrarOcultar('mostrar'));
    document.getElementById('ocultarDiv').addEventListener('click',() => mostrarOcultar('ocultar'));
});

/**
 * @method updateSum
 * Actualiza el resultado de la suma
 * @return {void}
 */
function updateSum() {
    const num1 = parseFloat(document.getElementById('nums1').value) || 0;
    const num2 = parseFloat(document.getElementById('nums2').value) || 0;
    document.getElementById('totalS').value = num1 + num2;
}

/**
 * @method updateSubtraction
 * Actualiza el resultado de la resta
 * @return {void}
 */
function updateSubtraction() {
    const num1 = parseFloat(document.getElementById('numr1').value) || 0;
    const num2 = parseFloat(document.getElementById('numr2').value) || 0;
    document.getElementById('totalR').value = num1 - num2;
}

/**
 * @method updateMultiplication
 * Actualiza el resultado de la multiplicación
 * @return {void}
 */
function updateMultiplication() {
    const num1 = parseFloat(document.getElementById('numm1').value) || 0;
    const num2 = parseFloat(document.getElementById('numm2').value) || 0;
    document.getElementById('totalM').value = num1 * num2;
}

/**
 * @method updateDivision
 * Actualiza el resultado de la división
 * @return {void}
 */
function updateDivision() {
    const num1 = parseFloat(document.getElementById('numd1').value) || 0;
    const num2 = parseFloat(document.getElementById('numd2').value) || 0;
    document.getElementById('totalD').value = num2 !== 0 ? num1 / num2 : 'Error';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('nums1').addEventListener('input', updateSum);
    document.getElementById('nums2').addEventListener('input', updateSum);

    document.getElementById('numr1').addEventListener('input', updateSubtraction);
    document.getElementById('numr2').addEventListener('input', updateSubtraction);

    document.getElementById('numm1').addEventListener('input', updateMultiplication);
    document.getElementById('numm2').addEventListener('input', updateMultiplication);

    document.getElementById('numd1').addEventListener('input', updateDivision);
    document.getElementById('numd2').addEventListener('input', updateDivision);
});

/**
 * @method drawShapes
 * Dibuja un círculo y un cuadrado en el canvas
 * @return {void}
 */
function drawShapes() {
    const canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        
        // Dibujar un cuadrado
        ctx.fillStyle = 'blue';
        ctx.fillRect(50, 50, 200, 200);
        
        // Dibujar un círculo
        ctx.beginPath();
        ctx.arc(400, 150, 100, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.stroke();
    } else {
        alert('Tu navegador no soporta el tag de HTML5 canvas.');
    }
}
document.addEventListener('DOMContentLoaded', drawShapes);

/**
 * @method drawGrid
 * Dibuja un cuadriculado en el canvas
 * @return {void}
 */
function drawGrid() {
    const canvas = document.getElementById('myCanvas2');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const step = 10; // Tamaño del cuadriculado

        // Borrar el canvas antes de dibujar
        ctx.clearRect(0, 0, width, height);

        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.5;

        // Dibujar líneas verticales
        for (let x = 0; x <= width; x += step) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }

        // Dibujar líneas horizontales
        for (let y = 0; y <= height; y += step) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }
    } else {
        alert('Tu navegador no soporta el tag de HTML5 canvas.');
    }
}

// Añadir event listener para el botón
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('drawGridButton').addEventListener('click', drawGrid);
});


/**
* Dibuja la imagen en el canvas desde la posición pasada por parámetro
* @method drawImageAtPosition
* @param {number} x - La coordenada X para dibujar la imagen
* @param {number} y - La coordenada Y para dibujar la imagen
* @return {void}
*/
function drawImageAtPosition(x, y) {
    const canvas = document.getElementById('myCanvas3');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = './images/auto.png';
    img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
        ctx.drawImage(img, x, y, 30, 30);
        };
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener('click', (event) => {
        event.preventDefault();
        const x = parseFloat(document.getElementById('posicionX').value) || 0;
        const y = parseFloat(document.getElementById('posicionY').value) || 0;
        drawImageAtPosition(x, y);
    });
});