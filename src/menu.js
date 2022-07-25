import Amatriciana from "./pastaImages/amatriciana.jpg";
import CacioPepe from "./pastaImages/cacioEpepe.jpg";
import Carbonara from "./pastaImages/carbonara.jpg";
import Pastone from "./pastaImages/pastone.jpg";
import Ragu from "./pastaImages/ragu.jpg";
import Sugo from "./pastaImages/sugo.jpg";
import { cardCreator } from "./cardCreator"; // id, pImg, pName, pDescription

const printMenu = () => {
    const main = document.createElement('main');
    main.id = 'menu';

    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(cardCreator('ragu', Ragu, 'Ragù', 'Pasta al ragu di carne'));
    menu.appendChild(cardCreator('carbonara', Carbonara, 'Carbonara', 'La classica carbonara'));
    menu.appendChild(cardCreator('pastone', Pastone, 'Pastone', 'Il meglio del meglio'));
    menu.appendChild(cardCreator('amatriciana', Amatriciana, 'Amatriciana', 'Deliziosa amatriciana'));
    menu.appendChild(cardCreator('caciopepe', CacioPepe, 'Cacio e pepe', 'Dove la ritrovi una cacio e pepe così?'));
    menu.appendChild(cardCreator('sugo', Sugo, 'Pasta al sugo', 'La classicissima pasta al sugo'));

    main.appendChild(menu);
    
    const content = document.querySelector('#content');
    content.appendChild(main);
}

export { printMenu };



// const raguCard = document.createElement('div');
    // div.id = "ragu";
    // div.classList.add('card');
    // const raguImg = new Image();
    // raguImg.src = Ragu;
    // const raguName = document.createElement('h2');
    // h2.classList.add('name');
    // raguName.innerText = 'Ragu';
    // const raguDescription = document.createElement('p');
    // raguDescription.classList.add('description');
    // raguDescription.innerText = 'Pasta al ragu di carne'
    // raguCard.appendChild(raguImg);
    // raguCard.appendChild(raguName);
    // raguCard.appendChild(raguDescription);

    // menu.appendChild(raguCard);
    // main.appendChild(menu);