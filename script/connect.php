<?php
$host = 'localhost'; // адрес сервера 
$database = 'alekseitenor_wedw'; // имя базы данных
$user = '046237511_wedw'; // имя пользователя
$password = 'jz~canw+Tue8'; // пароль

$link = mysqli_connect($host, $user, $password, $database);

if (!$link) {
    echo "Ошибка: Невозможно установить соединение с MySQL." . PHP_EOL;
    echo "Код ошибки errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Текст ошибки error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}
?>