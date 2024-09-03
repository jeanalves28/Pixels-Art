const quadroNegro = () => document.querySelector('#pixel-board');
const pixels = () => document.querySelectorAll('.pixel');
const paletaDeCores = () => document.querySelectorAll('.color');

const getHeight = (element) =>
	Number(window.getComputedStyle(element).height.match(/\d+/));

const getWidth = (element) =>
	Number(window.getComputedStyle(element).width.match(/\d+/));

const getRowGap = (element) =>
	Number(window.getComputedStyle(element).rowGap.match(/\d+/));

const buttonColorRandom = document.querySelector('#button-random-color');
const buttonClearPixels = document.querySelector('#clear-board');
const buttonGerar = document.querySelector('#generate-board');
const inputSize = document.querySelector('#input-size-pixels');

function resizeViewScreen() {
	let countGap = 0;
	let elementsHeight = 0;

	for (const element of document.querySelectorAll('body > *')) {
		const height = getHeight(element);

		if (height) {
			elementsHeight += height;

			countGap += 1;
		}
	}

	elementsHeight = (getRowGap(document.body) * (countGap - 1)) + elementsHeight;

	if (elementsHeight > window.innerHeight) {
		document.body.style.height = 'max-content';
	} else document.body.style.height = '100vh';

	if (getWidth(quadroNegro()) > window.innerWidth) {
		document.body.style.width = 'max-content';
	} else document.body.style.width = '100vw';
}

function handlerColoringPixel(e) {
	const color = JSON.parse(sessionStorage.getItem('pincel'));
	let currentBlocks = [];

	if (color) {
		e.currentTarget.style.backgroundColor = color;

		e.currentTarget.style.borderColor = color;
	} else {
		e.currentTarget.style.backgroundColor = 'black';

		e.currentTarget.style.borderColor = 'black';
	}

	pixels()
		.forEach((tag) =>
			currentBlocks.push(window.getComputedStyle(tag).backgroundColor),
		);

	localStorage.setItem('pixels', JSON.stringify(currentBlocks));
}

function addPixels(newTam) {
	const nodes = document.createDocumentFragment();
	const newPixels = [];

	let i = 0;

	while (i < newTam ** 2) {
		const div = document.createElement('div');

		div.classList.add('pixel');

		div.addEventListener('click', handlerColoringPixel);

		nodes.appendChild(div);

		newPixels.push('rgb(255,255,255)');

		i++;
	}

	pixels()
		.forEach((e) => e.remove());

	quadroNegro()
		.appendChild(nodes);

	quadroNegro().style.height = `calc(42px * ${newTam})`;

	quadroNegro().style.width = `calc(42px * ${newTam})`;

	resizeViewScreen();

	localStorage.setItem('boardSize', JSON.stringify(newTam));

	localStorage.setItem('pixels', JSON.stringify(newPixels));
}

function getRandomPalette() {
	const colors = [
		'rgb(128, 0, 128)',
		'rgb(255, 255, 0)',
		'rgb(165, 42, 42)',
		'rgb(238, 130, 238)',
		'rgb(0, 255, 255)',
		'rgb(128, 128, 128)',
		'rgb(255, 99, 71)',
		'rgb(255, 165, 0)',
		'rgb(255, 215, 0)',
		'rgb(255, 0, 255)',
		'rgb(128, 0, 0)',
		'rgb(0, 128, 0)',
		'rgb(75, 0, 130)',
		'rgb(255, 20, 147)',
		'rgb(128, 128, 0)',
		'rgb(192, 192, 192)',
		'rgb(0, 128, 128)',
		'rgb(0, 0, 128)',
		'rgb(255, 0, 0)',
		'rgb(0, 255, 0)',
		'rgb(0, 0, 255)',
	];

	let condition = false;
	let newPalette = [];

	do {
		condition = false;

		for (let i = 0; i < 3; i++) {
			const random = Math.round(Math.random() * (colors.length - 1));

			newPalette.push(colors[random]);
		}

		console.log(newPalette);

		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (newPalette[i] === newPalette[j] && i !== j) {
					condition = true;

					newPalette = [];

					break;
				}
			}

			if (condition) break;
		}
	} while (condition);

	return newPalette;
}

paletaDeCores()
	.forEach((i) => {
		i.addEventListener('click', (e) => {
			const color = window
				.getComputedStyle(e.currentTarget)
				.getPropertyValue('background-color');

			sessionStorage.setItem('pincel', JSON.stringify(color));
		});
	});

pixels()
	.forEach((pixel) => {
		pixel.addEventListener('click', handlerColoringPixel);
	});

buttonColorRandom.addEventListener('click', () => {
	let condition = false;

	do {
		const newPalette = getRandomPalette();

		condition = false;

		for (let i = 1; i < paletaDeCores().length; i++) {
			const bg = window.getComputedStyle(paletaDeCores()[i]).backgroundColor;

			for (let j = 1; j <= 3; j++) {
				if (newPalette[j] === bg) {
					condition = true;

					break;
				}
			}

			if (condition) break;
		}

		if (!condition) {
			for (let i = 1; i < paletaDeCores().length; i++) {
				paletaDeCores()[i].style.backgroundColor = newPalette[i - 1];
			}
		}
	} while (condition);
});

buttonClearPixels.addEventListener('click', () => {
	pixels()
		.forEach((pixel) => {
			pixel.style.backgroundColor = 'white';

			pixel.style.borderColor = 'black';
		});

	localStorage.removeItem('pixels');

	localStorage.removeItem('boardSize');
});

buttonGerar.addEventListener('click', () => {
	const boardSize = JSON.parse(localStorage.getItem('boardSize'));
	let inputInt = Number(inputSize.value);

	if (Number.isNaN(inputInt) || !Number(inputInt)) {
		window.alert('Board inválido!');
	} else {
		if (inputInt < 5) {
			inputInt = 5;

			inputSize.value = 5;
		} else if (inputInt > 50) {
			inputInt = 50;

			inputSize.value = 50;
		}

		if (boardSize) addPixels(inputInt);

		localStorage.setItem('boardSize', JSON.stringify(inputInt));
	}
});

function iniciarLocalStoragePixels() {
	const savePixels = JSON.parse(localStorage.getItem('pixels'));
	const boardSize = JSON.parse(localStorage.getItem('boardSize'));

	if (savePixels) {
		const nodes = document.createDocumentFragment();

		for (const color of savePixels) {
			const div = document.createElement('div');

			div.classList.add('pixel');

			if (/white|(255,? ?){3}/i.test(color)) {
				div.style.backgroundColor = color;

				div.style.borderColor = 'rgb(0, 0, 0)';
			} else {
				div.style.backgroundColor = color;

				div.style.borderColor = color;
			}

			div.addEventListener('click', handlerColoringPixel);

			nodes.appendChild(div);
		}

		pixels()
			.forEach((e) => e.remove());

		quadroNegro()
			.appendChild(nodes);
	}

	if (boardSize) {
		quadroNegro().style.height = `calc(42px * ${boardSize})`;

		quadroNegro().style.width = `calc(42px * ${boardSize})`;

		inputSize.value = boardSize;
	} else localStorage.setItem('boardSize', JSON.stringify(5));
}

function iniciarLocalStorageColorPalette() {
	const saveColors = JSON.parse(localStorage.getItem('colorPalette'));
	const colorsPalette = ['black', 'red', 'lime', 'blue'];

	if (saveColors) {
		for (let i = 0; i < 4; i++) {
			paletaDeCores()[i].style.backgroundColor = saveColors[i];
		}
	} else {
		for (let i = 0; i < 4; i++) {
			paletaDeCores()[i].style.backgroundColor = colorsPalette[i];
		}
	}
}

window.onload = () => {
	sessionStorage.setItem('pincel', JSON.stringify('rgb(0, 0, 0)'));

	iniciarLocalStorageColorPalette();

	iniciarLocalStoragePixels();

	resizeViewScreen();
};
