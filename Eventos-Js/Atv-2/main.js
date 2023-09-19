let nome = document.getElementById("nome-livro")
let nomej = document.createElement("h2")
nomej=nome.value

let autor = document.getElementById("autor")
let autorj = document.createElement("h3")
autorj=autor.value

let paginas = document.getElementById("n-paginas")
let paginasj = document.createElement("p")
paginasj=paginas.value

let pais = document.getElementById("pais")
let paisj = document.createElement("p")
paisj=pais.value


let gerador = document.getElementById("gerar")
let divl = document.getElementById("livro")

gerador.addEventListener("click", 
function (){
    divl.innerHTML='<h1>Titulo:</h1>'+nomej+'<br>'
})