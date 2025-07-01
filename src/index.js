import './style.css';
import { displayHome } from './home';
import { displayMenu } from './menu';
import { displayAbout } from './about';
console.log('here');

const content = document.querySelector('.content');
const buttonHome = document.querySelector('.home');
const buttonMenu = document.querySelector('.menu');
const buttonAbout = document.querySelector('.about');

const newDisplayHome = () => {
    //clear container
    content.textContent = '';

    //Highlight new nav button
    if (buttonAbout.classList.contains('selected')) buttonAbout.classList.remove('selected');
    if (buttonMenu.classList.contains('selected')) buttonMenu.classList.remove('selected');
    if (!buttonHome.classList.contains('selected')) buttonHome.classList.add('selected');

    displayHome();
};

const newDisplayMenu = () => {
    //clear container
    content.textContent = '';

    //Highlight new nav button
    if (buttonAbout.classList.contains('selected')) buttonAbout.classList.remove('selected');
    if (buttonHome.classList.contains('selected')) buttonHome.classList.remove('selected');
    if (!buttonMenu.classList.contains('selected')) buttonMenu.classList.add('selected');

    displayMenu();
};

const newDisplayAbout = () => {
    //clear container
    content.textContent = '';

    //Highlight new nav button
    if (buttonHome.classList.contains('selected')) buttonHome.classList.remove('selected');
    if (buttonMenu.classList.contains('selected')) buttonMenu.classList.remove('selected');
    if (!buttonAbout.classList.contains('selected')) buttonAbout.classList.add('selected');

    displayAbout();
};

buttonHome.addEventListener('click', newDisplayHome);
buttonMenu.addEventListener('click', newDisplayMenu);
buttonAbout.addEventListener('click', newDisplayAbout);

newDisplayHome();