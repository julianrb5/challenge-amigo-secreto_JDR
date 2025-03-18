// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Ingresa un nombre!");
        return;
    }

    amigos.push(nombre);

    input.value = "";

    mostrarLista();
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    amigos.forEach(function(amigo) {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        alert("Agrega un amigo antes de sortear.");
        return;
    }

    resultado.innerHTML = "";

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(li);
}
