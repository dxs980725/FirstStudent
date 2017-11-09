<?php
header('Content-Type:text/html;charset=UTF-8');
header("Access-Control-Allow-Origin: *");
$links=mysqli_connect("localhost","root","root","1507a")
mysqli_query($links,"set names utf8");
$page=isset($_GET['page'])?$_GET['page']:0;
$content=isset($_POST['content'])?($_POST['content']):null;
$limt=5;
// require_once("DB.php");
//$db=new mysqldb();
$sql="select * from content where content like '{$content}%' limit {$page}".",".$limt;
$rs=mysqli_query($links,$sql);
$arr=array();
while($ret=mysqli_fetch_assoc($rs)){
	$arr[]=$ret;
}
if(!$arr){
	showMag(0,"没有数据可查");
	exit();
}

showMag(1,"",$arr);
functon showMag($rt,$error,$data=array()){
	$arr['rt']=$rt;
	$arr['error']=$error;
	$arr['data']=$data;
	echo json_encode($arr);
}