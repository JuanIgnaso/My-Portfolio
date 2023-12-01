               
                /*Validación de formulario(Posteriormente se hará con React)*/
                function showAlert(input,str){
                    let alert = input.getAttribute('name') + '_error';
                    document.getElementById(alert).innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>' + str;
                }