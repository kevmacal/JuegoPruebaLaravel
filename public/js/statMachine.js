var statMachine = {
    estadoActual: null,
    iniciar: function(){

    },
    cambiarEstado: function(nuevoEstado){
        switch(nuevoEstado){
            case listaEstados.CARGANDO:
                //Estado Actual CARGANDO
                break;
            case listaEstados.MENU_INICIO:
                //Estado Actual MENU_INICIO
                break;
            case listaEstados.MAPAPRINC:
                //Estado Actual MAPAPRINC
                break;
            
        }
    },
    actualizar: function(){
        statMachine.estadoActual.actualizar();
    },
    dibujar: function(){
        statMachine.estadoActual.dibujar();
    },
}