const paletaDeCores = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');
const input = document.querySelector('#board-size');
const buttonColorRandom = document.querySelector('#button-random-color');
const buttonClearPixels = document.querySelector('#clear-board');
const buttonVQV = document.querySelector('#generate-board');
const quadroNegro = document.querySelector('#pixel-board');
let valor = null;

function getBackgroundColor(tag) {
  return window.getComputedStyle(tag).getPropertyValue('background-color');
}

function getDivsDynamics() {
  return document.querySelectorAll('.dynamicDiv');
}

function givingColorsPixelsDynamics(e) {
  if (typeof valor === 'string') {
    e.target.style.backgroundColor = valor;
  } else e.target.style.backgroundColor = 'Black';
  const divsDynamics = getDivsDynamics();
  const obj = JSON.parse(localStorage.getItem('boardSize'));
  const listColors = obj.ColorsDivsDynamics;
  while (listColors.length !== 0) listColors.pop();
  divsDynamics.forEach((tag) => {
    const valorBackground = getBackgroundColor(tag);
    listColors.push(valorBackground);
  });
  obj.ColorsDivsDynamics = listColors;
  localStorage.setItem('boardSize', JSON.stringify(obj));
}

function reloadQuadroNegro(obj) {
  const newDivs = document.createDocumentFragment();
  const limDivs = obj.TamDivsDynamics;
  const colors = obj.ColorsDivsDynamics;
  for (let i = 0; i < limDivs; i += 1) {
    const tagDiv = document.createElement('div');
    tagDiv.classList.add('pixel', 'dynamicDiv');
    tagDiv.style.backgroundColor = colors[i];
    tagDiv.addEventListener('click', givingColorsPixelsDynamics);
    newDivs.appendChild(tagDiv);
  }
  quadroNegro.appendChild(newDivs);
}

function iniciarLocalStorageboardSize() {
  if (localStorage.getItem('boardSize') === null) {
    const obj = { ColorsDivsDynamics: [] };
    localStorage.setItem('boardSize', JSON.stringify(obj));
  } else {
    const obj = JSON.parse(localStorage.getItem('boardSize'));
    const tamQuadroNegro = String(obj.sizeQuadroNegro);
    quadroNegro.style.width = `calc(42px * ${tamQuadroNegro})`;
    quadroNegro.style.height = `calc(42px * ${tamQuadroNegro})`;
    reloadQuadroNegro(obj);
  }
}

function iniciarLocalStoragePixelBoard() {
  if (localStorage.getItem('pixelBoard') === null) {
    localStorage.setItem('pixelBoard', JSON.stringify([]));
  } else {
    const listLocal = JSON.parse(localStorage.getItem('pixelBoard'));
    for (let i = 0; i < listLocal.length; i += 1) {
      pixels[i].style.backgroundColor = listLocal[i];
    }
  }
}

function iniciarLocalStorageColorPalette() {
  if (localStorage.getItem('colorPalette') === null) {
    localStorage.setItem('colorPalette', JSON.stringify([]));
  } else {
    const listLocal = JSON.parse(localStorage.getItem('colorPalette'));
    for (let i = 0; i < listLocal.length; i += 1) {
      paletaDeCores[i].style.backgroundColor = listLocal[i];
    }
  }
}

function savingPaletteLocalStorage() {
  const listLocal = JSON.parse(localStorage.getItem('colorPalette'));
  while (listLocal.length !== 0) listLocal.pop();
  paletaDeCores.forEach((tag) => {
    const valorBackground = getBackgroundColor(tag);
    listLocal.push(valorBackground);
  });
  localStorage.setItem('colorPalette', JSON.stringify(listLocal));
}

buttonColorRandom.addEventListener('click', () => {
  const SelectorColors = ['Purple', 'Yellow', 'Brown', 'Violet', 'Cyan', 'Grey', 'Tomato',
    'Orange', 'Gold', 'Magenta', 'Maroon', 'Indigo', 'Lime', 'DeepPink', 'Olive', 'Silver',
    'Teal', 'Navy', 'Red', 'Blue', 'Green'];
  let color1 = 0;
  let color2 = 0;
  let color3 = 0;
  do {
    color1 = Math.round(Math.random() * SelectorColors.length);
    color2 = Math.round(Math.random() * SelectorColors.length);
    color3 = Math.round(Math.random() * SelectorColors.length);
  } while (color1 === color2 || color1 === color3 || color2 === color3);
  paletaDeCores[1].style.backgroundColor = SelectorColors[color1];
  paletaDeCores[2].style.backgroundColor = SelectorColors[color2];
  paletaDeCores[3].style.backgroundColor = SelectorColors[color3];
  savingPaletteLocalStorage();
});

function clearDynamics() {
  const obj = JSON.parse(localStorage.getItem('boardSize'));
  const colors = obj.ColorsDivsDynamics;
  while (colors.length !== 0) colors.pop();
  obj.ColorsDivsDynamics = colors;
  return obj;
}

buttonClearPixels.addEventListener('click', () => {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'White';
  }
  const divsDynamics = document.querySelectorAll('.dynamicDiv');
  for (let i = 0; i < divsDynamics.length; i += 1) {
    divsDynamics[i].style.backgroundColor = 'White';
  }
  const listLocal = JSON.parse(localStorage.getItem('pixelBoard'));
  while (listLocal.length !== 0) listLocal.pop();
  pixels.forEach((tag) => {
    const valorBackground = getBackgroundColor(tag);
    listLocal.push(valorBackground);
  });
  localStorage.setItem('boardSize', JSON.stringify(clearDynamics()));
  localStorage.setItem('pixelBoard', JSON.stringify(listLocal));
});

paletaDeCores.forEach((i) => {
  i.addEventListener('click', (e) => {
    valor = window.getComputedStyle(e.target).getPropertyValue('background-color');
    document.querySelector('.selected').classList.remove('selected');
    e.target.classList.add('selected');
  });
});

pixels.forEach((pixel) => {
  pixel.addEventListener('click', (e) => {
    if (typeof valor === 'string') {
      e.target.style.backgroundColor = valor;
    } else e.target.style.backgroundColor = 'Black';
    const listLocal = JSON.parse(localStorage.getItem('pixelBoard'));
    while (listLocal.length !== 0) listLocal.pop();
    pixels.forEach((tag) => {
      const valorBackground = getBackgroundColor(tag);
      listLocal.push(valorBackground);
    });
    localStorage.setItem('pixelBoard', JSON.stringify(listLocal));
  });
});

function savingBoardSize(sizeQuadro, divs) {
  const obj = JSON.parse(localStorage.getItem('boardSize'));
  let colors = JSON.parse(localStorage.getItem('pixelBoard'));
  colors = [];
  obj.sizeQuadroNegro = sizeQuadro;
  obj.TamDivsDynamics = divs;
  localStorage.setItem('pixelBoard', JSON.stringify(colors));
  localStorage.setItem('boardSize', JSON.stringify(obj));
}

function resizeQuadroNegro(divs, tamQuadro) {
  const sameInput = JSON.parse(localStorage.getItem('boardSize'));
  if (sameInput.sizeQuadroNegro !== tamQuadro) {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'White';
    }
    divs.forEach((i) => {
      i.remove();
    });
    localStorage.setItem('boardSize', JSON.stringify(clearDynamics()));
  }
  quadroNegro.style.width = `calc(42px * ${5})`;
  quadroNegro.style.heigth = `calc(42px * ${5})`;
}

function addPixels(sizeQuadroNegro) {
  const divsDynamics = getDivsDynamics();
  resizeQuadroNegro(divsDynamics, sizeQuadroNegro);
  const newDivs = document.createDocumentFragment();
  const limDivs = Math.abs(pixels.length - (sizeQuadroNegro * sizeQuadroNegro));
  const sameInput = JSON.parse(localStorage.getItem('boardSize'));
  quadroNegro.style.height = `calc(42px * ${String(sizeQuadroNegro)})`;
  quadroNegro.style.width = `calc(42px * ${String(sizeQuadroNegro)})`;
  if (sizeQuadroNegro !== sameInput.sizeQuadroNegro) {
    for (let i = 0; i < limDivs; i += 1) {
      const tagDiv = document.createElement('div');
      tagDiv.classList.add('pixel', 'dynamicDiv');
      tagDiv.addEventListener('click', givingColorsPixelsDynamics);
      newDivs.appendChild(tagDiv);
    }
  }
  quadroNegro.appendChild(newDivs);
  savingBoardSize(sizeQuadroNegro, limDivs);
}

buttonVQV.addEventListener('click', () => {
  let inputInt = parseInt(input.value, 10);
  if (inputInt < 5) inputInt = 5;
  else if (inputInt > 50) inputInt = 50;
  else if (Number.isNaN(inputInt)) window.alert('Board inválido!');
  if (!Number.isNaN(inputInt)) addPixels(inputInt);
});

window.onload = () => {
  iniciarLocalStorageColorPalette();
  iniciarLocalStoragePixelBoard();
  iniciarLocalStorageboardSize();
};
