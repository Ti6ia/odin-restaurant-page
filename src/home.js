import Pastona from './pastone.jpg';

const printHome = () => {
    const home = document.createElement('main');
    home.id = 'home';

    const text0 = document.createElement('h2');
    text0.innerText = 'Just the best Pastoni on Earth';

    const text1 = document.createElement('p');
    text1.innerText = "Not very healthy but it's exxxtra good.";

    const text2 = document.createElement('h2');
    text2.innerText = 'Come to visit us!!';

    const pastone = new Image();
    pastone.src = Pastona;

    home.appendChild(text0);
    home.appendChild(text1);
    home.appendChild(pastone);
    home.appendChild(text2);

    return home;
}

export { printHome };