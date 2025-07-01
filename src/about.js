const content = document.querySelector('.content');

function displayAbout() {
    const box = document.createElement('div');
    const aboutTitle = document.createElement('h2');
    const aboutContent = document.createElement('p');

    box.classList.add('content-box');

    aboutTitle.textContent = 'Contactez nous !';
    aboutContent.textContent = "Pour nous contacter, veuillez utiliser la voyance ou l'intrication de vos pensées afin de nous les communiquer.Tout contact par mail ou téléphone 5G sera ignoré et bani.Nous vous souhaitons une bonne journée.";

    box.appendChild(aboutTitle);
    box.appendChild(aboutContent);
    content.appendChild(box);
}

export {displayAbout};