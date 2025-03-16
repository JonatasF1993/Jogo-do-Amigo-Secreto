document.addEventListener("DOMContentLoaded", function () {
    let campoDeEntrada = document.getElementById("amigo");
    let botaoAdicionar = document.querySelector(".button-add");
    let botaoSortear = document.querySelector(".button-draw");
    let listaDeAmigos = [];
    let listaDeAmigosElemento = document.getElementById("listaAmigos");
    let resultadoElemento = document.getElementById("resultado");

    function adicionarAmigo() {
        let nome = campoDeEntrada.value.trim();
        
        if (nome === "") {
            alert("Por favor, insira um nome.");
            return;
        }
        
        if (listaDeAmigos.includes(nome)) {
            alert("O nome não pode ser adicionado pois já existe na lista.");
            return;
        }
        
        listaDeAmigos.push(nome);
        atualizarLista();
        campoDeEntrada.value = "";
    }

    function atualizarLista() {
        listaDeAmigosElemento.innerHTML = "";
        listaDeAmigosElemento.style.display = "block";
        
        for (let amigo of listaDeAmigos) {
            let li = document.createElement("li");
            li.textContent = amigo;
            listaDeAmigosElemento.appendChild(li);
        }
    }

    function sortearAmigo() {
        if (listaDeAmigos.length === 0) {
            alert("A lista está vazia. Adicione amigos antes de sortear.");
            return;
        }
        
        let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
        let sorteado = listaDeAmigos[indiceAleatorio];
        
        listaDeAmigosElemento.style.display = "none";
        resultadoElemento.innerHTML = `<p>O amigo secreto sorteado é: <strong>${sorteado}</strong></p>`;
    }

    botaoAdicionar.addEventListener("click", adicionarAmigo);
    botaoSortear.addEventListener("click", sortearAmigo);
});
