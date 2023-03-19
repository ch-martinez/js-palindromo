import './style.css'

const input = document.getElementById('input')
const button = document.getElementById('button')
const message = document.getElementById('message')

const esPalindromo = () => {
    const palabra = input.value.trim().toLowerCase()
    let invertida = ''
    for(let letra of palabra){
        invertida = letra + invertida
    }
    return invertida == palabra
}

const alertaPalindromo = () => {
    if (input.value.trim() == '') {
        message.textContent = ''
        return
    }
    if (esPalindromo()) {
        message.classList.add("palindromo")
        message.classList.remove("no_palindromo")
        message.textContent = "PALINDROMO"
    } else {
        message.classList.add("no_palindromo")
        message.classList.remove("palindromo")
        message.textContent = "NO ES PALINDROMO"
    }
}

button.addEventListener('click', (e) =>{
    e.preventDefault()
    alertaPalindromo()
})