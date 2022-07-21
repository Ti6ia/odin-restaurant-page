const printHeader = () => {
    const header = document.createElement('header');

    const logo = document.createElement('h1');
    logo.classList.add('logo');
    logo.innerText = 'Il Pastoni';

    const nav = document.createElement('nav');

    const btnHome = document.createElement('div');
    btnHome.classList.add('btnHome');
    btnHome.innerText = 'Home';

    const btnMenu = document.createElement('div');
    btnMenu.classList.add('btnMenu');
    btnMenu.innerText = 'Menu';

    const btnContacts = document.createElement('div');
    btnContacts.classList.add('btnContacts');
    btnContacts.innerText = 'Contacts';

    nav.appendChild(btnHome);
    nav.appendChild(btnMenu);
    nav.appendChild(btnContacts);

    header.appendChild(logo);
    header.appendChild(nav);

    return header;
}

export { printHeader };