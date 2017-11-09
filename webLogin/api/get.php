<?php

header('Content-Type:text/html;charset=UTF-8');
header("Access-Control-Allow-Origin: *");
	require_once("DB.php");
	$db=new mysqldb();
	$sql="select * from content ";
	$result=$db->queryToJson($sql);
	echo $result;


