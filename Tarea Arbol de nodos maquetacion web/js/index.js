document.getElementById("verMas").addEventListener("click", function() {
    alert("Más información próximamente");
});

document.querySelectorAll(".buyButton").forEach((button) => {
    button.addEventListener("click", function() {
        alert("Artículo agregado al carrito");
    });
});