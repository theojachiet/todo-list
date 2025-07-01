const content = document.querySelector('.content');

function displayMenu() {
    const menuTitle = document.createElement('h2');
    const menuList = document.createElement('ul');
    menuTitle.classList.add('menu');
    menuList.classList.add('menu');

    menuTitle.textContent = 'NOS MENUS COSMO-GEODESIQUES';

    //MENU ITEMS
    menuList.appendChild(createMenuItem('Burger Effondré - 50€', "Le burger existe seulement si tu l'observe et restera froid tout le temps"));
    menuList.appendChild(createMenuItem('Spaghetti Intriqués - 50€', "Chaque nouille est liée à une autre dans l'assiette ou ailleurs dans le monde"));
    menuList.appendChild(createMenuItem('Soupe probable - 50€', "Contient peut-être des champignons, peut-être des courgettes ou un concept de courgettes"));
    menuList.appendChild(createMenuItem('Entrecôte de Schrödinger - 50€', "A la fois saignante, à point et vegan"));
    menuList.appendChild(createMenuItem('Tiramisu Multiversel', "Vous ne pourrez le manger que dans les dimensions où vous ne faites pas de régime."));

    // GENERAL APPEND
    content.appendChild(menuTitle);
    content.appendChild(menuList);
}

function createMenuItem(title, content) {
    const item = document.createElement('li');
    const itemTitle = document.createElement('p');
    const itemContent = document.createElement('p');

    itemTitle.classList.add('menu-title');
    itemContent.classList.add('menu-content');
    itemTitle.textContent = title;
    itemContent.textContent = content;

    item.appendChild(itemTitle);
    item.appendChild(itemContent);
    
    return item;
}

export { displayMenu };
