import './style.css';
import { printHeader } from './header';
import { printFooter } from './footer';

const content = document.querySelector('#content');

content.appendChild(printHeader());
content.appendChild(printFooter());
