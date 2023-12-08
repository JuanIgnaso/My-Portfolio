               
    /*ACCIONES DEL FORMULARIO*/
    
    //Targeta de alerta.           
    let notificacion = document.querySelector('#alert');

    //Mensaje de alerta.
    let notificaction_content = document.querySelector('#alert #card_message');
    

    //Validación de formulario.
    function showAlert(input,str){
        let alert = input.getAttribute('name') + '_error';
        document.getElementById(alert).innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>' + str;
    }
    
    //Mostrar Alerta de formulario Correcto.
    function messajeSuccess(){
        notificacion.style.display = 'block';
        showUpCard('success p-2 text-white font-bold cursor-auto','Formulario enviado correctamente!');
        (document.querySelectorAll('#formulario_mensaje p[id*="_error"]')).forEach(element => {
           element.innerHTML = ''; 
        });

    }


    //Evita que los inputs muestren el mensaje de error por defecto al
    //darle la botón de submit.

    document.addEventListener('invalid', (function(){
        return function(e) {
          //previene al navegador de mostrar el mensaje de error
          e.preventDefault();
          // opcionalmente se puede poner función que muestre los errores de 
          //validación
          // myValidation();
        };
    })(), true);




    //Mostrar Alerta de formulario Incorrecto.
    function messageFailure(){
        //Selecciona todas los elementos del formulario que estén inválidos
        if(document.querySelectorAll('#formulario_mensaje :invalid').length != 0){
            notificacion.style.display = 'block';
            showUpCard('error p-2 text-white font-bold cursor-auto','Algun/os campo/s esta/n incorrecto/s, revisa el formulario.');
        }
        
    }

    //Mostrar el Cartel
    function showUpCard(className,message){
        notificacion.style.display = 'block';
        notificacion.setAttribute('class',className);
        notificaction_content.innerHTML = message;
    }
