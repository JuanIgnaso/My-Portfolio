               
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
        showUpCard('correcto p-2 text-white font-bold cursor-auto','Formulario enviado correctamente!');
        (document.querySelectorAll('#formulario_mensaje p[id*="_error"]')).forEach(element => {
           element.innerHTML = ''; 
        });

    }

    //Mostrar Alerta de formulario Incorrecto.
    function messageFailure(){
        if(document.querySelectorAll('#formulario_mensaje input:invalid').length != 0){
            notificacion.style.display = 'block';
            showUpCard('incorrecto p-2 text-white font-bold cursor-auto','Algun/os campo/s esta/n incorrecto/s, revisa el formulario.');
        }
        
    }

    //Mostrar el Cartel
    function showUpCard(className,message){
        notificacion.style.display = 'block';
        notificacion.setAttribute('class',className);
        notificaction_content.innerHTML = message;
    }
