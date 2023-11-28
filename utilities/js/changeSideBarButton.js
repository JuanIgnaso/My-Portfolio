//Cambiar contenido del botón del sidebar
window.addEventListener('resize',() =>{
    window.innerWidth < 1025 ? btnMenu.innerHTML = '<i class="fa-solid fa-house"></i>' : btnMenu.innerHTML = 'Menú <i class="fa-solid fa-house"></i>';  
});