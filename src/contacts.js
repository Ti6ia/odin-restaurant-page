const printContacts = () => {
    const main = document.createElement('main');
    main.id = 'contacts';

    const contacts = document.createElement('div');
    contacts.classList.add('contacts');

    const h2 = document.createElement('h2');
    h2.innerText = 'Where to find us:';

    const map = document.createElement('iframe');
    map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5624.108245682123!2d16.326713902020785!3d78.65650618404653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x459d998a5898a749%3A0xbb252eafca66d80c!2sPyramiden%209170%2C%20Svalbard%20and%20Jan%20Mayen!5e1!3m2!1sen!2sit!4v1658763123511!5m2!1sen!2sit';
    map.allowFullscreen = "";
    map.loading = "lazy";
    map.referrerPolicy = "no-referrer-when-downgrade";
    
    contacts.appendChild(h2);
    contacts.appendChild(map);

    main.appendChild(contacts);

    const content = document.querySelector('#content');
    content.appendChild(main);
}

export { printContacts }