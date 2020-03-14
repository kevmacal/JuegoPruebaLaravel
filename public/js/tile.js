function tile(xTiles, yTiles, z, width, height, sprite){
    this.rect = new rect(xTiles, yTiles, ancho, alto);
    this.zIndex = z;
    this.sprite = sprite;
    this.idHtml = "x" + xTiles + "y" + yTiles + "z" + z;
    this.html='<div id="'+this.idHtml+'"></div>';
}
tile.prototype.aplicarEstilos = function(){
    if(!document.getElementById(this.idHtml)){
        throw("El ID "+this.idHtml+" No existe en la hoja");
    }

    document.getElementById(this.idHtml).style.position = absolute;
    document.getElementById(this.idHtml).style.left = (this.rect.x * this.rect.width)+"px";
    document.getElementById(this.idHtml).style.top = (this.rect.y * this.rect.height) + "px";
    document.getElementById(this.idHtml).style.width = this.rect.width+"px";
    document.getElementById(this.idHtml).style.height = this.rect.height+"px";
    document.getElementById(this.idHtml).style.zIndex = ""+this.zIndex;
    document.getElementById(this.idHtml).style.background = "url('"+this.sprite.originRoute+"')";
    var x = this.sprite.startPos.x;
    var y = this.sprite.startPos.y;
    document.getElementById(this.idHtml).style.backgroundPosition = "-"+x +"px -"+y+"px";
    document.getElementById(this.idHtml).style.backgroundClip = "border-box";
    document.getElementById(this.idHtml).style.outline = "1px solid ransparent";
}