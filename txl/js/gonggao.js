define(['jquery', 'ajax'], function($, ajax) {	
	
	var obj = new Object();
	obj.p=0;
	$(document).scroll(function(){
		console.log(document.documentElement.scrollTop+"滚动条距离顶部的高度") //获取文档总高度
		console.log(window.screen.availHeight +"屏幕可是高度")   //
		console.log($(document).height()+"文档总高度");
		if(document.documentElement.scrollTop+window.screen.availHeight>=$(document).height()){
			obj.c=$("#inp").val();
			obj.p+=6;
			ajax.getAjax(obj,"gonggao.php",callBack)

		}	 

	})

	$("#inp").on('input',function(){
		$(".bog_box").html("")
		obj.c=$(this).val();
		obj.p=0;
		ajax.getAjax(obj,"gonggao.php",callBack)
	})
	ajax.getAjax(obj,"gonggao.php",callBack)

	function callBack(result){
		console.log(result.data);
			var html="";
			
			if(result.ts){
					for (var i = 0; i < result.data.length; i++) {
					item = result.data[i];
					var title=item.title.split("")[0]
					html+=`<div class="top">
				<div class="top_noe">
					${item.name} ${item.id}
				</div>
				<div class="top_center">
					<span>
						${item.title}
					</span>
					<p>${item.data}</p>
				</div>
				<div class="top_right">
					${item.lastname}
				</div>
			</div>`;
				}
		
			}else{
				html = "未找到";
			}

			$(".bog_box").append(html);
			var h = $(".bog_box").children().length*85
			$(".bog_box").css("height",parseInt(h,10)+60+"px")
		}
})


// -------------------------------------


