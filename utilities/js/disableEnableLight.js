        //Flag para habilitar o deshabilitar
        let isEnabled = true;

       
        //Función que hace que el elemento siga al ratón
        enableLight = () => $(document).mousemove(function(e){
            $(".custom-cursor").css({
            left:e.pageX, 
            top:e.pageY,
            display:'block'
            });
        });

        
        //Functión para habilitar o deshabilitar la 'luz' del ratón.
        $("#disable_light").click(function(){
        if(isEnabled){
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
        
        });
        //Deshabilitar
        //$(document).off('mousemove');

        $(document).load(enableLight());