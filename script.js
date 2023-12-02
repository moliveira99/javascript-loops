const lista = document.querySelector("ul");

function enviar() {
    lista.innerHTML += `<li> ${document.getElementById('textbox').value} </li>` + '<br>';
}

function removerUltimo() {
    const itens = lista.getElementsByTagName("li");
    if (itens.length > 0) {
        lista.removeChild(itens[itens.length - 1]);
    } else {
        alert("A lista está vazia!");
    }
}