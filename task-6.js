const input = document.querySelector('#validation-input');
const dataLength = Number(input.attributes['data-length'].value)
const validControl = () => {
    input.className = 'invalid'
    if (input.value.length === dataLength) {
        input.className = 'valid'
    }
    if (input.value.length === 0) {
        input.classList.remove('invalid')
    }
}

input.addEventListener('blur', validControl)