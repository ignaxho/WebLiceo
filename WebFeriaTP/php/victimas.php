<?php
if (isset($_POST['fname']) && isset($_POST['lname'])) {
    $nombre = htmlspecialchars($_POST['fname']);
    $curso = htmlspecialchars($_POST['lname']);

    $archivo = '/Registros/registros.txt';
    $linea = "Nombre: $nombre | Curso: $curso\n";

    file_put_contents($archivo, $linea, FILE_APPEND | LOCK_EX);
}
?>
