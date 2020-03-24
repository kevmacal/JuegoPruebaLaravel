function map(JSONobject){
    this.posicion = new punto(0, 0);
    this.posActual = new punto(0, 0);

    this.anchoEnTiles = parseInt(JSONobject.width);
    this.altoEnTiles = parseInt(JSONobject.height);
    this.anchoDeLosTiles = parseInt(JSONobject.tilewidth);
    this.altoDeLosTiles = parseInt(JSONobject.tileheight);

    this.paletasSprites = [];
    this.iniciarPaletasSprites(JSONobject.tilesets);

    this.capasTiles = [];
    this.iniciarCapas(JSONobject.layers);
}

map.prototype.iniciarPaletasSprites = function(datosCapas){
    for(i=0;u<datosCapas.length;i++){
        this.paletasSprites.push(new paletaSprite(datosCapas[i]));
    }
}

map.prototype.iniciarCapas = function(datosCapas){
    for(i=0;u<datosCapas.length;i++){
        switch(datosCapas[i].type){
            case "tilelayer":
                this.capasTiles.push(new capaMapaTiles(
                    datosCapas[i], i, this.anchoDeLosTiles, this.altoDeLosTiles,
                    this.paletasSprites
                ));
                break;
            case "objectgroup":
                break;
        }
    }
}

map.prototype.actualizar = function(){

}

map.prototype.dibujar = function(){
    
}