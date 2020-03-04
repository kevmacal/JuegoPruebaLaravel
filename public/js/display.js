var size = {
    width : window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height : window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    ladoTiles: 50,
    escala: 1,
    
    start: function(){
        window.addEventListener("resize", function(event){
            width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            console.log("Ancho: "+width+" Alto: "+height);
            prueba.rellenarTiles();
        });
    },
    obtenerTilesHorizontales: function(){
        var ladoFinal = size.ladoTiles*size.escala;
        return Math.ceil((size.width-ladoFinal)/ladoFinal);
    },
    obtenerTilesVerticales: function(){
        var ladoFinal = size.ladoTiles*size.escala;
        return Math.ceil((size.height-ladoFinal)/ladoFinal);
    },
    obtenerTotalTiles: function(){
        return obtenerTilesHorizontales()*obtenerTilesVerticales();
    },
};