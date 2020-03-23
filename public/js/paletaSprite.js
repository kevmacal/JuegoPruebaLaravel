function paletaSprite(dataSprite){
    this.rutaImagen = dataSprite.image;
    this.widthImage = parseInt(dataSprite.imagewidth);
    this.heightImage = parseInt(dataSprite.imageheight);

    this.widthSprite = parseInt(dataSprite.tilewidth);
    this.heightSprite = parseInt(dataSprite.tileheight);

    this.firstSprite = parseInt(dataSprite.firstgid); //Aqui el primero es en 1, la programacion es en 0
    this.anchoImagenInSprite =  this.widthImage/this.widthSprite;
    this.altoImagenInSprite =  this.heightImage/this.heightSprite;

    this.totalSprites = thsi.anchoImagenInSprite*this.altoImagenInSprite;
    this.sprites = [];

    for(s=0;this.totalSprites;s++){
        var idActual=this.firstSprite-1+s;
        this.sprites.push(new sprite(this.rutaImagen, idActual, this.obtenerPosicionDesdeIdSprite(idActual)));
    }
}

paletaSprite.prototype.obtenerPosicionDesdeIdSprite = function(idSprite){
    var y = Math.floor(idSprite / this.anchoImagenInSprite);
    var x = idSprite % this.anchoImagenInSprite;

    return new punto(x*this.widthSprite, y.this.heightSprite);
}