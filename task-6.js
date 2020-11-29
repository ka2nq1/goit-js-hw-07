const input = document.querySelector('#validation-input');
const validControl = () => {
    input.className = 'invalid'
    if (input.value.length === 6) {
        input.className = 'valid'
    }
    if (input.value.length === 0) {
        input.classList.remove('invalid')
    }
}

input.addEventListener('blur', validControl)