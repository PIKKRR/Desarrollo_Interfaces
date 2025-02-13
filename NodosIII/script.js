// Array de destinos con nombre e imagen
const destinos = [
    { nombre: "Selecciona un destino", imagen: "/wetravel.png" },
    { nombre: "París, Francia", imagen: "/paris.png" },
    { nombre: "Londres, Reino Unido", imagen: "/londres.png" },
    { nombre: "Nueva York, EE.UU.", imagen: "/newyork.png" },
    { nombre: "Tokio, Japón", imagen: "/tokio.png" }
];

function cambiarDestino() {
    let seleccion = document.getElementById("selector").value;

    let textoDestino = document.getElementById("destino");
    textoDestino.innerText = destinos[seleccion].nombre;

    let imagenDestino = document.getElementById("imagen");
    imagenDestino.setAttribute("src", destinos[seleccion].imagen);
}