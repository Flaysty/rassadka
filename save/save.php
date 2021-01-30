<?php
$filename = htmlspecialchars($_POST["save_to_send_input"]) . '.txt';
$text = $_POST["save_to_send_text"];
//записываем текст в файл
file_put_contents($filename, $text);
//потом его можно прочитать из файла
$text = file_get_contents($filename);

require_once '../script/connect.php';

session_start();

//if(isset($_POST["save_to_send_input"])){


if(!empty($_SESSION['id'])){
	


		$id = $_SESSION['id'];
		$sand = $_POST["save_to_send_input"];
		$message = "";
		
	
		$query = mysqli_query($link, "SELECT * FROM user WHERE id='$id'");
  		$numrows = mysqli_num_rows($query);
		
			if($numrows==0){
				$message = "Вход не выволнен...";
			} else {
				//$query="INSERT INTO user (sand) VALUES('$sand')";
			
				$query="UPDATE user SET sand='$sand' WHERE id='$id'";
			
  				$result=mysqli_query($link, $query);
 					if($result){
						$message = "Произведена запись в базу данных.";
						//header('Location: https://weddingnew.inclu.work/login.php');
						//exit;
					
					} else {
 						$message = "Failed to insert data information!";
  					}
   			}
			
/*			
$user_info[] = array (
	'id' => $id,
	'message' => $message
);
*/


echo json_encode($id);
exit;	
} 

mysqli_close($link);


?>
