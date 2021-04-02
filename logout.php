<?php
require_once 'script/connect.php';

session_start();

// Удаляем все переменные сессии.
$_SESSION = array();
	
setcookie("id", "", time()-2592000, "/");

// уничтожаем сессию.
session_destroy();
	
header("Location: https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/");
exit;

mysqli_close($link);
?>