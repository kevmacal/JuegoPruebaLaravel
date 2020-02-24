document.addEventListener('DOMContentLoaded', function(){
    //console.log("Funciona Javascript!!!");
    prueba.iniciarJuego();
},false);
/* DOM = DOCUMENT OBJECT MODEL */

var prueba ={
    iniciarJuego: function(){
        console.log("¡Juego Iniciado!");
        buclePrincipal.iterar();
    },
};