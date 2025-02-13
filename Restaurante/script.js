function cambiarImagen(selectId, imgId) {
    var selectElement = document.getElementById(selectId);
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var imgSrc = selectedOption.getAttribute("data-img");
    
    if (imgSrc) {
        document.getElementById(imgId).src = imgSrc;
    } else {
        document.getElementById(imgId).src = "default_" + selectId + ".jpg";
    }
}