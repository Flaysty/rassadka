<?php
require_once 'connect.php';
session_start();

if (empty($_POST['email']) || empty($_POST['password'])) {
	$error = 'Не указан адрес електронной почты или пароль!';
	$arr = array("error" => $error);
	echo json_encode($arr);
} else {    
	$email = $_POST['email'];
	$password= md5(md5(trim($_POST['password'])));
	
	$query = mysqli_query($link, "SELECT id FROM user WHERE email = '$email' AND password = '$password'");
	$result = mysqli_fetch_array($query);
	
	if (empty($result['id'])) {
		$error = 'Указанный пользователь не существует или введенный пароль не соответсвует пользователю!';
		$arr = array("error" => $error);
		echo json_encode($arr);
	} else {	
		$_SESSION['password'] = $password; 
		$_SESSION['email'] = $email; 
		$_SESSION['id'] = $result['id'];
			
		$id = $result['id'];
		setcookie("id", $id, time()+2592000, "/");  /* срок действия 1 месяц */
			
		$query = mysqli_query($link, "SELECT seat_id FROM seat WHERE seat_id NOT LIKE 'a%' AND user_id = '$id' AND actual='actual'");
		$result = mysqli_fetch_array($query);
			
		if(empty($result['seat_id'])) {
			//Если нет сохраненной рассадки
			$arr = array("error" => "Нет сохраненной рассадки");
			echo json_encode($arr);
		} else {
			//Если за пользователем сохранена рассадка
			$seat_id = $result['seat_id'];
			$arr = array("error" => $seat_id, "seat_id" => $seat_id);
			echo json_encode($arr);
		}
	}     
}
mysqli_close($link);
?>