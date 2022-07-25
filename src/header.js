import { pageRemover } from "./pageRemover";
import { printHome } from "./home";
import { printMenu } from "./menu";
import { printContacts } from "./contacts";
import { printFooter } from "./footer";

const printHeader = () => {
    const header = document.createElement('header');

    const logo = document.createElement('h1');
    logo.classList.add('logo');
    logo.innerText = 'Il Pastoni';

    const nav = document.createElement('nav');

    const btnHome = document.createElement('div');
    btnHome.id = 'btnHome';
    btnHome.classList.add('navButton');
    btnHome.innerText = 'Home';
    btnHome.onclick = () => {console.log('home');
        pageRemover();
        printHome();
        printFooter();
    };

    const btnMenu = document.createElement('div');
    btnMenu.id = 'btnMenu';
    btnMenu.classList.add('navButton');
    btnMenu.innerText = 'Menu';
    btnMenu.onclick = () => {console.log('menu');
        pageRemover();
        printMenu();
        printFooter();
    };

    const btnContacts = document.createElement('div');
    btnContacts.id = 'btnContacts';
    btnContacts.classList.add('navButton');
    btnContacts.innerText = 'Contacts';
    btnContacts.onclick = () => {console.log('contacts');
        pageRemover();
        printContacts();
        printFooter();
    };

    nav.appendChild(btnHome);
    nav.appendChild(btnMenu);
    nav.appendChild(btnContacts);

    header.appendChild(logo);
    header.appendChild(nav);

    const content = document.querySelector('#content');
    content.appendChild(header);
}

export { printHeader };