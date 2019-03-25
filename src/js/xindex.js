$(function() {
	
	//点击定位城市 更新定位
	$('.top_dwcon').on('click','li',function(){
		$('.top_city').html($(this).html());
	})
	//判断cookie中是否有登录记录：有就渲染 没有就请登录
	$nowtel=getCookie('tel');
	if($nowtel){
		//非空 为登录状态 渲染
		$('.top_lr2').css('display','block');
		$('.top_lr').css('display','none');
		//登录用户、时间渲染
		$('#logtel').html($nowtel+$('#logtel').html());
		$lasttime=getCookie('lasttime');
		//获取上次登录时间后，化为年月日时分秒showTime
		$lasttimeshow=showTime($lasttime);
		$('.lasttime').html($lasttimeshow);
	}else{
		//空 为 未登录状态
		$('.top_lr2').css('display','none');
		$('.top_lr').css('display','block');
		$('#logtel').html('<span>暂无等级会员</span>')
	}
	
	
	//点击退出时 显示注册登录 隐藏登录面 并 清空cookie
	$('#loginOut').click(function(){
		$('.top_lr2').css('display','none');
		$('.top_lr').css('display','block');
		//清空cookie
		cookie.remove('tel');
		cookie.remove('lasttime');
	})
	
	//轮播图
	var s1 = new Swiper('.swiper-container', {
		autoplay: { //自动轮播+延时两秒
			delay: 2000,
			disableOnInteraction: false
		},
		loop: true, //无缝回路轮播
		speed: 500, //切换速度
		navigation: { //上下按钮
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		pagination: { //焦点跟随
			el: '.swiper-pagination',
			clickable: true, //点击焦点跳到指定图片
			renderBullet: function(index, className) {
				return '<span class="' + className + '">' + '</span>'; //生成焦点数字
			}
		},
		mousewheel: true //滚动滑轮可以切图

	});

	var oBox = document.getElementById('swiper-container');

	oBox.onmouseover = function() { //鼠标经过停止
		s1.autoplay.stop();
	}

	oBox.onmouseout = function() { //鼠标经过离开
		s1.autoplay.start();
	}

	//秒杀倒计时
	//获取倒计时的节点并渲染
	var djs = document.getElementsByClassName('djs')[0];
	setInterval(function() {
		djs.innerHTML = daoJiShi();
	}, 1000);

	//具体过程
	function daoJiShi() {
		//获取现在时间的
		var now = new Date();
		//获取年月日时
		var year = now.getFullYear();
		var month = now.getMonth() + 1;
		var day = now.getDate();
		var hour = now.getHours();

		//设置场次时间 央广购物的场次为9。 12. 16。 20.
		var hour_num; //场次开始的  时刻
		if(hour >= 9 && hour < 12) {
			hour_num = 9;

		} else if(hour >= 12 & hour < 16) {
			hour_num = 12;
		} else if(hour >= 16 && hour < 20) {
			hour_num = 16;
		} else {
			hour_num = 20;
		}
		//设置场次结束时刻
		var end_hour;
		if(hour_num == 20) {
			//第二天的9点
			end_hour = 9;
		} else if(hour_num == 9) {
			end_hour = hour_num + 3;
		} else {
			end_hour = hour_num + 4;
		}

		//拼接年月日
		if(end_hour == 9) {
			//夜间抢购 到第二天
			var endres = year + '-' + month + '-' + (day - 0 + 1) + ' ';
		} else {
			var endres = year + '-' + month + '-' + day + ' ';
		}
		endres += end_hour + ':00:00'; //2019-03-16 12:00:00
		//得到结束的时间点
		var endTime = new Date(endres);
		//结束时间-当前时间  毫秒数→转化为秒数
		var time = parseInt((endTime - now) / 1000);
		//时分秒并补0
		var showHour = bu0(parseInt(time / 60 / 60));
		var showMin = bu0(parseInt(time / 60) % 60);
		var showSec = bu0(time % 60);
		return `<span>${showHour}</span>:
					<span>${showMin}</span>:
					<span>${showSec}</span>`;
	}
	//补0函数
	function bu0(num) {
		if(num < 10) {
			return '0' + num;
		} else {
			return '' + num;
		}
	}
	//秒杀商品列表:轮播:每次运动6个图 原网只有6个图,左右按钮可以点击切换
	//ul的宽度：图片的宽度*图片个数
	var wNum = $('#movelist li').size() * $('#movelist li').eq(0).outerWidth();
	$('#movelist').css('width', wNum);
	var sciW = $('#movelist li').eq(0).outerWidth() * 6; //运动距离

	//定时器，每次运动6图
	var sctimer = null;
	clearInterval(sctimer);
	sctimer = setInterval(scnext, 5000); //间隔时间

	function scnext() {
		$('#movelist').stop().animate({
			'left': -sciW
		}, 2000, function() {
			//出去的图片，剪切放到末尾
			$('#movelist li:lt(6)').insertAfter($('#movelist li:last'));
			//ul归位
			$('#movelist').css('left', 0);
		});
	}

	function scprev() {
		//先剪切最后的6图插入到ul首位
		$('#movelist li:gt(5)').insertBefore($('#movelist li:first'));
		//预留6个图位置
		$('#movelist').css('left', -sciW);
		//挪到可视区
		$('#movelist').stop().animate({
			'left': 0
		}, 2000);
	}

	//左右按钮可以点击切换
	$('.seckill_c:eq(0)').hover(function() {
		clearInterval(sctimer);
	}, function() {
		clearInterval(sctimer);
		sctimer = setInterval(scnext, 2000); //间隔2秒切一个图
	});

	//点击切换下一页：6张图
	$('.next:eq(0)').click(function() {
		scnext();
	});
	$('.prev:eq(0)').click(function() {
		scprev();
	});

	//获取首页商品列表数据
	var classifycon = document.getElementsByClassName('classifycon')[0];
	//首页商品列表数据
	var shoplist = [{
		slid: 1,
		classify: ['休闲食品', '即食罐头'],
		imglist: ['img/classifyshop1 (1).jpg', 'img/classifyshop1 (2).jpg', 'img/classifyshop1 (3).jpg']
	}, {
		slid: 2,
		classify: ['水果', '水产', '精选肉类'],
		imglist: ['img/classifyshop1 (1).jpg', 'img/classifyshop1 (2).jpg', 'img/classifyshop1 (3).jpg']
	}, {
		slid: 3,
		classify: ['休闲食品', '即食罐头'],
		imglist: ['img/classifyshop1 (1).jpg', 'img/classifyshop1 (2).jpg', 'img/classifyshop1 (3).jpg']
	}, {
		slid: 4,
		classify: ['水果', '水产', '精选肉类'],
		imglist: ['img/classifyshop1 (1).jpg', 'img/classifyshop1 (2).jpg', 'img/classifyshop1 (3).jpg']
	}, {
		slid: 5,
		classify: ['休闲食品', '即食罐头'],
		imglist: ['img/classifyshop1 (1).jpg', 'img/classifyshop1 (2).jpg', 'img/classifyshop1 (3).jpg']
	}, {
		slid: 6,
		classify: ['水果', '水产', '精选肉类'],
		imglist: ['img/classifyshop1 (1).jpg', 'img/classifyshop1 (2).jpg', 'img/classifyshop1 (3).jpg']
	}, {
		slid: 7,
		classify: ['休闲食品', '即食罐头'],
		imglist: ['img/classifyshop1 (1).jpg', 'img/classifyshop1 (2).jpg', 'img/classifyshop1 (3).jpg']
	}, {
		slid: 8,
		classify: ['水果', '水产', '精选肉类'],
		imglist: ['img/classifyshop1 (1).jpg', 'img/classifyshop1 (2).jpg', 'img/classifyshop1 (3).jpg']
	}, {
		slid: 9,
		classify: ['休闲食品', '即食罐头'],
		imglist: ['img/classifyshop1 (1).jpg', 'img/classifyshop1 (2).jpg', 'img/classifyshop1 (3).jpg']
	}, {
		slid: 10,
		classify: ['水果', '水产', '精选肉类'],
		imglist: ['img/classifyshop1 (1).jpg', 'img/classifyshop1 (2).jpg', 'img/classifyshop1 (3).jpg']
	}, {
		slid: 11,
		classify: ['休闲食品', '即食罐头'],
		imglist: ['img/classifyshop1 (1).jpg', 'img/classifyshop1 (2).jpg', 'img/classifyshop1 (3).jpg']
	}, {
		slid: 12,
		classify: ['水果', '水产', '精选肉类'],
		imglist: ['img/classifyshop1 (1).jpg', 'img/classifyshop1 (2).jpg', 'img/classifyshop1 (3).jpg']
	}, {
		slid: 13,
		classify: ['休闲食品', '即食罐头'],
		imglist: ['img/classifyshop1 (1).jpg', 'img/classifyshop1 (2).jpg', 'img/classifyshop1 (3).jpg']
	}];
	//首页商品列表渲染
	var shoplistres = shoplist.map(function(item) {
		var slres = '<li data-slid="' + item.slid + '">';
		for(var i = 0; i < item.classify.length; i++) {
			slres += '<a href="html/listpage.html">' + item.classify[i] + '</a>/'
		}
		slres = slres.slice(0, -1);
		slres += '<div class="shopcon"><div class="sc_l"></div><div class="sc_r">';
		for(var j = 0; j < item.imglist.length; j++) {
			slres += '<img src="' + item.imglist[j] + '"/>';
		}
		slres += '</div></div></li>'
		return slres;
	}).join('');
	classifycon.innerHTML = shoplistres;

	//获取首页商品列表每个节点
	var sc_ls = document.getElementsByClassName('sc_l');
	//首页商品列表内容数据
	var shopcon = [{
		slid: 1,
		title: '休闲小食',
		data: ['膨化糕饼', '坚果炒货', '蜜饯炒货', '熟食肉干', '其他休闲食品']
	}, {
		slid: 1,
		title: '休闲小食',
		data: ['膨化糕饼2', '蜜饯炒货', '熟食肉干', '其他休闲食品']
	}, {
		slid: 1,
		title: '休闲小食',
		data: ['膨化糕饼3', '坚果炒货', '蜜饯炒货', '熟食肉干', '其他休闲食品']
	}, {
		slid: 2,
		title: '哈哈哈哈',
		data: ['哈哈哈哈', '坚果炒货', '蜜饯炒货', '其他休闲食品']
	},{
		slid: 2,
		title: '大笨蛋咯',
		data: ['就是陈树涛', '吃吃吃吃', '喝喝喝喝', '玩玩玩玩', '乐乐乐乐']
	},{
		slid: 3,
		title: '大笨蛋哈',
		data: ['就是陈树涛', '吃2吃吃', '喝2喝喝', '玩2玩玩', '乐2乐乐']
	},{
		slid: 4,
		title: '大笨蛋哈',
		data: ['就是陈树涛', '吃3吃吃', '喝3喝喝', '玩3玩玩', '乐3乐乐']
	}];
	
	//首页商品列表内容渲染
	for(var i = 0; i < sc_ls.length; i++) {
		
		var shopconres = shopcon.map(function(item) {
			var scres = '';
			if(item.slid == i*1 + 1) {
				var aiyowei = '<h6>' + item.title + '  ></h6><ul>';
				scres+=aiyowei;
				for(var j = 0; j < item.data.length; j++) {
					var biyowei= '<li><a href="html/listpage.html">' + item.data[j] + '</a></li>';
					scres +=biyowei;
				}
				scres += '</ul>';
				return scres;
			}
		}).join('');
		
		sc_ls[i].innerHTML = shopconres;
	};

	//其他层商品渲染
	var othergood = [{
		title: '美妆护肤',
		imgsrc:'img/otherfloor1 (1).jpg',
		good1show: '补水亮肤',
		good1con: '透现水嫩鲜肌',
		good1img: 'img/otherfloor2 (2).jpg',
		good2show: '染护养三合一',
		good2con: '开启秀发之美',
		good2img: 'img/otherfloor2 (1).jpg',
		adv1img: 'img/otherfloor3 (1).jpg',
		adv2img: 'img/otherfloor3 (2).jpg'
	}, {
		title: '服装珠宝',
		imgsrc:'img/otherfloor1 (1).jpg',
		good1show: '补水亮肤',
		good1con: '透现水嫩鲜肌',
		good1img: 'img/otherfloor2 (2).jpg',
		good2show: '染护养三合一',
		good2con: '开启秀发之美',
		good2img: 'img/otherfloor2 (1).jpg',
		adv1img: 'img/otherfloor3 (1).jpg',
		adv2img: 'img/otherfloor3 (2).jpg'
	}, {
		title: '家居家电',
		imgsrc:'img/otherfloor1 (1).jpg',
		good1show: '补水亮肤',
		good1con: '透现水嫩鲜肌',
		good1img: 'img/otherfloor2 (2).jpg',
		good2show: '染护养三合一',
		good2con: '开启秀发之美',
		good2img: 'img/otherfloor2 (1).jpg',
		adv1img: 'img/otherfloor3 (1).jpg',
		adv2img: 'img/otherfloor3 (2).jpg'
	}];

//获取其他层商品展区节点
var otherfloor = document.getElementsByClassName('otherfloor')[0];
	var othergres = othergood.map(function(item) {
		return `<div>
						<h2>${item.title}</h2>
						<div>
							<a href="html/listpage.html"><img src="${item.imgsrc}" alt="" /></a>
							<ul>
								<li>
									<a href="html/listpage.html">
										<span>${item.good1show}</span>
										<p>${item.good1con}</p>
										<img src="${item.good1img}" alt="" />
									</a>
								</li>
								<li>
									<a href="html/listpage.html">
										<span>${item.good2show}</span>
										<p>${item.good2con}</p>
										<img src="${item.good2img}" alt="" />
									</a>
								</li>
							</ul>
							<div>
								<a href="html/listpage.html"><img src="${item.adv1img}" alt="" /></a>
								<a href="html/listpage.html"><img src="${item.adv2img}" alt="" /></a>
							</div>
						</div>
					</div>`;
	}).join('');
	otherfloor.innerHTML=othergres;
	
	
	//猜你喜欢商品列表渲染
	//获取猜你喜欢列表节点
	var guesslikecon=document.getElementsByClassName('guesslikecon')[0];
	var guesslikegood=[{
		imgsrc:'img/guesslikegood2.jpg',
		content:'格林燕山栗子鸡秒杀组',
		price:'164.00'
	},{
		imgsrc:'img/guesslikegood3.jpg',
		content:'PASSEZLA美白祛斑红毯霜',
		price:'359.00'
	},{
		imgsrc:'img/guesslikegood4.jpg',
		content:'陕西洛川苹果美味分享组',
		price:'179.00'
	},{
		imgsrc:'img/guesslikegood5.jpg',
		content:'阿一传人富贵团员佛跳墙臻品组',
		price:'748.00'
	},{
		imgsrc:'img/guesslikegood1.jpg',
		content:'孚日毛巾家庭超值组',
		price:'199.00'
	}];
	
	var guesslikeres=guesslikegood.map(function(item){
		return`<li>
						<a href="html/listpage.html">
						<img src="${item.imgsrc}"/>
						<p>${item.content}</p>
						<span>￥${item.price}</span>
						</a>
					</li>`;
	}).join('');
	//9行渲染
	var glikeres='';
	for(var k=0;k<9;k++){
		glikeres+=guesslikeres;
	}
	guesslikecon.innerHTML=glikeres;
	
	
	//侧栏
	function celan(id,cont) {
	var celan = document.getElementById(id);
	var close = celan.getElementsByClassName('clclose')[0];
	var clcon = celan.getElementsByClassName('clcon')[0];
	clcon.innerHTML+=cont;
	celan.onmouseover = function() {
		startMove(celan, {
			right:0
		});
	}
	celan.onmouseout = function() {
		startMove(celan, {
			right:-202
		});
	}
	close.onclick = function() {
			celan.style.display = 'none';
		}
	}
	
	
	
	
	
	
})