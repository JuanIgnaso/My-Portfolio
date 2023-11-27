//Para activar animación al abrir
let btnMenu = document.querySelector('#btnMenu');

//Menu content
let content = document.querySelector('#contentmenu');

btnMenu.addEventListener('click',function(){
    this.classList.toggle('menu_abierto');
    content.classList.toggle('contenido_visible');  
});