const decrementBtn = counter.firstElementChild
const incrementBtn = counter.lastElementChild
let counterValue = 0

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