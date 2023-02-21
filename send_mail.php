<?php
//mail server
ini_set("SMTP","smtp.gmail.com");

//form input
$sender = $_POST['sender'];
$subject = $_POST['subject'];
$message = $_POST['message'];

if (isset($_POST['sender'])) {
    if (empty($_POST['sender'])) {
        echo 'Erreur: champs non renseignés';
    }
    else {
        mail("coudurier.kilian@gmail.com", $subject, $message);
    }
}
else {
    echo 'Erreur';
}