var swiper = new Swiper('.swiper', {
    loop: true, // Répéter les slides en boucle
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000, // Délai entre chaque slide
    },
    effect: 'slide', // Effet de transition
    navigation: {
        nextEl: '.swiper-next', // Sélecteur du bouton suivant
        prevEl: '.swiper-prev', // Sélecteur du bouton précédent
    }
});
