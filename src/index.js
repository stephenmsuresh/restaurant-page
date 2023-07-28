import './style.css'
import navbar from "./components/navbar/navbar.js";
import main from "./components/main/main.js";
import home from './components/home/home.js';
import menu from './components/menu/menu.js';
import contact from './components/contact/contact.js'
import changePage from './utils/changePage';

(function setPage() {
    const content = document.querySelector('#content');
    content.appendChild(navbar());
    content.appendChild(main());

    let pages = { home, menu, contact };

    let buttons = document.querySelectorAll('#links li');
    buttons.forEach((btn) => {
        btn.addEventListener('click', (evt) => {
            changePage(pages[btn.id](), btn.id);
        })
    })

    changePage(pages['home'](), 'home');
}())