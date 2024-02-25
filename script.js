const entrar = document.querySelector(".form-acesso")
const cadastro = document.querySelector(".form-cadastro")

function cliqueiNoCadastro() {
    entrar.style.left = "-100%"
    cadastro.style.right = "0%"
}

function cliqueiNoEntrar() {
    entrar.style.left = "0%"
    cadastro.style.right = "-100%"
}