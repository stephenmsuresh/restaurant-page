export default function changePage(component, btn) {
    const main = document.querySelector('#main');
    const links = document.querySelectorAll('#links li');
    links.forEach((link) => {
        link.removeAttribute('style');
    })
    main.innerHTML = "";

    const selected = document.querySelector(`#${btn}`);
    selected.style.backgroundColor = "rgb(154, 15, 189)";
    selected.style.border = "2px solid white";
    main.appendChild(component);
}