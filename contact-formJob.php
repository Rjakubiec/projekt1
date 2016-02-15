<?php
require_once 'phpmailer/PHPMailerAutoload.php';

if (isset($_POST['inputName']) && isset($_POST['inputEmail']) && isset($_POST['inputNumber']) && isset($_POST['inputPosition']) && isset($_POST['inputFile']) ) {

   
    if (empty($_POST['inputName']) || empty($_POST['inputEmail']) || empty($_POST['inputNumber']) || empty($_POST['inputPosition']) || empty($_POST['inputFile']) ) {
        $data = array('success' => false, 'message' => 'Proszę wypełnij odpowiednio formularz.');
        echo json_encode($data);
        exit;
    }

  
    $mail = new PHPMailer();

    $mail->From = $_POST['inputEmail'];
    $mail->FromName = $_POST['inputName'];
    $mail->AddAddress('jakubiecrafal@gmail.com'); 
    $mail->Subject = "Aplikacja na stanowisko" . $_POST['inputPosition'];
    $mail->addAttachment = $_POST['inputFile'];
    $mail->Body = "Imię i nazwisko: " . $_POST['inputName'] . "\r\n\r\nNumer kontaktowy: " . $_POST['inputNumber'];

    if (isset($_POST['ref'])) {
        $mail->Body .= "\r\n\r\nRef: " . $_POST['ref'];
    }

    if(!$mail->send()) {
        $data = array('success' => false, 'message' => 'Wiadomość nie została wysłana. Błąd: ' . $mail->ErrorInfo);
        echo json_encode($data);
        exit;
    }

    $data = array('success' => true, 'message' => 'Dziękujemy! Wiadomość wysłana.');
    echo json_encode($data);

} else {

    $data = array('success' => false, 'message' => 'Proszę wypełnij odpowiednio formularz.');
    echo json_encode($data);

}
