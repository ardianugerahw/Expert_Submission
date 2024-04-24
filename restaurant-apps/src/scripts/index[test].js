import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

console.log('Hello Coders! :)');
const tombol = document.querySelector('#menu');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

tombol.addEventListener('click', function (event) {
	drawer.classList.toggle('open');
	event.stopPropagation();
});

main.addEventListener('click', function () {
	drawer.classList.remove('open');
});
