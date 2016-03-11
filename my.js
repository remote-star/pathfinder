function findData(outputs, name) {
	var i;
	for(i in outputs) {
		if (outputs[i]['name'] === name) {
			return outputs[i]['data'];
		}
	}
}

function check() {
	var city = $('#cityTo').val(),
		cityFrom = $('#cityFrom').val(),
		date = $('.date input').val(),
		data, tickets, full;

	$.ajax({
		async: false,
		url: "/bpm/processes?container=TR&model=STP_queryInfo&version=SN17",
		type: "POST",
		dataType: 'json',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		data: JSON.stringify({
			"inputs": [
				{
					"name": "paras",
					"data": {
						"targetDate": date,
						"startCity": cityFrom,
						"targetCity": city
					}
				}
			]
		}),
		timeout: 5000,
		success: function (json) {//客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
		   	// if(json.actionErrors.length!=0){
		   	// 	alert(json.actionErrors);
		   	// }
			data = findData(json['outputs'], 'weatherResult')['string'];
			data.splice(10, 2);
			tickets = findData(json['outputs'], 'ticketResult')['tickets']['item'];
			full = findData(json['outputs'], 'o_isfull');

			showWeather(data);
			showTickets(tickets);
			showGo(full);

			$('.city_info').show();
			$('.goBtnWrapper').show();

			changeStyle()
		},
		error: function (json) {//客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
		   	alert('无法查到您所输入的城市，请修改或更正城市名称');
		}
	});


}

function showWeather(data) {
	var tr, th, td, img, arrow,
		date = $('.date input').val(),
		dif = daysBetween(curDateTime(), date),
		i = 6;

	$('span.province').html(data[0]);
	$('span.city').html(data[1]);
	$('.tips').html(data[20]);

	$('table.weather').html('');

	for ( ; dif<3 ; dif++) {
		i = 6 + dif * 5;

		tr = $('<tr></tr>');
		th = $('<th></th>');
		th.html(data[i]);
		tr.append(th);
		td = $('<td></td>');
		td.html(data[i-1]);
		tr.append(td);
		td = $('<td></td>');
		img = $('<img>');
		img.attr('src', 'weather/'+data[i+2]);
		td.append(img);
		arrow = $('<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>');
		td.append(arrow);
		img = $('<img>');
		img.attr('src', 'weather/'+data[i+3]);
		td.append(img);
		tr.append(td);
		td = $('<td></td>');
		td.html(data[i+1]);
		tr.append(td);
		$('table.weather').append(tr);
	}
}

function showTickets(tickets) {
	var tr, thead, th, td, i, ticket;

	$('table.tickets').html('');

	thead = $('<thead></thead>');
	tr = $('<tr></tr>');
	th = $('<th></th>');
	th.html("车次");
	tr.append(th);
	th = $('<th></th>');
	th.html("软卧");
	tr.append(th);
	th = $('<th></th>');
	th.html("硬卧");
	tr.append(th);
	th = $('<th></th>');
	th.html("硬座");
	tr.append(th);
	th = $('<th></th>');
	th.html("无座");
	tr.append(th);
	thead.append(tr);
	$('table.tickets').append(thead);

	for (i in tickets) {
		ticket = tickets[i];

		tr = $('<tr></tr>');
		th = $('<td></td>');
		th.html(ticket['trainNo']);
		tr.append(th);
		td = $('<td></td>');
		td.html(ticket['softSleeper']);
		tr.append(td);
		td = $('<td></td>');
		td.html(ticket['hardSleeper']);
		tr.append(td);
		td = $('<td></td>');
		td.html(ticket['hardSeat']);
		tr.append(td);
		td = $('<td></td>');
		td.html(ticket['noSeat']);
		tr.append(td);
		$('table.tickets').append(tr);
	}
}

function showGo(full) {
	if(full === 'Y') {
		$('#go-btn').hide();
		$('.alert').show();
	} else {
		$('#go-btn').show();
		$('.alert').hide();
	}
}

function enableGoBtn(enable) {
	if (!enable) {
		$("#go-btn").addClass("disabled");
		$("#go-btn").attr("title", "It's not suggested to have a trip on that day.");
	} else {
		$("#go-btn").removeClass("disabled");
		$("#go-btn").attr("title", "");
	}
}

function analyze() {
	var feedback = $('#feedback').val();

	// $.ajax({
	// 	async: false,
	// 	url: "http://sou.qq.com/online/get_weather.php?callback=Weather&city=nanjing",
	// 	type: "GET",
	// 	dataType: 'json',
	// 	timeout: 5000,
	// 	success: function (json) {//客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
	// 	   	if(json.actionErrors.length!=0){
	// 	   		alert(json.actionErrors);
	// 	   	}
	//    		data = findData(json['outputs'], 'output1')['string'];
	//    		showWeather();
	// 	}
	// });

	$('.modal strong').html(feedback);
	$('.modal').modal();
}



function curDateTime(){
var d = new Date();
var month = d.getMonth()+1;
var date = d.getDate();
var day = d.getDay();
var curDateTime= "2016";
if(month>9)
curDateTime = curDateTime +"-"+month;
else
curDateTime = curDateTime +"-0"+month;
if(date>9)
curDateTime = curDateTime +"-"+date;
else
curDateTime = curDateTime +"-0"+date;

return curDateTime;
}

//| 求两个时间的天数差 日期格式为 YYYY-MM-dd  
function daysBetween(DateOne,DateTwo)
{  

    var OneMonth = DateOne.substring(5,DateOne.lastIndexOf ('-'));
    var OneDay = DateOne.substring(DateOne.length,DateOne.lastIndexOf ('-')+1);
    var OneYear = DateOne.substring(0,DateOne.indexOf ('-'));

    var TwoMonth = DateTwo.substring(5,DateTwo.lastIndexOf ('-'));
    var TwoDay = DateTwo.substring(DateTwo.length,DateTwo.lastIndexOf ('-')+1);
    var TwoYear = DateTwo.substring(0,DateTwo.indexOf ('-'));

    var cha=((Date.parse(OneMonth+'/'+OneDay+'/'+OneYear)- Date.parse(TwoMonth+'/'+TwoDay+'/'+TwoYear))/86400000);  
    return Math.abs(cha);
}

function changeStyle() {
	$('.change').addClass('changed');
}
