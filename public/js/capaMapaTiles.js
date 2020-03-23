function capaMapaTiles(datosCapa, indiceZ, widthSelfTiles, heightSelfTiles, paletaSprites){
    this.widthTiles = parseInt(datosCapa.width);
    this.heightTiles = parseInt(datosCapa.height);
    this.x = parseInt(datosCapa.x);
    this.y = parseInt(datosCapa.y);
    this.z = indiceZ;
    this.tiles = [];

    for(y=0;y<this.heightTiles;y++){
        for(x=0;x<this.widthTiles;x++){
            var idSpriteActualMasUno = datosCapa.data[x+y*this.heightTiles];//Empieza en 1 y no en cero como seria logicamente
            if (idSpriteActualMasUno==0){
                this.tiles.push(null);
            }else{
                var spriteActual = this.encontrarSpritePaletaID(idSpriteActualMasUno-1, paletaSprites);

                this.tiles.push(new tile(x,y,indiceZ,widthSelfTiles,heightSelfTiles,spriteActual));
            }
        }
    }
}

capaMapaTiles.prototype.encontrarSpritePaletaID=function(idSpriteMasUno, paletasSprites){
    for(s=0;s<paletasSprites.length;s++){
        if(idSpriteMasUno>=paletasSprites[s].firstSprite-1 
            && idSpriteMasUno<paletasSprites[s].totalSprites + paletasSprites[s].firstSprite+1){
            return paletasSprites[s].sprites[Math.abs(paletasSprites[s].firstSprite-1-idSpriteMasUno)];
        }
    }
    throw "El ID Mas uno "+idSpriteMasUno+"del Sprite no existe en ninguna paleta";
}