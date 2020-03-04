var ajax = {
    cargarArchivo: function(path){
        var request = new XMLHttpRequest();

        request.onreadystatechange = function(){
            /*Estados del Request
            0 ~ UNSENT - No iniciada
            1 ~ OPENED - Conectado al servidor
            2 ~ HEADERS_RECEIVED - Peticion Recibida
            3 ~ LOADING - Procesando Petición
            4 ~ DONE - Peticion Completa, respuesta lista*/
            if(request.readyState == XMLHttpRequest.DONE){
                if(request.status == 200){
                    console.log(JSON.parse(request.responseText));
                }else if(request.status == 400){
                    console.log("Error 400");
                }else{
                    console.log("Unexpected Result");
                }
            }
        };
        
        request.open("GET", path, true);
        request.send();
    },
}