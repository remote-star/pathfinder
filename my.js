function getWeather() {
	var string = "ts=1443079775&ttl=30&uid=U123456789",
		key = "secret", sig;
	sig = $.base64.encode(rstr_hmac_sha1(key, string));

alert(sig);

	$.ajax({
		async: false,
		url: "http://sou.qq.com/online/get_weather.php?callback=Weather&city=nanjing",
		type: "GET",
		dataType: 'jsonp',
		jsonp: 'callback',
		timeout: 5000,
	   success: function (json) {//客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
	   	if(json.actionErrors.length!=0){
	   		alert(json.actionErrors);
	   	}
	   	console.info(json);
	   }
	});
}

