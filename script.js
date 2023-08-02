// Criar variável

//let nome = "Nathalia Marchini"
let idade = 16
let idadeEsposa = "45"
const anoNasceimento = 1977


// Decisão

if (idade === idadeEsposa){
    alert("Igual...")
}else {
    alert("Cada um no seu quadrado!")
}


//Lendo informações do HTML

const titulo = document.getElementById("titulo")
const Resultado = document.getElementById("resultado")
const nome = document.getElementById("nome")
const email = document.getElementById("email")


titulo.textContent = "Mudei o titulo!!! Eu posso"

titulo.style.color = "violet"

function mostrarResultado() {
    Resultado.textContent = nome.value + "" + email.value
}