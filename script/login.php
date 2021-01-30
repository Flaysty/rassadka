<?php
require_once 'connect.php';

session_start();

if (isset($_POST['submit'])) 
{
    if (empty($_POST['email'])) 
    {
        echo 'Email is empty';
    }
    elseif (empty($_POST['password'])) 
    {
        echo 'Password is empty';
    }
    else 
    {    
        $email = $_POST['email'];
        $password= md5(md5(trim($_POST['password'])));
		            
        $query = mysqli_query($link, "SELECT id, sand FROM user WHERE email = '$email' AND password = '$password'");
        $result = mysqli_fetch_array($query);
                
        if (empty($result['id'])) 
        {
            echo 'User doesnt exist';
        }
        else 
        {	
		
			
            $_SESSION['password'] = $password; 
            $_SESSION['email'] = $email; 
            $_SESSION['id'] = $result['id'];
			$_SESSION['sand'] = $result['sand']; 
			
			setcookie("id", $_SESSION['id'], time()+3600);
			
			header('Location: https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/#' . $_SESSION['sand']);
			exit;
			        
        }     
    }
}

mysqli_close($link);
?>