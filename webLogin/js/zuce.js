define(function(){

	require(['jquery','ajax'],function($,ajax){
			
				$("#btn3").bind("click",function(){
					var obj = new Object();
					//获取数据
					obj.name = $("#name").val()
					obj.password = $("#password").val()
					obj.email = $("#email").val()
					obj.tel = $("#tel").val()
					// obj.sex = $(".sex:checked").val()
					// obj.id_card = $("#id_card").val()
					//判断合法性
					console.log(obj)
					if(!obj.name || !obj.password || !obj.email ){
						alert("数据不合法")
					}

					ajax.postAjax(obj,"user.php",function(data){
						if(data.st){
							alert("成功")
						}else{
							alert("失败")
						}
					})
			
		})
	})
})