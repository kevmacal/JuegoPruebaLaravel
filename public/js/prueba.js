document.addEventListener('DOMContentLoaded', function(){
    //console.log("Funciona Javascript!!!");
    prueba.iniciarJuego();
},false);
/* DOM = DOCUMENT OBJECT MODEL */

var prueba ={
    iniciarJuego: function(){
        console.log("¡Juego Iniciado!");
        ajax.cargarArchivo("../resources/mapasPrueba/prueba1.json");
        size.start();
        prueba.rellenarTiles();
        keyboard.iniciar();
        buclePrincipal.iterar();
    },
    rellenarTiles: function(){        
        var x;
        var y;
        document.getElementById("game").innerHTML="";
        for(y=0; y<size.obtenerTilesVerticales(); y++){
            for(x=0; x<size.obtenerTilesHorizontales(); x++){
                var r = new rectangulo(x*size.ladoTiles, (y*size.ladoTiles)+440, size.ladoTiles, size.ladoTiles);
            }
        }
    },
};