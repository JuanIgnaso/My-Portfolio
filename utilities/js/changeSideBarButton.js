//Cambiar contenido del botón del sidebar
let events = 'resize load'.split(' '); //Eventos

events.forEach(element => {
    window.addEventListener(element,changeContent);
});

function changeContent(){
    window.innerWidth < 1025 ? btnMenu.innerHTML = '<i class="fa-solid fa-house"></i>' : btnMenu.innerHTML = 'Menú <i class="fa-solid fa-house"></i>';  
}