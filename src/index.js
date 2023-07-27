import './style.css'
import navbar from "./components/navbar/navbar";
import main from "./components/main/main";

(function setPage() {
    const content = document.querySelector('#content');
    content.appendChild(navbar());
    const mainContent = main();

    content.appendChild(mainContent);
}())