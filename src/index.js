import './style.css';
import homeLoad from './home.js';

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
    div.textContent = text;
    return div;
}
document.body.appendChild(addHeader());
document.body.appendChild(homeLoad());