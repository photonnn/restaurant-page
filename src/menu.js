export default function menuLoad() {
    const content = document.querySelector('#content');
    const box_div = document.createElement('div');
    const h1 = document.createElement('h1');

    box_div.setAttribute('id', 'box');
    h1.textContent = "Full menu avalable soon!";
    box_div.appendChild(h1);

    content.appendChild(box_div);


    return content;
}