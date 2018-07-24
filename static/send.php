<?php

require('vendor/autoload.php');

$errors = [];
if (empty($_POST['name'])){
    $errors[] = 'name';
}

if (empty($_POST['email'])){
    $errors[] = 'email';
}

if (empty($_POST['message'])){
    $errors[] = 'message';
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

$mailer->Body = "Обратная связь с лендинга:
Имя: {$_POST['name']}
E-mail: {$_POST['email']}
Сообщение: {$_POST['message']}
";

$mailer->send();

echo '{"result":"ok"}';