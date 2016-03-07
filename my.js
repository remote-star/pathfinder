var data = ['河北', '秦皇岛', '54449', '54449.jpg', '2016 3-4 16:44:24', '2℃/7℃', '3月4日 霾转小雨', '无持续风向微风转西北风3-4级', '18.gif', '7.gif',
			'今日天气实况：气温:4℃;风向/风力:东风 3级;湿度:88%;紫外线强度:最弱。空气质量:很差', '今日天气实况：气温:4℃;风向/风力:东风 3级;湿度:88%;紫外线强度:最弱。空气质量:很差\r\n\
今日天气实况：气温:4℃;风向/风力:东风 3级;湿度:88%;紫外线强度:最弱。空气质量:很差\r\n\
今日天气实况：气温:4℃;风向/风力:东风 3级;湿度:88%;紫外线强度:最弱。空气质量:很差\r\n\
今日天气实况：气温:4℃;风向/风力:东风 3级;湿度:88%;紫外线强度:最弱。空气质量:很差\r\n\
今日天气实况：气温:4℃;风向/风力:东风 3级;湿度:88%;紫外线强度:最弱。空气质量:很差\r\n\
今日天气实况：气温:4℃;风向/风力:东风 3级;湿度:88%;紫外线强度:最弱。空气质量:很差', '-3℃/9℃', '3月5日 晴', '西北风转北风3-4级',
			'0.gif', '0.gif', '-2℃/6℃', '3月6日 多云转阴', '无持续风向微风', '1.gif', '2.gif']

function check() {
	var city = $('input.city').val(),
		date = $('input.date').val();

	// $.ajax({
	// 	async: false,
	// 	url: "http://sou.qq.com/online/get_weather.php?callback=Weather&city=nanjing",
	// 	type: "GET",
	// 	dataType: 'jsonp',
	// 	jsonp: 'callback',
	// 	timeout: 5000,
	//    success: function (json) {//客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
	//    	if(json.actionErrors.length!=0){
	//    		alert(json.actionErrors);
	//    	}
	//    	console.info(json);
	//    }
	// });
	$('span.province').html(data[0]);
	$('span.city').html(data[1]);
	$('.today').html(data[10]);
	$('.tips').html(data[11]);

	var tr, th, td, img, arrow;

	tr = $('<tr></tr>');
	th = $('<th></th>');
	th.html(data[6]);
	tr.append(th);
	td = $('<td></td>');
	td.html(data[5]);
	tr.append(td);
	td = $('<td></td>');
	img = $('<img>');
	img.attr('src', 'weather/'+data[8]);
	td.append(img);
	arrow = $('<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>');
	td.append(arrow);
	img = $('<img>');
	img.attr('src', 'weather/'+data[9]);
	td.append(img);
	tr.append(td);
	td = $('<td></td>');
	td.html(data[7]);
	tr.append(td);
	$('.table').append(tr);

	tr = $('<tr></tr>');
	th = $('<th></th>');
	th.html(data[13]);
	tr.append(th);
	td = $('<td></td>');
	td.html(data[12]);
	tr.append(td);
	td = $('<td></td>');
	img = $('<img>');
	img.attr('src', 'weather/'+data[15]);
	td.append(img);
	arrow = $('<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>');
	td.append(arrow);
	img = $('<img>');
	img.attr('src', 'weather/'+data[16]);
	td.append(img);
	tr.append(td);
	td = $('<td></td>');
	td.html(data[14]);
	tr.append(td);
	$('.table').append(tr);

	tr = $('<tr></tr>');
	th = $('<th></th>');
	th.html(data[18]);
	tr.append(th);
	td = $('<td></td>');
	td.html(data[17]);
	tr.append(td);
	td = $('<td></td>');
	img = $('<img>');
	img.attr('src', 'weather/'+data[20]);
	td.append(img);
	arrow = $('<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>');
	td.append(arrow);
	img = $('<img>');
	img.attr('src', 'weather/'+data[21]);
	td.append(img);
	tr.append(td);
	td = $('<td></td>');
	td.html(data[19]);
	tr.append(td);
	$('.table').append(tr);
	$('.city_info').show();
	$('.goBtnWrapper').show();
}

function analyze() {
	var feedback = $('#feedback');
}
