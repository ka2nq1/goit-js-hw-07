const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')
const textChange = () => {
    output.textContent = input.value
        if (input.value === '') {
            output.textContent = 'незнакомец'
    }
}

input.addEventListener('input', textChange);