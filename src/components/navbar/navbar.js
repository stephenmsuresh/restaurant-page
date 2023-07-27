import changePage from "../../utils/changePage";

export default function navbar() {
    const pages = ['home', 'menu', 'contact'];

    const navbar = document.createElement('div');
    navbar.setAttribute('id', 'navbar');

    const links = document.createElement('ul')
    links.setAttribute('id', 'links');

    pages.forEach((page) => {
        const btn = document.createElement('li');
        btn.innerText = page;
        btn.setAttribute('class', 'navlink');
        btn.setAttribute('id', page);
        links.appendChild(btn);
    });
    
    navbar.appendChild(links);

    return navbar;
}