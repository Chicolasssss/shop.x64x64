function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block"; // Muestra los detalles
    } else {
        details.style.display = "none"; // Oculta los detalles
    }
}
