//COLORES//
/*
Nivel Bajo -> text-blue-600
Nivel Medio -> text-yellow-500
Nivel Alto -> text-orange-600
Nivel Experto -> text-red-600
*/

const habilities_lvl = document.querySelectorAll('.habilidades-container strong');


function updateLvlColors(){
    habilities_lvl.forEach(element => {
        let lvl = element.innerHTML.toLowerCase();
    
        switch(lvl){
            case 'básico':
                element.classList.toggle('lvl_basico');
                break;
    
            case 'medio':
                element.classList.toggle('lvl_medio');
                break;
    
            case 'alto':
                element.classList.toggle('lvl_alto');
                break;
    
            case 'avanzado':
                element.classList.toggle('lvl_avanzado');
                break;
        }
    });
}

updateLvlColors();
