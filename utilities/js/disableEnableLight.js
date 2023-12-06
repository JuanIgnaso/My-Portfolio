        //Flag para habilitar o deshabilitar
        let isEnabled = true;

       
        //Función que hace que el elemento siga al ratón
        enableLight = () => $(document).mousemove(function(e){
            if(localStorage.getItem('focus') == 'true'){
                $(".custom-cursor").css({
                    left:e.pageX, 
                    top:e.pageY,
                    display:'block'
                    });
                $('#enable_light').text(' Deshabilitar');
            }else{
                $('#enable_light').text(' Habilitar');
            }
        });

        
        //Functión para habilitar o deshabilitar la 'luz' del ratón.
        $("#disable_light").click(function(){
         if(localStorage.getItem('focus') != null){
            isEnabled = localStorage.getItem('focus');
         }   

        if(isEnabled === 'true'){
            $(document).off("mousemove");
            $(".custom-cursor").css({
                display:'none'
            })
            $('#enable_light').text(' Habilitar');
            isEnabled = false;
        }else{
           enableLight();
           $('#enable_light').text(' Deshabilitar');
           isEnabled = true; 
        }
        setFocusLocalStorage(isEnabled.toString());
        });
       
        function setFocusLocalStorage(state){
            localStorage.setItem('focus',state);
        }

        $(document).load(enableLight());