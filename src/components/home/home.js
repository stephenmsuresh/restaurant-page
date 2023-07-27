export default function home() {
    const content = document.createElement('div');
    content.setAttribute('id', 'homepage');

    const header = document.createElement('h1');
    header.innerText = "Welcome to Disco Ice Cream - Where Flavor Meets Funk!"
    content.appendChild(header);
    
    const blurb = document.createElement('p');
    blurb.innerText = "Step into a world of vibrant retro vibes and delectable treats at our whimsical ice cream parlor. Indulge your taste buds with our handcrafted, creamy concoctions available in an array of dazzling flavors, each one carefully curated to satisfy your sweetest cravings. Get ready to groove to the infectious tunes of the '70s as you savor the delightful experience of Disco Ice Cream, the ultimate destination for a delicious journey through nostalgia!";
    content.appendChild(blurb);
    return content;
}
