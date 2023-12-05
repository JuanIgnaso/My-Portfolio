//Mostrar animación cuando elemento es visible
/*-----------------------------------------------------*/
/*
Se le añade la clase que contiene la animación cuando el elemento aparece
en pantalla, tanto la animación como la clase tienen que estar definidas 
en el archivo CSS.
*/


/*elemento*/
// let elemento = document.querySelector('.experiencia_container ol:first-of-type');
// let elementHeight = elemento.clientHeight;

//Añade evento al scroll y llamar a la función de animar
document.addEventListener('scroll',animate);

//Comprobar si el elemento aparece en pantalla
function inView(element){

    let elementHeight = element.clientHeight;

    //Alto de la ventana
    let windowHeight = window.innerHeight;

    //Numero de píxeles que se han hecho scroll
    let scrollY = window.scrollY || window.pageYOffset;

    //Posición actual del scroll
    let scrollPosition = scrollY + windowHeight;

    //Posición vertical del elemento
    let elementPosition = element.getBoundingClientRect().top +
    scrollY + elementHeight;

    //Retornar si la posición del scroll es mayor a la del objeto
    //(significaría que el objeto se está mostrando en pantalla)
    return scrollPosition >= elementPosition;

}

//Animar elemento si aparece en pantalla
function animate(){
    /*
    Todo elemento que quieras que se anime tiene que llamar a la función 'inView'
    */
    //Cartas de Experiencia Laboral
    let animation = 'exp-right';

    document.querySelectorAll('.experiencia_container ol').forEach(element => {
        animation == 'exp-right' ? animation = 'exp-left' : animation = 'exp-right'; 
        applyClass(element,animation);
    });

                    //Secciones de la Web
    document.querySelectorAll('.section_content').forEach(element => {
        applyClass(element,'load_content');
    })

}

//Aplica la animación al elemento pasado por parámetro
function applyClass(element,animation){
    if(inView(element)){
        element.classList.add(animation);
    }
}
