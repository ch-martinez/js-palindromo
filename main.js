const input = document.getElementById('input')
const button = document.getElementById('button')
const message = document.getElementById('message')
const form = document.getElementById('form')

const esPalindromo = (p) => {
    const palabra = p.toLowerCase()
    let invertida = ''
    for(let letra of palabra){
        invertida = letra + invertida
    }
    return invertida == palabra
}

const pintarResultadoPalindromo = () => {
    const palabra = input.value.trim()

    if (esPalindromo(palabra)) {
        message.classList.replace("no_palindromo", "palindromo")
        message.textContent = `${palabra} es palindromo`
    } else {
        message.classList.replace("palindromo","palindromo")
        message.textContent = `${palabra} no es palindromo`
    }
    button.textContent = "Continuar"
    input.classList.toggle("hide")
    message.classList.toggle("hide")
}

button.addEventListener('click', (e) => {
    e.preventDefault()

    if (input.classList.contains("hide")){
        input.classList.toggle("hide")
        message.classList.toggle("hide")
        button.textContent = "Verificar"
        form.reset()
    } else {
        if (input.value.trim() != '') {
            pintarResultadoPalindromo()
        }
    }
})