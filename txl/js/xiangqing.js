define(['jquery', 'ajax'], function($, ajax) {	
	var obj = new Object();
	ajax.getAjax(obj,`xiangqing.php?id=${this.name}`,callBack)

	function callBack(result){
		console.log(result.data);
			var html="";
			
				for (var i = 0; i < result.data.length; i++) {
				item = result.data[i];
				html+=`<div class="box">
			${item.content}
		</div>
		<div class="xinxi">
			<h4>${item.gong_name}</h4>
			<p>${item.riqi}</p>
		</div>`;
				}
			$(".neirong").html(html);
			
		}
})
