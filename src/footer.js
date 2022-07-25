const printFooter = () => {
    const footer = document.createElement('footer');

    const cr = document.createElement('p');
    cr.innerText = 'Copyright 2022 - Ti6ia';

    footer.appendChild(cr);

    const content = document.querySelector('#content');
    content.appendChild(footer);
}

export { printFooter };