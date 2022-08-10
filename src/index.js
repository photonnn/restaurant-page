import './style.css';
import homeLoad from './home.js';
import contactLoad from './contact.js';
import menuLoad from './menu.js';

function addHeader() {
    const header = document.createElement('header');
    const buttons_div = document.createElement('div');


    buttons_div.setAttribute('id', 'buttons');
    buttons_div.appendChild(createDiv("Home"));
    buttons_div.appendChild(createDiv("Menu"));
    buttons_div.appendChild(createDiv("Contact"));



    header.textContent = 'Blooming Seas';
    header.appendChild(buttons_div);

    return header;
}

function createDiv(text) {
    const div = document.createElement('div');
    div.classList.add('btn');
    div.textContent = text;
    return div;
}

function erase() {
    const box = document.querySelector('#box');
    box.remove();
}

document.body.appendChild(addHeader());

const divs = [...document.querySelectorAll('.btn')];
divs.forEach(em => (em.addEventListener('click', () => {
    erase();
    if (em.textContent == "Home") {
        document.body.appendChild(homeLoad());
    } else if (em.textContent == "Menu") {
        document.body.appendChild(menuLoad());
    } else {
        document.body.appendChild(contactLoad());
    }
})))


document.body.appendChild(homeLoad());