<?php
require_once 'connect.php';
session_start();
	
if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['password']) && !empty($_POST['r_password'])) {
	$name = htmlspecialchars($_POST['name']);
  	$email= htmlspecialchars($_POST['email']);
	$password= md5(md5(trim($_POST['password'])));
	$r_password = md5(md5(trim($_POST['r_password'])));
		
	if($password == $r_password) {	
		$query = mysqli_query($link, "SELECT * FROM user WHERE email='".$email."'");
  		$numrows=mysqli_num_rows($query);
		
		if($numrows==0){
		
			$query="INSERT INTO user (name, email, password) VALUES('$name', '$email', '$password')";
  			$result=mysqli_query($link, $query);
			
 			if($result){
				//require_once 'login.php'; //Войти если регистрация успешна

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
			} else {
 				$error = "Не удалось добавить пользователя в базу данных!";
				$arr = array("error" => $error);
				echo json_encode($arr);
  			}		
		} else {
			$error = "Пользователь с указанным адресом електронной вочты уже существует!";
			$arr = array("error" => $error);
			echo json_encode($arr);
   		}
	} else {
		$error = "Пароли не совпадают!";
		$arr = array("error" => $error);
		echo json_encode($arr);
	}
} else {
	$error = "Необходимо заполнить все поля!";
	$arr = array("error" => $error);
	echo json_encode($arr);
}
mysqli_close($link);
?>