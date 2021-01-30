<?php
$filename = htmlspecialchars($_POST["save_to_send_input"]) . '.txt';
$text = $_POST["save_to_send_text"];
//записываем текст в файл
file_put_contents($filename, $text);
//потом его можно прочитать из файла
$text = file_get_contents($filename);
?>
