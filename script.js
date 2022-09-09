const paletaDeCores = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');
let valor = null;

document.querySelector('#button-random-color').addEventListener('click', () => {
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
});

document.querySelector('#clear-board').addEventListener('click', () => {
  for (let i = 0; i < pixels.length; i += 1) pixels[i].style.backgroundColor = 'White';
});

paletaDeCores.forEach((i) => {
  i.addEventListener('click', (e) => {
    valor = window.getComputedStyle(e.target).getPropertyValue('background-color');
    document.querySelector('.selected').classList.remove('selected');
    e.target.classList.add('selected');
  });
});

pixels.forEach((i) => {
  i.addEventListener('click', (e) => {
    if (typeof valor === 'string') e.target.style.backgroundColor = valor;
    else e.target.style.backgroundColor = 'Black';
  });
});

document.querySelector('#button-random-color').addEventListener('click', () => {
  const listLocal = JSON.parse(localStorage.getItem('colorPalette'));
  while (listLocal.length !== 0) listLocal.pop();
  paletaDeCores.forEach((tag) => {
    const valorBackground = window.getComputedStyle(tag).getPropertyValue('background-color');
    listLocal.push(valorBackground);
  });
  localStorage.setItem('colorPalette', JSON.stringify(listLocal));
});

function iniciarLocalStorage() {
  if (localStorage.getItem('colorPalette') === null) {
    localStorage.setItem('colorPalette', JSON.stringify([]));
  } else {
    const listLocal = JSON.parse(localStorage.getItem('colorPalette'));
    for (let i = 0; i < listLocal.length; i += 1) {
      paletaDeCores[i].style.backgroundColor = listLocal[i];
    }
  }
}

window.onload = () => {
  iniciarLocalStorage();
};
