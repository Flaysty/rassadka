<?php
require_once 'script/connect.php';

session_start();

if(empty($_SESSION['id'])) {
	echo "You need to log in for log out...<br />";
	echo "<a href=". 'https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/login.php' . ">Login</a>";
} else {

	setcookie("id", '', time()-3600);
	
	unset($_SESSION['id']);
	unset($_SESSION['email']);
	unset($_SESSION['password']);
	//unset($_SESSION['sand']);
	
	
	header("Location: https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/#".$_SESSION['sand']);
	exit;	
}

mysqli_close($link);
?>