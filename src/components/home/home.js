export default function home() {
    const content = document.createElement('div');
    content.setAttribute('id', 'home-page');

    const header = document.createElement('h1');
    header.innerText = "Welcome to Disco Ice Cream - Where Flavor Meets Funk!"

    const blurb = document.createElement('p');
    blurb.innerText = "Step into a world of vibrant retro vibes and delectable treats at our whimsical ice cream parlor. Indulge your taste buds with our handcrafted, creamy concoctions available in an array of dazzling flavors, each one carefully curated to satisfy your sweetest cravings. Get ready to groove to the infectious tunes of the disco as you savor the delightful experience of Disco Ice Cream, the ultimate destination for a delicious journey through nostalgia!";

    const address = document.createElement('p');
    address.innerText = "123 Ice Street, Toronto, ON";

    const time = document.createElement('p');
    time.innerText = "Mondays to Saturdays, 10:00 A.M. to 7:00 P.M"

    content.appendChild(header);
    content.appendChild(blurb);
    content.appendChild(address);
    content.appendChild(time);
    return content;
}
