// Fonction pour charger le script selon la taille de l'écran
function loadScriptBasedOnScreenSize() {
    const canvas = document.getElementById('trajectoryCanvas');
    const context = canvas.getContext('2d');
    const moveElement = document.querySelector('.moveElement');

    // Pour les écrans avec max-width 768px (animation verticale)
    if (window.matchMedia("(max-width: 768px)").matches) {
        // Premier script - Animation verticale
        canvas.width = document.querySelector('.roadmap').offsetWidth;
        canvas.height = document.querySelector('.roadmap').offsetHeight;
        const startPosition = { x: window.innerWidth / 2, y: 0 }; // Position initiale
        const endPosition = { x: window.innerWidth / 2, y: canvas.height * 0.94 }; // Position finale

        function drawLineVertical() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.moveTo(startPosition.x, startPosition.y);
            context.lineTo(startPosition.x, moveElement.offsetTop + moveElement.offsetHeight / 2); // Ligne verticale
            context.strokeStyle = 'black';
            context.lineWidth = 4;
            context.stroke();
        }

        setInterval(() => {
            drawLineVertical(); // Met à jour la ligne verticalement
        }, 100);

    // Pour les écrans avec min-width 767.9px (animation horizontale)
    } else if (window.matchMedia("(min-width: 767.9px)").matches) {
        // Second script - Animation horizontale
        function resizeCanvasToRoadmap() {
            const roadmap = document.querySelector('.roadmap');
            canvas.width = roadmap.clientWidth;
            canvas.height = roadmap.clientHeight;
        }

        window.addEventListener('resize', resizeCanvasToRoadmap); // Réajuste le canevas lorsque la fenêtre est redimensionnée
        resizeCanvasToRoadmap();

        const startPosition = { x: 0, y: canvas.height / 2 }; // Position initiale
        const endPosition = { x: canvas.width * 0.94, y: canvas.height / 2 }; // Position finale

        function drawLineHorizontal() {
            const x = moveElement.getBoundingClientRect().left + (moveElement.offsetWidth / 2);
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.moveTo(startPosition.x, startPosition.y);
            context.lineTo(x, endPosition.y);
            context.strokeStyle = 'black';
            context.lineWidth = 5;
            context.stroke();
        }

        setInterval(() => {
            drawLineHorizontal(); // Met à jour la ligne horizontalement
        }, 100);
    }
}

// Charge le script lors du chargement de la page
loadScriptBasedOnScreenSize();

// Recharge le bon script lorsque la taille de la fenêtre change
window.addEventListener('resize', loadScriptBasedOnScreenSize);
