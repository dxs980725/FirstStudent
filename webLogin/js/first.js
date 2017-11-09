require(["jquery","ajax"],function($,ajax){
	var item=[];
	ajax.postAjax({},"api/get.php",function(data){
		///	msg.show="登录成功"

		var str="";
		for(var i=0;i<data.length;i++){
			item[i]= data[i];
			str+="<div class='list-box'><div class='one'>"+item[i].name+"</div><div class='two'>"+item[i].content+"</div><div class='three'>"+item[i].author+"</div></div>";
		}
		$(".list").html(str)
		console.log(str);
	});


	var items=[];
	ajax.postAjax({},"api/xiang.php",function(data){
		///	msg.show="登录成功"

		var strs="";
		for(var i=0;i<data.length;i++){
			items[i]= data[i];
			strs+="<div class='content'><div class='ones'>"+items[i].xq+"</div><div class='twos'>"+items[i].author+"</div><div class='threes'>"+items[i].createTime+"</div></div>";
		}
		$(".cont").html(strs)
		console.log(strs);
	});

	// var obj = new Object();
	// ajax.postAjax(obj,"api/search.php".function(data){
	// 	var str="";
	// 	for(var l=0;l<data.length;l++){

	// 	}
	// })
})