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
    arr.forEach(element => {
    const item = document.createElement('li')
    item.textContent = element
    list.appendChild(item)
});
}

createMarkup(ingredients)