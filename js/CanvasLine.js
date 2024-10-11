const canvas = document.getElementById('trajectoryCanvas');
const context = canvas.getContext('2d');

function resizeCanvasToRoadmap() {
    const roadmap = document.querySelector('.roadmap');
    canvas.width = roadmap.clientWidth; // Définit la largeur du canevas égale à celle de la roadmap
    canvas.height = roadmap.clientHeight; // Définit la hauteur du canevas égale à celle de la roadmap
}

window.addEventListener('resize', resizeCanvasToRoadmap); // Réajuste le canevas lorsque la fenêtre est redimensionnée
resizeCanvasToRoadmap(); // Appel initial pour ajuster le canevas lors du chargement de la page

const moveElement = document.querySelector('.moveElement');
const startPosition = { x: 0, y: canvas.height / 2 }; // Position initiale
const endPosition = { x: canvas.width * 0.94, y: canvas.height / 2 }; // Position finale

function drawLine() {
    const x = moveElement.getBoundingClientRect().left + (moveElement.offsetWidth / 2);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.moveTo(startPosition.x, startPosition.y);
    context.lineTo(x, endPosition.y);
    context.strokeStyle = 'black';
    context.lineWidth = 5;
    context.stroke();
}

// Mettre à jour la ligne toutes les 100 ms
setInterval(() => {
    drawLine(); // Redessine la ligne régulièrement
}, 100); // Fréquence de mise à jour de 100 ms