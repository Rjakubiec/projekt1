<?php
require_once 'phpmailer/PHPMailerAutoload.php';

if (isset($_POST['inputName']) && isset($_POST['inputEmail']) && isset($_POST['inputSubject']) && isset($_POST['inputMessage']) && isset($_POST['inputNumber']) ) {

    
    if (empty($_POST['inputName']) || empty($_POST['inputEmail']) || empty($_POST['inputSubject']) || empty($_POST['inputMessage']) || empty($_POST['inputNumber']) ) {
        $data = array('success' => false, 'message' => 'Proszę wypełnij odpowiednio formularz.');
        echo json_encode($data);
        exit;
    }

   
    $mail = new PHPMailer();

    $mail->From = $_POST['inputEmail'];
    $mail->FromName = $_POST['inputName'];
    $mail->AddAddress('jakubiecrafal@gmail.com'); 
    $mail->Subject = $_POST['inputSubject'];
    $mail->Body = "Imię i nazwisko: " . $_POST['inputName'] . "\r\n\r\nWiadomość: " . stripslashes($_POST['inputMessage'] . "\r\n\r\nNumer kontaktowy: " .$_POST['inputNumber']);

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
