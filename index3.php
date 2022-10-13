<?php 

$page = isset($_GET['page']) ? $_GET['page'] : 'home' ;

$path = 'pages/'.$page.'.php' ;

if(file_exists($path)){
	require 'inc/header.php';
	require $path ;
	require 'inc/footer.php';
}
else 
	echo 'Không tồn tại: '.$path ;