<?php
$host = 'localhost'; // адрес сервера 
$database = 'alekseitenor_rass'; // имя базы данных
$user = '046237511_rass'; // имя пользователя
$password = 'u3(Ach3auecx'; // пароль

$link = mysqli_connect($host, $user, $password, $database);

if (!$link) {
    echo "Ошибка: Невозможно установить соединение с MySQL." . PHP_EOL;
    echo "Код ошибки errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Текст ошибки error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}
?>