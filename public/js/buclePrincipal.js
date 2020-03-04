/*namespace - espacio de nombres
mainloop - bucleprincipal
aps - actualizaciones por segundo
fps - frames por segundo*/

var buclePrincipal = {
    idEjecucion: null,
    ultimoReg: 0,
    aps: 0,
    fps: 0,
    iterar: function(registroTemporal){
        buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar);
        buclePrincipal.actualizar(registroTemporal);
        buclePrincipal.dibujar();

        if(registroTemporal-buclePrincipal.ultimoReg>999){
            buclePrincipal.ultimoReg=registroTemporal;
            console.log("APS: "+buclePrincipal.aps+" FPS: "+buclePrincipal.fps);            
            buclePrincipal.aps = 0;
            buclePrincipal.fps = 0;
        }
    },
    detener: function(){
    },
    actualizar: function(registroTemporal){
        keyboard.reset();
        buclePrincipal.aps=buclePrincipal.aps+1;        
    },
    dibujar: function(registroTemporal){
        buclePrincipal.fps=buclePrincipal.fps+1;
    },
};