const pageRemover = () => {
    const content = document.querySelector('#content');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    
    content.removeChild(main);
    content.removeChild(footer);
};

export { pageRemover };