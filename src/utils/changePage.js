import menu from "../components/menu/menu";
import home from "../components/home/home";
import contact from "../components/contact/contact";

export default function changePage(evt) {
    // https://stackoverflow.com/questions/52447250/calling-an-exported-function-by-a-string-value-of-the-function-name
    const pages = { menu, home, contact };
    const selection = evt.target.id;
    const content = pages[selection]();
    
    const main = document.querySelector('#main');
    main.innerHTML = "";
    main.appendChild(content);
}