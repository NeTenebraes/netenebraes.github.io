const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

// Ajustar el canvas al tamaño de la ventana
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Caracteres:  Katakana, Hiragana, Latinos o símbolos
const matrixChars = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charsArray = matrixChars.split('');

const fontSize = 10;
// Número de columnas = ancho de pantalla / tamaño de fuente
let columns = Math.floor(canvas.width / fontSize);

// Un array para guardar la posición vertical 'y' de cada columna
let drops = [];
for (let i = 0; i < columns; i++) {
    // Inicializar cada columna en la parte superior, pero aleatoriamente para que no caigan todas a la vez
    drops[i] = Math.random() * -100;
}

function drawMatrix() {
    // Dibujar un rectángulo semi-transparente sobre todo el canvas en cada frame.
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Configurar el estilo del texto (tu verde neón)
    ctx.fillStyle = '#00f2ff'; // Usa tu variable --accent
    ctx.font = fontSize + 'px monospace';

    // Iterar sobre cada columna
    for (let i = 0; i < drops.length; i++) {
        // Elegir un carácter aleatorio
        const char = charsArray[Math.floor(Math.random() * charsArray.length)];
        
        // Dibujar el carácter en la posición actual (x, y)
        // x = columna * tamaño fuente, y = posición vertical * tamaño fuente
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Si el carácter ha llegado al final de la pantalla, reiniciar la columna
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Mover la posición vertical hacia abajo para el próximo frame
        drops[i]++;
    }
}

// Ejecutar la animación a una velocidad controlada (aprox. 30 fps)
setInterval(drawMatrix, 35);
