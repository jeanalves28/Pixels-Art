const paletaColor = document.querySelectorAll('.color');
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
  paletaColor[1].style.backgroundColor = SelectorColors[color1];
  paletaColor[2].style.backgroundColor = SelectorColors[color2];
  paletaColor[3].style.backgroundColor = SelectorColors[color3];
});

document.querySelector('#clear-board').addEventListener('click', () => {
  for (let i = 0; i < pixels.length; i += 1) pixels[i].style.backgroundColor = 'White';
});

paletaColor.forEach((i) => {
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
