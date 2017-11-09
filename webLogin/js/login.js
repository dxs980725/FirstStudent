//登录模块
define(function(){
		var msg = new Object();
		require(["jquery","ajax"],function($,ajax){
			$("#btn1").on("click",function(){
			var username = $("input[name=username]").val()
			var password = $("input[name=password]").val()
			//前段验证
			if(!username){
				msg.show="用户名不能为空"
				alert(msg.show)
				return msg
			}
			if(!password || password.length<3){
				msg.show="密码不合法"
				alert(msg.show)
				return msg
			}
			//end
			var obj = new Object();
			obj.username=username;
			obj.password=password;
			
			ajax.postAjax(obj,"login.php",function(data){
			///	msg.show="登录成功"
				if(data.st==1){
					alert("欢迎用户"+data.data.username+"登录");
					window.location.href="zhuye.html"
				}else{
					alert("登录失败"+data.error);
				}
			});
		})

			$("#btn2").on("click",function(){
				window.location.href="zuce.html";
			})
	})

})

	
