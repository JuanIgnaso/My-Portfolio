//COLORES//
/*
Nivel Bajo -> text-blue-600
Nivel Medio -> text-yellow-500
Nivel Alto -> text-orange-600
Nivel Experto -> text-red-600
*/

const habilities_lvl = document.querySelectorAll('.habilidades-container strong');

habilities_lvl.forEach(element => {
    let lvl = element.innerHTML.toLowerCase();

    console.log(lvl);

    switch(lvl){
        case 'básico':
            element.classList.toggle('text-blue-600');
            break;

        case 'medio':
            element.classList.toggle('text-yellow-500');
            break;

        case 'alto':
            element.classList.toggle('text-orange-600');
            break;

        case 'avanzado':
            element.classList.toggle('text-red-600');
            break;
    }
});