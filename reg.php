<html lang="ru-RU">

<head>
    <title>
    </title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>

<body>

<?php

session_start();

if(!empty($_SESSION['id'])) {
	header('Location: https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai');
	exit;
} else {

?>

<h3>Регистрация</h3>
<form method="post" action="script/reg.php?sand=<?php echo $_GET['sand']; ?>">
<input type="email" name="email" placeholder="Электронная почта" required /><br /><br />
<input type="password" name="password" placeholder="Пароль" required /><br /><br />
<input type="password" name="r_password" placeholder="Повторите пароль" required /><br /><br />
<input type="submit" name="submit" value="Регистрация" />
</form> 

<p>Если Вы уже зарегестрированы выполните <a href="https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/login.php">Вход</a></p>

<?php
}
?>

</body>

</html>