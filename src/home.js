const content = document.querySelector('.content');

const displayHome = () => {
    const homeTitle = document.createElement('h2');
    const homeParagraph = document.createElement('p');

    homeParagraph.classList.add('home');
    homeTitle.classList.add('home');
    homeTitle.innerHTML = 'Le <strong>meilleur</strong> restaurant <strong>quantique</strong> du secteur <strong>tellurique</strong>';
    homeParagraph.innerHTML = "Alignez vos chakras dans cet espace anti 5g et ouvert aux tachyons positifs. <br>Jamais manger n'a été aussi cosmique";

    content.appendChild(homeTitle);
    content.appendChild(homeParagraph);
};

export {displayHome};
