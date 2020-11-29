const decrementBtn = document.querySelector('#counter').firstElementChild
const incrementBtn = document.querySelector('#counter').lastElementChild
let counterValue = Number(document.querySelector('#value').textContent)

const increment = () => {
    counterValue += 1
    value.textContent = counterValue
}
const decrement = () => {
    counterValue -= 1
    value.textContent = counterValue
}
incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);