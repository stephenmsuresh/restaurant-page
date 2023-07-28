import IceCream from './amy-shamblen-310bcopEdXU-unsplash.jpg';

export default function menu() {
    const content = document.createElement('div');
    content.setAttribute('id', 'menu-page');

    const header = document.createElement('h1');
    header.innerText = "MENU"

    const iceCream = document.createElement('IMG');
    iceCream.src = IceCream;

    const flavors = document.createElement('p');
    flavors.innerText = "Our Flavors Include Chocolate, Ube, Mango, And More!"

    const toppings = document.createElement('p');
    toppings.innerText = "Add Toppings Like Nuts, Sprinkles, Cookie Crumble, And More!"

    const menuText = document.createElement('p');
    menuText.innerText = "Add Scoops of Any Flavor for Only $1 to Your Cone or Bowl!"

    content.appendChild(header);
    content.appendChild(iceCream);
    content.appendChild(flavors);
    content.appendChild(toppings);
    content.appendChild(menuText);

    // Photo by <a href="https://unsplash.com/@amyshamblen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Amy Shamblen</a> on <a href="https://unsplash.com/photos/310bcopEdXU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    return content;
}