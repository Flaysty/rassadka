<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Админ</title>
</head>

<body style="font-family: 'Gill Sans', 'Gill Sans MT', 'Myriad Pro', 'DejaVu Sans Condensed', Helvetica, Arial, 'sans-serif'; font-size: 14px;">
<?php
require_once 'script/connect.php';

// Имя пользователя и его пароль для аутентификации
$username = 'admin';
$password = 'rass112233';
    


if(!isset($_SERVER['PHP_AUTH_USER']) || 
   !isset($_SERVER['PHP_AUTH_PW']) || ($_SERVER['PHP_AUTH_USER'] != $username) || ($_SERVER['PHP_AUTH_PW'] != $password)) {
		// Имя пользователя не действительны для отправки HTTP-заголовков,
		// подтверждающих аутентификацию
		header('HTTP/l.1 401 Unauthorized');
		header('WWW-Authenticate: Basic rеаlm="Страница аутентификации"');
		
		//exit('Извините, вы должны ввести правильные имя и пароль');
} else {
	
	$limit = 50;
	
	if ($_GET['page']) {
		$cur_page = $_GET['page'];
	} else {
		$cur_page = 1;
	}
	
	if ($cur_page == 1) {
		$start = 0;
	} else {
		$start = ($limit*$cur_page)-$limit;
	}
	
	//echo "Старт: " . $start . " Лимит: " . $limit;

	
	$query = "SELECT * FROM seat ORDER BY creation_time DESC LIMIT $start, $limit";
	$result = mysqli_query($link, $query);
	
	if($result) {
		
		$rows = mysqli_num_rows($result); // количество полученных строк
		
		$q = "SELECT * FROM seat ORDER BY creation_time DESC";
		$r = mysqli_query($link, $q);
		
		//колоичество записей в базе
		$seats = mysqli_num_rows($r);
		
		$pages = ceil($seats/$limit);

    	echo "<table><tr align='left'><th>Заголовок</th><th>Дата создания</th><th>Владелец</th><th>Номер</th><th>Ссылка</th></tr>";
    	
		
		for ($i = 0 ; $i < $limit ; ++$i) {

        	//$row = mysqli_fetch_row($result);
			$row = mysqli_fetch_array($result);
			$creation_date = $row['creation_time'];
			
			$user_id = $row['user_id'];
			
			$q = mysqli_query($link, "SELECT name, email FROM user WHERE id='$user_id'");
			$r = mysqli_fetch_array($q);
			
			$name = $r['name'];
			$email = $r['email'];

			$owner = $name . " (" . $email . ", id: " . $row['user_id'] . ")";
			$seat_id = $row['seat_id'];
			
			if(!empty($seat_id)) {
			
				$file = file_get_contents("save/" . $seat_id . ".json");  
				$taskList = json_decode($file, TRUE);  
			 	// Представить новую переменную как элемент массива, в формате 'ключ'=>'имя переменной'
				$taskList[] = array(
					'header' => $header
				);       
			
        		echo "<tr>";
            
				echo "<td>" . $taskList['header']. "</td>";
				echo "<td>" . $creation_date . "</td>";
				echo "<td>" . $owner . "</td>";
				echo "<td>" . $seat_id . "</td>";
				echo "<td><a href='https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/index.php?seat_id=".$seat_id."' target='_blank'>Смотреть</a></td>";
				
        		echo "</tr>";
			}
    	}
		
		
    	echo "</table>";
		
		if ($seats > $limit) {
			if ($cur_page != 1) {
				echo "<a href='https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/admin.php?page=1'><<</a>&nbsp;";
				if($cur_page > 2) {
					echo "<a href='https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/admin.php?page=".($cur_page-2)."'>".($cur_page-2)."</a>&nbsp;";
				}
				echo "<a href='https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/admin.php?page=".($cur_page-1)."'>".($cur_page-1)."</a>&nbsp;";
			}
			
			echo "<a href='https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/admin.php?page=".$cur_page."'><b>".$cur_page."</b></a>&nbsp;";
			
			if ($cur_page != $pages) {
				echo "<a href='https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/admin.php?page=".($cur_page+1)."'>".($cur_page+1)."</a>&nbsp;";
				if($cur_page < ($pages-1)) {
					echo "<a href='https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/admin.php?page=".($cur_page+2)."'>".($cur_page+2)."</a>&nbsp;";
				}
				echo "<a href='https://xn-----6kcaabbihpgn0d3bzbrai6s.xn--p1ai/admin.php?page=".$pages."'>>></a>&nbsp;";
			}
		}
    	// очищаем результат
    	mysqli_free_result($result);
	}
}
mysqli_close($link);
?>
</body>
</html>