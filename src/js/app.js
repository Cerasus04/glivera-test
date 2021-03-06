// ------------------- imports
import $ from 'jquery';
import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad } from 'utils';
import pageWidgetInit from './dev_vendors/dev_widget';
// ------------------- imports###

// ------------------  import components
// ------------------  import components###

window.jQuery = $;
window.$ = $;

const styles = ['color: #fff', 'background: #cf8e1f'].join(';');
const message = 'Developed by Glivera-team https://glivera-team.com/';
// eslint-disable-next-line no-console
console.info('%c%s', styles, message);

// -------------------  dev widget

// -------------------  dev widget###

// -------------------  global variables

const readyFunc = () => {
	console.log('ready');
};

const loadFunc = () => {
	console.log('page load');
};

documentReady(() => {
	readyFunc();
});

pageLoad(() => {
	loadFunc();
});

// open tags
const tagsBtn = document.querySelector('.nav__btn');
const tagsList = document.querySelector('.nav__tags');
const closeBtn = document.querySelector('.nav__close');

const openList = () => {
	tagsList.classList.add('nav__tags--open');
};
const closeList = () => {
	tagsList.classList.remove('nav__tags--open');
};
tagsBtn.addEventListener('click', openList);
closeBtn.addEventListener('click', closeList);
