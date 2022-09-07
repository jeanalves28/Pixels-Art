document.querySelector('#button-random-color').addEventListener('click', () => {
  const paletaColor = document.querySelectorAll('.color');
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
let valor;
document.querySelectorAll('.color')[0].addEventListener('click', () => {
  const pixel = document.querySelectorAll('.color')[0];
  // eslint-disable-next-line sonarjs/no-duplicate-string
  valor = window.getComputedStyle(pixel).getPropertyValue('background-color');
});
document.querySelectorAll('.color')[1].addEventListener('click', () => {
  const pixel = document.querySelectorAll('.color')[1];
  valor = window.getComputedStyle(pixel).getPropertyValue('background-color');
});
document.querySelectorAll('.color')[2].addEventListener('click', () => {
  const pixel = document.querySelectorAll('.color')[2];
  valor = window.getComputedStyle(pixel).getPropertyValue('background-color');
});
document.querySelectorAll('.color')[3].addEventListener('click', () => {
  const pixel = document.querySelectorAll('.color')[3];
  valor = window.getComputedStyle(pixel).getPropertyValue('background-color');
});
document.querySelector('.pixel').addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
document.querySelectorAll('.pixel')[1].addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
document.querySelectorAll('.pixel')[2].addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
document.querySelectorAll('.pixel')[3].addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
document.querySelectorAll('.pixel')[4].addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
document.querySelectorAll('.pixel')[5].addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
document.querySelectorAll('.pixel')[6].addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
document.querySelectorAll('.pixel')[7].addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
document.querySelectorAll('.pixel')[8].addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
document.querySelectorAll('.pixel')[9].addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
document.querySelectorAll('.pixel')[10].addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
document.querySelectorAll('.pixel')[11].addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
document.querySelectorAll('.pixel')[12].addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
document.querySelectorAll('.pixel')[13].addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
document.querySelectorAll('.pixel')[14].addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
document.querySelectorAll('.pixel')[15].addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
document.querySelectorAll('.pixel')[16].addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
document.querySelectorAll('.pixel')[17].addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
document.querySelectorAll('.pixel')[18].addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
document.querySelectorAll('.pixel')[19].addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
document.querySelectorAll('.pixel')[20].addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
document.querySelectorAll('.pixel')[21].addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
document.querySelectorAll('.pixel')[22].addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
document.querySelectorAll('.pixel')[23].addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
document.querySelectorAll('.pixel')[24].addEventListener('click', (e) => {
  e.target.style.backgroundColor = valor;
});
