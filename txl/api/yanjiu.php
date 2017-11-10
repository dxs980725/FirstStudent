<?php
$link = mysqli_connect("127.0.0.1","root","root","txl");
mysqli_query($link,"set  names utf8");
$page = isset($_GET['p'])?$_GET['p']:0;
$search = isset($_GET['c'])?urldecode($_GET['c']):null;//content
//根据content搜索消息内容
$where="";
if($search){
	$where  = "where tou like '{$search}%'";
}

$limit = 8;
$noticeSelectSql="SELECT * FROM yanjiu ".$where." limit ".$page.",".$limit;

$reasult = mysqli_query($link,$noticeSelectSql);
//var_dump($reasult);
$finalData = array();
while($row = mysqli_fetch_assoc($reasult)){
	$finalData[] = $row;
}
// echo "<pre>";
// print_r($finalData);
if($finalData){
	showMsg(1,"",$finalData);
}else{
	showMsg(0,"没有相关数据");
}

// showMsg($result);

function showMsg($ts,$error="",$data=array()){
	$arr["ts"]= $ts;
	$arr["error"] = $error;
	$arr["data"] = $data;
	echo json_encode($arr);
};
