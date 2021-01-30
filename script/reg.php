<?php
require_once 'connect.php';

if(isset($_POST["submit"])){	
	if(!empty($_POST['email']) && !empty($_POST['password']) && !empty($_POST['r_password'])) {
  		$email= htmlspecialchars($_POST['email']);
		$password= md5(md5(trim($_POST['password'])));
		$r_password = md5(md5(trim($_POST['r_password'])));
		
		if($password == $r_password) {	
			$query = mysqli_query($link, "SELECT * FROM user WHERE email='".$email."'");
  			$numrows=mysqli_num_rows($query);
		
			if($numrows==0){
			
			if(isset($_GET['sand'])) {
				$sand = $_GET['sand'];
				
				$query="INSERT INTO user (email, password, sand) VALUES('$email', '$password', '$sand')";
  				$result=mysqli_query($link, $query);
			} else {
				$query="INSERT INTO user (email, password) VALUES('$email', '$password')";
  				$result=mysqli_query($link, $query);
			}
 					if($result){
						
						header('Location: https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/login.php');
						exit;
					
					} else {
 						echo "Failed to insert data information!";
  					}
					
			} else {
				echo "That username already exists! Please try another one!";
   			}
		} else {
			echo "*password and repeat passwod must be the same";
		}
		
	} else {
		echo "All fields are required!";
	}
}

mysqli_close($link);
?>