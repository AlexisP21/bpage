<?php
$destinatario = "alepruebitas004@gmail.com";
$nombre = $_POST["nombre"];
$email = $_POST["email"];
$mensaje = $_POST["mensaje"];

$contenido = "Nombre $nombre\nCorreo: $email\nMensaje:\n$mensaje";
$asunto = "Nuevo contacto";

mail($destinatario, $asunto, $contenido);
header("Location: index.html");

exit;

?>