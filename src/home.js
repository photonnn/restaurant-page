export default function homeLoad() {
    const element = document.querySelector('#content');
    const box_div = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');

    h1.textContent = "Welcome to the best restaurant on the east coast!";
    h2.textContent = `Our menu has the most unique dishes you can imagine. 
    Our chefs cook the most exhuisite sea food on the coast.`;
    box_div.setAttribute('id', 'box');
    box_div.appendChild(h1);
    box_div.appendChild(h2);


    element.appendChild(box_div);


    return element;
}