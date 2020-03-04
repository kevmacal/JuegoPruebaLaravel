var keyboard = {
    keys: new Array(),
    iniciar: function(){
        document.onkeydown = keyboard.guardarTecla;
    },
    guardarTecla: function(e){
        keyboard.keys.push(e.key);
        console.log(e.key);
    },
    isKeyUsed: function(codeKey){
        return (keyboard.keys.indexOf(codeKey) !== -1) ? true:false; //Esto funciona indicando si es diferente a -1 retorna true, caso contrario false. Para este caso
    },
    reset: function(){
        keyboard.keys = new Array();
    },
}