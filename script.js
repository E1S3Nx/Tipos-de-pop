// Abrir una nueva pestana en el navegador
function openNewTab() {
    window.open('https://www.google.com', '_blank');
}

// Abrir una ventana emergente (pop-up)
function openPopUp() {
    window.open('https://www.google.com', 'popupWindow', 'width=800,height=800');
}

// Abrir una página en la misma ventana
function openSameWindow() {
    window.location.href = 'https://www.google.com';
}
