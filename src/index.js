import './style.css';
import { printHeader } from './header';
import { printHome } from './home';
import { printFooter } from './footer';
import { printContacts } from './contacts';


const body = document.querySelector('body');
const content = document.querySelector('#content');

printHeader();
printHome();
printFooter();

