<?php
$server = "asdetboysgd.com";
$user = "u368116299_AsdSgdSystem";
$password = "kCkNQic8*Y";
$bd = "u368116299_SGD_Produccion";

try{
    $conexion = new mysqli($server,$user,$password,$bd);
} catch (PDOExeption $e){
    echo ($e);
}

?>
