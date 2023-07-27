export default function changePage(component) {
    const main = document.querySelector('#main');
    main.innerHTML = "";
    main.appendChild(component);
}