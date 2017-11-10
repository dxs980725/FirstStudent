require.config({
	baseUrl: "./js",
	paths: {
		jquery: "lib/jquery.min",
		dianji:"dianji",
		gonggao:"gonggao",
		yanfa:"yanfa",
		sousuo:"sousuo",
		xiangqing:"xiangqing"

	}
})
require(["dianji","gonggao","yanfa","sousuo","xiangqing"], function() {

})