<?php
$fecha = new DateTime();

$jsSources = array(
    "./js/ajax.js", "./js/keyboard.js", "./js/rect.js", 
    "./js/display.js", "./js/buclePrincipal.js", "./js/prueba.js",
    "./js/punto.js", "./js/tile.js",
);
foreach($jsSources as $source){
    echo '<script src="'.$source.'?'.$fecha->getTimeStamp().'"></script>'.nl2br("\n");
}
?>