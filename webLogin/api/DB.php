<?php
header('Access-Control-Allow-Origin:*');

	class mysqldb{
		//数据库的链接的属性
		private $conn;
		//mysql数据的ip或地址
		private $host;
		//数据库的用户名
		private $user;
		//数据库的链接密码
		private $userpassword;
		//数据库的名称
		private $dbname;
		
		//构造函数初始化成员属性和成员方法
		function __construct($host="127.0.0.1",$user="root",$password="root",$dbname="1507a"){
			//构造函数给私有属性赋值
			$this->host=$host;
			$this->user=$user;
			$this->userpassword=$password;
			$this->dbname=$dbname;
			//初始化数据库的链接
			$this->init();
		}
		
		//初始化数据库的链接
		private function init(){
			//链接数据库
			$this->conn= mysqli_connect($this->host,$this->user,$this->userpassword,$this->dbname);
			//数据库是否链接成功
			if($this->conn){
				//设置数据库的编码格式
				$this->conn->set_charset("utf8");
			}
		}
		
		//获取数据的方法 ,将获取的结果转为json数据返回
		function queryToJson($sql){
			//执行sql语句并返回结果集
			$result= mysqli_query($this->conn,$sql);
			//声明一个空数组
			$arr= array();
			//循环遍历结果集并添加到数组中
			while($row= mysqli_fetch_array($result)){
				array_push($arr,$row);
				//$arr[]=$row;
			}
			//释放资源
			mysqli_free_result($result);
			//将数组转为json格式的数据
			return json_encode($arr);
		}
		
		
		//获取数据的方法 ，将获取的结果转为数组返回
		function queryToArray($sql){
			//执行sql语句并返回结果集
			$result= mysqli_query($this->conn,$sql);
			//声明一个空数组
			//声明一个空数组
			$arr= array();
			//循环遍历结果集并添加到数组中
			while($row= mysqli_fetch_array($result)){
				//将每行添加到数组中
				array_push($arr,$row);
				//$arr[]=$row;
			}
			//释放资源
			mysqli_free_result($result);
			//将数组转为json格式的数据
			return $arr;
		}
		
		//新增  修改  删除都可以调用该方法,该方法返回json格式的数据
		function updateToJson($sql){
			//执行sql语句并返回结果，结果是布尔类型，true代表成功  false表示失败
			$result= mysqli_query($this->conn,$sql);
			//声明一个空数组
			$arr= array();
			//判断sql语句是否执行成功
			if($result){
				$arr["flag"]=true;
				$arr["msg"]="操作成功";
			}else{
				$arr["flag"]=false;
				$arr["msg"]="操作失败";
			}
			//将数组转为json格式的数据
			return json_encode($arr);
		}
		
		//新增  修改  删除都可以调用该方法,该方法返回布尔类型
		function updateToBool($sql){
			//执行sql语句并返回结果，结果是布尔类型，true代表成功  false表示失败
			$result= mysqli_query($this->conn,$sql);
			return $result;
		}
		
		//析造函数销毁数据
		function __destruct(){
			//关闭数据库
			mysqli_close($this->conn);
		}
		
	}
	
	
?>