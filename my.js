var json =     {
        "identifier": "PI-1-b7743e52-ae57-4552-9585-445195f527f6",
        "model": "STP005",
        "version": "SN16",
        "state": "finished",
        "outputs":
        [
            {
                "name": "weatherResult",
                "data":
                {
                    "string":
                    [
                        "河北",
                        "唐山",
                        "54534",
                        "54534.jpg",
                        "2016-3-8 13:46:06",
                        "-7℃/5℃",
                        "3月8日 多云",
                        "北风3-4级转微风",
                        "1.gif",
                        "1.gif",
                        "今日天气实况：气温：3℃；风向/风力：西北风 2级；湿度：14%；紫外线强度：最弱。空气质量：良。",
                        "紫外线指数：最弱，辐射弱，涂擦SPF8-12防晒护肤品。",
                        "-8℃/5℃",
                        "3月9日 多云",
                        "北风3-4级转微风",
                        "1.gif",
                        "1.gif",
                        "-7℃/6℃",
                        "3月10日 晴",
                        "西北风3-4级转微风",
                        "0.gif",
                        "0.gif",
                        "唐山地处环渤海中心地带，南滨渤海，北依燕山，交通便利，可进出性很强。背山临海的地理格局、复杂多样的地貌类型和特有的地方历史文化，造就了许多极具特色的旅游资源。自然景观品位独特，人文景观文化积淀深厚。唐山北部山区有明长城221公里，东接山海关、老龙头，西接慕田峪、八达岭，有名关险隘29处，敌楼603座，烽火台82个。水下长城、大理石长城、72券楼、监狱楼、水门、长城砖窑、养马圈、屯兵营等皆为长城沿线独秀，代表了明长城历史文化的精华。长城沿线已有清东陵、景忠山、鹫峰山、汤泉、潘家口、大黑汀、青山关、灵山、白羊峪等一系列旅游景区。清东陵始建于康熙二年，是目前我国现存规模庞大、体系完整的帝王陵墓群之一，2000年11月列为世界文化遗产。陵区埋葬着5个皇帝、15个皇后、137个妃子、4个公主。清东陵的建筑恢宏、壮观、精美，庞大的建筑群中有中国现存最大的石牌坊，最长的神路。位于迁西县境内的景忠山，以其博大精深、源远流长的佛、道、儒三教合一的人文和自然景观闻名于世，曾被清康熙皇帝御题“灵山秀色”、“天下名山”。唐山拥有山、海、林、岛等多种独具特色的自然景观,境内有国家级文物保护单位2处，省级重点文物保护单位40处。唐山有196.5公里海岸线，海滨风光秀丽，尤其是菩提岛、月坨岛、打网岗三个近海岛屿，正在开发建设以自然生态观光和休闲度假为主要内容的新型旅游区，成为华北地区特色旅游靓点。"
                    ]
                }
            },
            {
                "name": "ticketResult",
                "data":
		{
		  "targetDate": "2016-03-09",
		  "startCity": "北京",
		  "targetCity": "张家口",
		  "tickets": [
		    {
		      "trainNo": "G111",
		      "softSleeper": 358,
		      "hardSleeper": 613,
		      "hardSeat": 542,
		      "noSeat": 509
		    },
		    {
		      "trainNo": "D123",
		      "softSleeper": 524,
		      "hardSleeper": 382,
		      "hardSeat": 449,
		      "noSeat": 14
		    },
		    {
		      "trainNo": "T234",
		      "softSleeper": 481,
		      "hardSleeper": 868,
		      "hardSeat": 950,
		      "noSeat": 33
		    },
		    {
		      "trainNo": "K345",
		      "softSleeper": 579,
		      "hardSleeper": 156,
		      "hardSeat": 635,
		      "noSeat": 261
		    },
		    {
		      "trainNo": "8684",
		      "softSleeper": 273,
		      "hardSleeper": 977,
		      "hardSeat": 630,
		      "noSeat": 350
		    }
		  ]
		}
            }
        ],
        "container_name": "WJTA",
        "creation_time": "2016-03-08T05:52:53Z",
        "stopped_flow_objects_count": 0,
        "all_stopped_flow_objects_count": 0,
        "top_level": true
    } 


function findData(outputs, name) {
	var i;
	for(i in outputs) {
		if (outputs[i]['name'] === name) {
			return outputs[i]['data'];
		}
	}
}

function check() {
	var city = $('input.city').val(),
		date = $('.date input').val(),
		data, tickets;

	// $.ajax({
	// 	async: false,
	// 	url: "http://sou.qq.com/online/get_weather.php?callback=Weather&city=nanjing",
	// 	type: "GET",
	// 	dataType: 'json',
	// 	data: {
	// 		city: city,
	// 		date: date,
	// 	}
	// 	timeout: 5000,
	// 	success: function (json) {//客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
	// 	   	if(json.actionErrors.length!=0){
	// 	   		alert(json.actionErrors);
	// 	   	}
	//    		data = findData(json['outputs'], 'output1')['string'];
	//    		showWeather();
	// 	},
	// 	error: function (json) {//客户端jquery预先定义好的callback函数,成功获取跨域服务器上的json数据后,会动态执行这个callback函数
	// 	   	alert('无法查到您所输入的城市，请修改或更正城市名称');
	// 	}
	// });

	data = findData(json['outputs'], 'weatherResult')['string'];
	data.splice(10, 2);
	tickets = findData(json['outputs'], 'ticketResult')['tickets'];
	showWeather(data);
	showTickets(tickets);

	$('.city_info').show();
	$('.goBtnWrapper').show();

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


