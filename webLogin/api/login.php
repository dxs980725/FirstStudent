<?php
header('Content-Type:text/html;charset=UTF-8');
header("Access-Control-Allow-Origin: *");

$link = mysqli_connect("127.0.0.1","root","root","1507a");
mysqli_query($link,"set names utf8");//解决中文乱码
$username = isset($_POST['username'])?$_POST['username']:"";
$password =	isset($_POST['password'])?$_POST['password']:"";
if(!$username){
	showMsg(0,"用户名不能为空");
	exit();
}
if(!$password){
	showMsg(0,"密码不能为空");
	exit();
}
$password=md5($password);
//admin  123   202cb962ac59075b964b07152d234b70
			// d9b1d7db4cd6e70935368a1efb10e377
$sql="select * from logins where username = '{$username} ' and password = '{$password}' ";

$rs = mysqli_query($link,$sql);//不管这条sql是否能查出数据，·mysqli_query都有资源返回
// var_dump($rs);
$rss = mysqli_fetch_assoc($rs);//处理MySQL返回的数据
//通过rss判断用户名密码是否正确
// var_dump($rss);
if(!$rss){
	showMsg(0,"用户名或者密码错误");
	exit();
}
// $rs = mysqli_fetch_assoc($rs);
showMsg(1,"",$rss);

// md5不可逆
function showMsg($st,$error="",$data=array()){
	$arr['st'] = $st;
	$arr['error'] = $error;
	$arr['data'] = $data;
	echo json_encode($arr);
}

