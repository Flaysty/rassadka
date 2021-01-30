<?php
$file = fopen("dataAjax.json","w+");
$json = $_POST['json'];
$jsonDecode = json_decode($json);
fwrite($file, $jsonDecode);
fclose($file);
?>