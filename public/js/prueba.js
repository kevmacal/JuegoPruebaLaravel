document.addEventListener('DOMContentLoaded', function(){
    //console.log("Funciona Javascript!!!");
    prueba.iniciarJuego();
},false);
/* DOM = DOCUMENT OBJECT MODEL */

var prueba ={
    iniciarJuego: function(){
        console.log("¡Juego Iniciado!");
        size.start();
        var r = new rectangulo(320,512,160,80);
        buclePrincipal.iterar();
    },
};