//Para activar animación al abrir
let btnMenu = document.querySelector('#btnMenu');

//Menu content
let content = document.querySelector('#contentmenu');

btnMenu.addEventListener('click',function(){
    this.classList.toggle('menu_abierto');
    content.style.bottom = btnMenu.offsetHeight + 'px';
    content.classList.toggle('contenido_visible');
});




let portrait = window.matchMedia("(orientation: portrait)");
let screenOrientation = false;

portrait.addEventListener("change", function(e) { screenOrientation = e.matches; console.log(screenOrientation)});