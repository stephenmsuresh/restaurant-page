import navbar from "./components/navbar/navbar";

function setPage() {
    const content = document.querySelector('#content');
    content.appendChild(navbar());
}

setPage();