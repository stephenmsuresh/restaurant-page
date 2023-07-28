export default function contact() {
    const content = document.createElement('div');
    content.setAttribute('id', 'contact-page');

    const header = document.createElement('h1');
    header.textContent = "Contact Us"

    const email = document.createElement('p');
    email.innerText = 'discoicecream@disco.com';

    const phone = document.createElement('p');
    phone.innerText = '123-456-7890';

    content.appendChild(header);
    content.appendChild(email);
    content.appendChild(phone);

    return content;
}