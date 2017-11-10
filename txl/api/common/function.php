<?php
function showMsg($st,$error="",$data=array()){
	$arr['st'] = $st;
	$arr['error'] = $error;
	$arr['data'] = $data;
	echo json_encode($arr);
}



function echoMsg(){
	echo "hello world";
}

$links = mysqli_connect("localhost","root","root","txl");
mysqli_query($links,"set names utf8");