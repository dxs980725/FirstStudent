define(['jquery', 'ajax'], function($, ajax) {
	var obj = new Object();
	obj.p=0;
	$(document).scroll(function(){
		console.log(document.documentElement.scrollTop+"滚动条距离顶部的高度") //获取文档总高度
		console.log(window.screen.availHeight +"屏幕可是高度")   //
		console.log($(document).height()+"文档总高度");
		if(document.documentElement.scrollTop+window.screen.availHeight>=$(document).height()){
			obj.c=$("#inpp").val();
			obj.p+=6;
			ajax.getAjax(obj,"yanjiu.php",callBack)

		}	 

	})

	$("#inpp").on('input',function(){
		$(".bog_boxx").html("")
		obj.c=$(this).val();
		obj.p=0;
		ajax.getAjax(obj,"yanjiu.php",callBack)
	})
	ajax.getAjax(obj,"yanjiu.php",callBack)

	function callBack(result){
		console.log(result.data);
			var html="";
			
			if(result.ts){
					for (var i = 0; i < result.data.length; i++) {
					item = result.data[i];
					var title=item.title.split("")[0]
					html+=`<ul class="sul">
			<li>
				<p class="sone">${result.data[i].tou}</p>
				<p class="stwo">
					${result.data[i].name}
					<span class="sspan">19008097890</span>
				</p>
				<p class="sthree">
					${result.data[i].title}
					<span class="sspan">${result.data[i].email}</span>
				</p>
			</li></ul>`;
				}
		
			}else{
				html = "未找到";
			}

			$(".bog_boxx").append(html);
			var h = $(".bog_boxx").children().length*85
			$(".bog_boxx").css("height",parseInt(h,10)+60+"px")
		}


})
















// `<ul class="sul">
// 			<li>
// 				<p class="sone">${result.data[i].tou}</p>
// 				<p class="stwo">
// 					${result.data[i].name}
// 					<span class="sspan">19008097890</span>
// 				</p>
// 				<p class="sthree">
// 					${result.data[i].title}
// 					<span class="sspan">${result.data[i].email}</span>
// 				</p>
// 			</li></ul>`