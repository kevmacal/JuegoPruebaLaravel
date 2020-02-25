var size = {
    width : window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height : window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    
    start: function(){
        window.addEventListener("resize", function(event){
            width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            console.log("Ancho: "+width+" Alto: "+height);
        });
    }
}