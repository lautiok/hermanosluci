<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recuperar los datos enviados por el formulario
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $asunto = $_POST['asunto'];
    $message = $_POST['message'];

    // Validar los datos (opcional)
    // Aquí puedes agregar tu lógica de validación personalizada según tus requisitos

    // Construir el cuerpo del correo electrónico
    $to = 'Nahuelguerra56b@gmail.com'; // Correo electrónico de destino
    $subject = 'Nuevo mensaje del formulario';
    $body = "Nombre: $name\nEmail: $email\nTeléfono: $phone\nAsunto: $asunto\nMensaje: $message";

    // Establecer las cabeceras del correo electrónico
    $headers = "From: $email" . "\r\n" .
            "Reply-To: $email" . "\r\n" .
            "X-Mailer: PHP/" . phpversion();

    // Enviar el correo electrónico
    if (mail($to, $subject, $body, $headers)) {
        echo "Gracias por completar el formulario, $name. Tu mensaje ha sido enviado correctamente.";
    } else {
        echo "Lo siento, ha ocurrido un error al enviar el mensaje. Por favor, intenta nuevamente más tarde.";
    }
}
?>
