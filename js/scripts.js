// Obtener los elementos
const rojoSlider = document.getElementById('rojo');
const verdeSlider = document.getElementById('verde');
const azulSlider = document.getElementById('azul');

const rojoValue = document.getElementById('rojoValue');
const verdeValue = document.getElementById('verdeValue');
const azulValue = document.getElementById('azulValue');

const colorBox = document.getElementById('colorBox');
const hexCode = document.getElementById('hexCode');
const colorPicker = document.getElementById('colorPicker');

// Función para actualizar el color en el cuadro
function updateColor() {
    const rojo = rojoSlider.value;
    const verde = verdeSlider.value;
    const azul = azulSlider.value;

    // Actualizar los valores de los campos numéricos
    rojoValue.value = rojo;
    verdeValue.value = verde;
    azulValue.value = azul;

    // Crear el color RGB
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;

    // Establecer el color en el recuadro
    colorBox.style.backgroundColor = colorRGB;

    // Actualizar el código hexadecimal
    const hex = rgbToHex(rojo, verde, azul);
    hexCode.textContent = hex;

    // Actualizar el color picker
    colorPicker.value = hex; // Actualizamos el picker con el nuevo color en formato hexadecimal
}

// Convertir RGB a Hexadecimal
function rgbToHex(r, g, b) {
    const red = parseInt(r).toString(16).padStart(2, '0');
    const green = parseInt(g).toString(16).padStart(2, '0');
    const blue = parseInt(b).toString(16).padStart(2, '0');
    return `#${red}${green}${blue}`.toUpperCase();
}

// Asignar eventos a los sliders
rojoSlider.addEventListener('input', updateColor);
verdeSlider.addEventListener('input', updateColor);
azulSlider.addEventListener('input', updateColor);

// Asignar eventos a los campos de entrada numérica
rojoValue.addEventListener('input', function() {
    const value = rojoValue.value;
    if (value === '') {
        return;
    }
    const numValue = parseInt(value);
    if (numValue >= 0 && numValue <= 255) {
        rojoSlider.value = numValue;
        updateColor();
    } else {
        rojoValue.value = rojoSlider.value;
    }
});

verdeValue.addEventListener('input', function() {
    const value = verdeValue.value;
    if (value === '') {
        return;
    }
    const numValue = parseInt(value);
    if (numValue >= 0 && numValue <= 255) {
        verdeSlider.value = numValue;
        updateColor();
    } else {
        verdeValue.value = verdeSlider.value;
    }
});

azulValue.addEventListener('input', function() {
    const value = azulValue.value;
    if (value === '') {
        return;
    }
    const numValue = parseInt(value);
    if (numValue >= 0 && numValue <= 255) {
        azulSlider.value = numValue;
        updateColor();
    } else {
        azulValue.value = azulSlider.value;
    }
});

// Asignar evento al color picker
colorPicker.addEventListener('input', function() {
    const color = colorPicker.value;
    // Convertimos el valor del color picker a RGB
    const rgb = hexToRgb(color);
    if (rgb) {
        rojoSlider.value = rgb.r;
        verdeSlider.value = rgb.g;
        azulSlider.value = rgb.b;
        updateColor();
    }
});

// Convertir Hexadecimal a RGB
function hexToRgb(hex) {
    let r = 0, g = 0, b = 0;
    // 3 digits
    if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
    }
    // 6 digits
    else if (hex.length === 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
    }
    return { r: r, g: g, b: b };
}

// Inicializar color
updateColor();
