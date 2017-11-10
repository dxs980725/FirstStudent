define(['jquery', 'ajax'], function($, ajax) {
	$("#shouye").click(function(){
		$(".zhu").fadeIn();
		$(".xianshi").fadeOut();
		$(".shoue").fadeOut();
		$(".guanli").fadeOut();
		$(".neirong").fadeOut();
		$(".xiugai").fadeOut();
		$(".song").fadeOut();
		$(".zuihou").fadeOut();
		$(".qqq").fadeIn();
		$(".www").fadeOut();
		$(".eee").fadeOut();
		$(".rrr").fadeOut();
		$(".fanhui").fadeOut();
	})


	$("#gongao").click(function(){
		$(".xianshi").fadeIn();
		$(".guanli").fadeOut();
		$(".shoue").fadeOut();
		$(".zhu").fadeOut();
		$(".neirong").fadeOut();
		$(".xiugai").fadeOut();
		$(".song").fadeOut();
		$(".zuihou").fadeOut();
		$(".qqq").fadeOut();
		$(".eee").fadeOut();
		$(".rrr").fadeOut();
		$(".www").fadeIn();
		$(".fanhui").fadeIn();
	})
	


	$("#guanli").click(function(){
		$(".shoue").fadeIn();
		$(".zhu").fadeOut();
		$(".xianshi").fadeOut();
		$(".neirong").fadeOut();
		$(".guanli").fadeOut();
		$(".xiugai").fadeOut();
		$(".song").fadeOut();
		$(".zuihou").fadeOut();
		$(".qqq").fadeOut();
		$(".www").fadeOut();
		$(".eee").fadeIn();
		$(".rrr").fadeOut();
		$(".fanhui").fadeIn();
	})
	

	$(".bog_box").click(function(){
		$(".xianshi").fadeOut();
		$(".neirong").fadeIn();
		$(".xiugai").fadeOut();
		$(".zuihou").fadeOut();
	})
	

	$(".zengjia").click(function(){
		$(".shoue").fadeOut();
		$(".guanli").fadeIn();
		$(".xiugai").fadeOut();
		$(".song").fadeOut();
		$(".zuihou").fadeOut();
	})

	$(".xiugmima").click(function(){
		$(".shoue").fadeOut();
		$(".xiugai").fadeIn();
		$(".song").fadeOut();
		$(".zuihou").fadeOut();
	})
	$(".noe").click(function(){
		$(".zhu").fadeOut();
		$(".song").fadeIn();
		$(".zuihou").fadeOut();
	})
	$(".two").click(function(){
		$(".zhu").fadeOut();
		$(".song").fadeIn();
		
	})
	$(".therr").click(function(){
		$(".zhu").fadeOut();
		$(".song").fadeIn();
		
	})
	$(".four").click(function(){
		$(".zhu").fadeOut();
		$(".song").fadeIn();
		
	})
	$(".five").click(function(){
		$(".zhu").fadeOut();
		$(".song").fadeIn();
		
	})
	$(".six").click(function(){
		$(".zhu").fadeOut();
		$(".song").fadeIn();
	})

	$("#zuihou").click(function(){
		$(".zuihou").fadeIn();
		$(".zhu").fadeOut();
		$(".xianshi").fadeOut();
		$(".shoue").fadeOut();
		$(".guanli").fadeOut();
		$(".neirong").fadeOut();
		$(".xiugai").fadeOut();
		$(".song").fadeOut();
		$(".qqq").fadeOut();
		$(".www").fadeOut();
		$(".eee").fadeOut();
		$(".rrr").fadeIn();
		$(".fanhui").fadeIn();
	})
	$(".fanhui").click(function(){
		window.history.back();
	})
// 登录页链接
	$(".denglu").click(function(){
		alert("链接登录页");
	})
})