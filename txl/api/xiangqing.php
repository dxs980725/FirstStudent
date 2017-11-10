<?php
$link = mysqli_connect("127.0.0.1","root","root","txl");
mysqli_query($link,"set  names utf8");
$id=$_GET["id"];
$noticeSelectSql="SELECT * FROM gonggao where id=".$id;
$reasult = mysqli_query($link,$noticeSelectSql);
$finalData = array();
while($row = mysqli_fetch_assoc($reasult)){
	$finalData[] = $row;
}
if($finalData){
	showMsg(1,"",$finalData);
}else{
	showMsg(0,"没有相关数据");
}
function showMsg($ts,$error="",$data=array()){
	$arr["ts"]= $ts;
	$arr["error"] = $error;
	$arr["data"] = $data;
	echo json_encode($arr);
};