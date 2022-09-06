function colorRandom() {
  const paletaColor = document.querySelectorAll('.color');
  const SelectorColors = ['Purple', 'Yellow', 'Brown', 'Violet', 'Cyan', 'Grey', 'Tomato',
    'Orange', 'Gold', 'Magenta', 'Maroon', 'Indigo', 'Lime', 'DeepPink', 'Olive', 'Silver',
    'Teal', 'Navy', 'Red', 'Blue', 'Green'];
  let color1 = 0;
  let color2 = 0;
  let color3 = 0;
  while (color1 === color2 || color1 === color3 || color2 === color3) {
    color1 = Math.round(Math.random() * SelectorColors.length);
    color2 = Math.round(Math.random() * SelectorColors.length);
    color3 = Math.round(Math.random() * SelectorColors.length);
  }
  paletaColor[0].style.backgroundColor = 'Black';
  paletaColor[1].style.backgroundColor = SelectorColors[color1];
  paletaColor[2].style.backgroundColor = SelectorColors[color2];
  paletaColor[3].style.backgroundColor = SelectorColors[color3];
}
document.querySelector('button').addEventListener('click', colorRandom);
