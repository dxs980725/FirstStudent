define(function(){
	var urlApi = "http://www.txl.com/api/"
	var ajaxObj = new Object();
	 ajaxObj.postAjax = function (obj,url,callback){
			$.ajax({
				url:urlApi+url,
				type:"post",
				data:obj,
				dataType:'json'
			}).then(callback)
	}

	ajaxObj.getAjax = function (obj,url,callback){
			$.ajax({
				url:urlApi+url,
				type:"get",
				data:obj,
				dataType:"json"
			}).then(callback)
	}

	return ajaxObj;
})


		
