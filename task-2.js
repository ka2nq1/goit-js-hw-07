const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createMarkup = (arr) => {
const list = document.querySelector('#ingredients')
const markup = arr.reduce(
  (str, item) => str + `<li>${item}</li>`, ""
);
return list.innerHTML = markup
}

createMarkup(ingredients)