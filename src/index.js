import './style.css';
import { printHeader } from './header';
import { printHome } from './home';
import { printFooter } from './footer';

const content = document.querySelector('#content');

content.appendChild(printHeader());
content.appendChild(printHome());
content.appendChild(printFooter());
