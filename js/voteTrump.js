const texts = ["VOTE TRUMP", "VOTE TRUMP", "VOTE TRUMP"];
const h1Elements = [document.getElementById("line1"), document.getElementById("line2"), document.getElementById("line3")];

function typeWriter(text, element, delay, callback) {
    let index = 0;
    const interval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
        } else {
            clearInterval(interval);
            callback(); // Appelle la fonction de suppression une fois l'écriture terminée
        }
    }, delay);
}

function eraseText(element, delay, callback) {
    let index = element.textContent.length;
    const interval = setInterval(() => {
        if (index > 0) {
            element.textContent = element.textContent.slice(0, index - 1);
            index--;
        } else {
            clearInterval(interval);
            callback(); // Appelle le callback si il y a un autre h1 à effacer
        }
    }, delay);
}

function startTyping() {
    texts.forEach((text, i) => {
        setTimeout(() => {
            typeWriter(text, h1Elements[i], 150, () => {
                if (i === texts.length - 1) { // Commence à effacer après le dernier h1
                    eraseTexts();
                }
            });
        }, i * 1000); // Délai de 3 secondes avant de commencer chaque ligne
    });
}

function eraseTexts() {
    h1Elements.reverse().forEach((element, i) => {
        setTimeout(() => {
            eraseText(element, 150, () => {
                if (i === h1Elements.length - 1) {
                    // Optionnel : redémarrer l'effet d'écriture
                    setTimeout(startTyping, 1000); // Redémarre l'animation après 1 seconde
                }
            });
        }, i * 1000); // Délai de 3 secondes entre chaque effacement
    });
}

window.onload = startTyping; // Démarre l'animation lors du chargement de la page
