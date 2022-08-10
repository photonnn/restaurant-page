export default function contactLoad() {
    const content = document.querySelector('#content');
    const box_div = document.createElement('div');
    const h1 = document.createElement('h1');

    box_div.setAttribute('id', 'box');
    h1.textContent = "You can contact us via email: bla.bla@bla.bla";
    box_div.appendChild(h1);

    content.appendChild(box_div);


    return content;
}