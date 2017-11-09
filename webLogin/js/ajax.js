//require 请求，依赖jquery
//obj:需要传送的数据
//url:接口地址
//callback:回掉函数
define(function(){
	var urlApi = "http://www.kills.com/webLogin/"
	var post = function (obj,url,callback){//login.php
			$.ajax({
				url:urlApi+url,
				type:"post",
				data:obj,
				dataType:"json"
			}).then(callback)
	}

	var get = function (obj,url,callback){//login.php
			$.ajax({
				url:urlApi+url,
				type:"get",
				data:obj,
				dataType:"json"
			}).then(callback)
	}

	var ajaxObj={
		postAjax:post,
		getAjax:get
	}
	return ajaxObj;
})