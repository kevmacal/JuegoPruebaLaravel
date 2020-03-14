function sprite(ruta, idZero, startPos){
    var elementRoute = ruta.split("/");
    this.origenRoute = elementRoute[elementRoute.length()-1]
    this.idZero = idZero+1;
    this.startPos = startPos;
}