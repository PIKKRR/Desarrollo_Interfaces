document.addEventListener("DOMContentLoaded", function () {
    var contenedor = document.getElementById("contenedor");

    var tabla = document.createElement("div");
    tabla.className = "tabla";

    var filaImagenes = document.createElement("div");
    filaImagenes.className = "fila";
    
    var filaEnlaces = document.createElement("div");
    filaEnlaces.className = "fila";

    var datos = [
        { src: "html.png", url: "https://www.w3.org/" },
        { src: "javascript.png", url: "https://www.javascript.com/" },
        { src: "css3.png", url: "https://www.w3.org/Style/CSS/Overview.en.html" }
    ];

    for (var i = 0; i < datos.length; i++) {
        var celdaImg = document.createElement("div");
        celdaImg.className = "celda";

        var img = document.createElement("img");
        img.src = datos[i].src;
        img.alt = "Imagen " + (i + 1);

        celdaImg.appendChild(img);
        filaImagenes.appendChild(celdaImg);

        var celdaEnlace = document.createElement("div");
        celdaEnlace.className = "celda";

        var enlace = document.createElement("a");
        enlace.href = datos[i].url;
        enlace.target = "_blank";

        var textoEnlace = document.createTextNode("ENLACE");
        enlace.appendChild(textoEnlace);

        celdaEnlace.appendChild(enlace);
        filaEnlaces.appendChild(celdaEnlace);
    }

    tabla.appendChild(filaImagenes);
    tabla.appendChild(filaEnlaces);

    contenedor.appendChild(tabla);
});