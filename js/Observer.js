document.addEventListener('DOMContentLoaded', () => {
    const roadmapSection = document.querySelector('.roadmap');
    const moveElement = document.querySelector('.moveElement');
    const phases = document.querySelectorAll('.phase');
    
    // Fonction pour démarrer l'animation
    function startAnimations() {
        // Ajoute la classe 'active' pour démarrer l'animation du moveElement et des phases
        moveElement.style.animationPlayState = 'running';
        phases.forEach(phase => {
            phase.style.animationPlayState = 'running';
        });
    }

    // Fonction pour arrêter l'animation
    function stopAnimations() {
        // Met en pause les animations
        moveElement.style.animationPlayState = 'paused';
        phases.forEach(phase => {
            phase.style.animationPlayState = 'paused';
        });
    }

    // Initialisation : Pause les animations par défaut
    stopAnimations();

    // Création de l'observer pour détecter quand la section est visible
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startAnimations(); // Démarre l'animation quand la section devient visible
            } else {
                stopAnimations(); // Optionnel : Arrête l'animation quand la section sort de la vue
            }
        });
    }, {
        threshold: 0.5 // L'animation démarre lorsque 50% de la section est visible
    });

    // Observer la section roadmap
    observer.observe(roadmapSection);
});
