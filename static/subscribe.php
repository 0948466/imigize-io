<?php

require('vendor/autoload.php');

$errors = [];

if (empty($_POST['email'])){
    $errors[] = 'email';
}

if (!empty($errors)){
    echo json_encode([
        'result' => 'error',
        'errors' => $errors
    ]);
    die;
}

$mailer = new \PHPMailer\PHPMailer\PHPMailer();

$mailer->Mailer = 'smtp';
$mailer->Host = 'smtp.yandex.ru';
$mailer->Port = 465;
$mailer->SMTPAuth = true;
$mailer->SMTPSecure = 'ssl';
$mailer->Username = 'noreply@imigize.com';
$mailer->Password = 'onuMai6I';
$mailer->From = 'noreply@imigize.com';
$mailer->FromName = 'Imigize';
$mailer->CharSet = 'utf-8';

$mailer->addAddress('ir@imigize.com', 'Imigize IR');
$mailer->addAddress('ysoft2000@mail.ru', 'YSoft');

$mailer->isHTML(false);

$mailer->Body = "Подписка с лендинга:
E-mail: {$_POST['email']}
";

$mailer->send();

echo '{"result":"ok"}';