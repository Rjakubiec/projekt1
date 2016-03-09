<?php
require_once 'phpmailer/PHPMailerAutoload.php';

if (isset($_POST['inputName']) && isset($_POST['inputContact']) && isset($_POST['inputNumber']) && isset($_POST['inputTyp'])  ) {

   
    if (empty($_POST['inputName']) || empty($_POST['inputContact']) || empty($_POST['inputNumber']) || empty($_POST['inputTyp'])  ) {
        $data = array('success' => false, 'message' => 'Proszę wypełnij odpowiednio formularz.');
        echo json_encode($data);
        exit;
    }

  
    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->SMTPAuth = true;       
    $mail->Host = 'mail.glasscenter.pl';
    $mail->Username = 'oferta@glasscenter.pl';                 
    $mail->Password = 'qwe123';
    $mail->From = $_POST['inputEmail'];
    $mail->FromName = $_POST['inputName'];
    $mail->AddAddress('jakubiecrafal@gmail.com'); 
    $mail->Subject = "Usterka";
    $mail->addAttachment($_FILES['inputFile']['tmp_name'],$_FILES['uploaded_file']['name']);
    $mail->Body = "Imię i nazwisko: " . $_POST['inputName'] . "\r\n\r\nNumer kontaktowy: " . $_POST['inputNumber'] . "\r\n\r\nTreść: " . $_POST['inputMessage'];

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
