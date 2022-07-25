const cardCreator = (id, pImg, pName, pDescription) => {
    const card = document.createElement('div');
    card.id = id;
    card.classList.add('card');

    const img = new Image();
    img.src = pImg;

    const name = document.createElement('h2');
    name.classList.add('name');
    name.innerText = `${pName}`;

    const description = document.createElement('p');
    description.classList.add('description');
    description.innerText = `${pDescription}`;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(description);

    return card;
}

export { cardCreator };