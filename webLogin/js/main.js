require(["jquery","ajax","first","login"],function($,ajax,first,login){
	// console.log(1);
	$("li").on("click",function(){
		$("#title").html($(this).children("p").html())
	})

	$(".list").on("click",function(){
		$("main").hide();
		$(".cont").show();
		$("#main").hide();
		$("#lolo").hide();
		$(".guan").hide();
		// alert("2")
	})

	$(".lian").on("click",function(){
		window.location.href="zuce.html"
	})

	$("#logins").on("click",function(){
		window.location.href="logins.html"
	})

	$("#guans").on("click",function(){
		$(".guan").show();
		$("main").hide();
		$("#main").hide();
		$("#lolo").hide();
		$(".cont").hide();
	})

	$("#gong").on("click",function(){
		$(".guan").hide();
		$("main").show();
		$("#main").hide();
		$("#lolo").hide();
		$(".cont").hide();
	})

	$("#first").on("click",function(){
		$(".guan").hide();
		$("main").hide();
		$("#main").show();
		$("#lolo").hide();
		$(".cont").hide();
	})

	$("#yu").on("click",function(){
		$(".guan").hide();
		$("main").hide();
		$("#main").hide();
		$("#lolo").show();
		$(".cont").hide();
	})
})