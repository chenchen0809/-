$(function() {

	//点击定位城市 更新定位
	$('.top_dwcon').on('click', 'li', function() {
			$('.top_city').html($(this).html());
		})
		//判断cookie中是否有登录记录：有就渲染 没有就请登录
	$nowtel = getCookie('tel');
	if($nowtel) {
		//非空 为登录状态 渲染
		$('.top_lr2').css('display', 'block');
		$('.top_lr').css('display', 'none');
		//登录用户、时间渲染
		$('#logtel').html($nowtel + $('#logtel').html());
		$lasttime = getCookie('lasttime');
		//获取上次登录时间后，化为年月日时分秒showTime
		$lasttimeshow = showTime($lasttime);
		$('.lasttime').html($lasttimeshow);
	} else {
		//空 为 未登录状态
		$('.top_lr2').css('display', 'none');
		$('.top_lr').css('display', 'block');
		$('#logtel').html('<span>暂无等级会员</span>')
	}

	//点击退出时 显示注册登录 隐藏登录面 并 清空cookie
	$('#loginOut').click(function() {
		$('.top_lr2').css('display', 'none');
		$('.top_lr').css('display', 'block');
		//清空cookie
		cookie.remove('tel');
		cookie.remove('lasttime');
	})

	//获取首页商品列表数据
	var classifycon = document.getElementsByClassName('classifycon')[0];
	//首页商品列表数据
	var shoplist = [{
		slid: 1,
		classify: ['休闲食品', '即食罐头'],
		imglist: ['../img/classifyshop1 (1).jpg', '../img/classifyshop1 (2).jpg', '../img/classifyshop1 (3).jpg']
	}, {
		slid: 2,
		classify: ['水果', '水产', '精选肉类'],
		imglist: ['../img/classifyshop1 (1).jpg', '../img/classifyshop1 (2).jpg', '../img/classifyshop1 (3).jpg']
	}, {
		slid: 3,
		classify: ['休闲食品', '即食罐头'],
		imglist: ['../img/classifyshop1 (1).jpg', '../img/classifyshop1 (2).jpg', '../img/classifyshop1 (3).jpg']
	}, {
		slid: 4,
		classify: ['水果', '水产', '精选肉类'],
		imglist: ['../img/classifyshop1 (1).jpg', '../img/classifyshop1 (2).jpg', '../img/classifyshop1 (3).jpg']
	}, {
		slid: 5,
		classify: ['休闲食品', '即食罐头'],
		imglist: ['../img/classifyshop1 (1).jpg', '../img/classifyshop1 (2).jpg', '../img/classifyshop1 (3).jpg']
	}, {
		slid: 6,
		classify: ['水果', '水产', '精选肉类'],
		imglist: ['../img/classifyshop1 (1).jpg', '../img/classifyshop1 (2).jpg', '../img/classifyshop1 (3).jpg']
	}, {
		slid: 7,
		classify: ['休闲食品', '即食罐头'],
		imglist: ['../img/classifyshop1 (1).jpg', '../img/classifyshop1 (2).jpg', '../img/classifyshop1 (3).jpg']
	}, {
		slid: 8,
		classify: ['水果', '水产', '精选肉类'],
		imglist: ['../img/classifyshop1 (1).jpg', '../img/classifyshop1 (2).jpg', '../img/classifyshop1 (3).jpg']
	}, {
		slid: 9,
		classify: ['休闲食品', '即食罐头'],
		imglist: ['../img/classifyshop1 (1).jpg', '../img/classifyshop1 (2).jpg', '../img/classifyshop1 (3).jpg']
	}, {
		slid: 10,
		classify: ['水果', '水产', '精选肉类'],
		imglist: ['../img/classifyshop1 (1).jpg', '../img/classifyshop1 (2).jpg', '../img/classifyshop1 (3).jpg']
	}, {
		slid: 11,
		classify: ['休闲食品', '即食罐头'],
		imglist: ['../img/classifyshop1 (1).jpg', '../img/classifyshop1 (2).jpg', '../img/classifyshop1 (3).jpg']
	}, {
		slid: 12,
		classify: ['水果', '水产', '精选肉类'],
		imglist: ['../img/classifyshop1 (1).jpg', '../img/classifyshop1 (2).jpg', '../img/classifyshop1 (3).jpg']
	}, {
		slid: 13,
		classify: ['休闲食品', '即食罐头'],
		imglist: ['../img/classifyshop1 (1).jpg', '../img/classifyshop1 (2).jpg', '../img/classifyshop1 (3).jpg']
	}];
	//首页商品列表渲染
	var shoplistres = shoplist.map(function(item) {
		var slres = '<li data-slid="' + item.slid + '">';
		for(var i = 0; i < item.classify.length; i++) {
			slres += '<a href="#">' + item.classify[i] + '</a>/'
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
	}, {
		slid: 2,
		title: '大笨蛋咯',
		data: ['就是陈树涛', '吃吃吃吃', '喝喝喝喝', '玩玩玩玩', '乐乐乐乐']
	}, {
		slid: 3,
		title: '大笨蛋哈',
		data: ['就是陈树涛', '吃2吃吃', '喝2喝喝', '玩2玩玩', '乐2乐乐']
	}, {
		slid: 4,
		title: '大笨蛋哈',
		data: ['就是陈树涛', '吃3吃吃', '喝3喝喝', '玩3玩玩', '乐3乐乐']
	}];

	//首页商品列表内容渲染
	for(var i = 0; i < sc_ls.length; i++) {

		var shopconres = shopcon.map(function(item) {
			var scres = '';
			if(item.slid == i * 1 + 1) {
				var aiyowei = '<h6>' + item.title + '  ></h6><ul>';
				scres += aiyowei;
				for(var j = 0; j < item.data.length; j++) {
					var biyowei = '<li><a href="#">' + item.data[j] + '</a></li>';
					scres += biyowei;
				}
				scres += '</ul>';
				return scres;
			}
		}).join('');

		sc_ls[i].innerHTML = shopconres;
	};

	//划过所有商品分类出现
	$('.classifylist').hover(function() {
		$('.classifycon').show();
	}, function() {
		$('.classifycon').hide();
	});

	//划过食品饮料列表菜单
	$('.foodul').hover(function() {
		$('.foodul>ul').show();
		$('.foodul>a').css('border', '1px solid #F30213').css('border-bottom', '1px solid #fff');
		$('.icon_fjt').css('background-position', '4px -45px');
	}, function() {
		$('.foodul>ul').hide();
		$('.foodul>a').css('border', '1px solid #E6E6E6');
		$('.icon_fjt').css('background-position', '4px 7px');
	});

	//点击排序列表时样式
	$('.XDarray').on('click', 'a', function() {
		$('.XDarray a').removeClass('arrayactive');
		$(this).addClass('arrayactive');
	})

	//吸顶选项
	//获取吸顶选项 对文档顶部的距离
	$XDTop = $('#XDchose').offset().top;
	$(window).scroll(function() {
		$scrollTop = $(window).scrollTop();
		$dw = $(document).width()
		if($scrollTop >= $XDTop) {
			$('#XDchose').addClass('XD_fix');
			$('#XDchose').css('background', '#F1F1F1');
			$('#XDchose').css('width', $dw);
		} else {
			$('#XDchose').removeClass('XD_fix')
			$('#XDchose').css('background', '#FFF');

		}
	})

	//初始化数据库,默认第一页，50条数据
	$page = 1;
	$n = 50;
	$pages='';
	xuanran($page,$n);
	//连接数据库 取出数据渲染
	function xuanran($page, $n) {
		$.ajax({
			'type': "post",
			'url': "../api/goodlist.php",
			'async': true,
			'data': {
				'm': 'all',
				'page': $page,
				'n': $n
			},
			'success': function(str) {
				//字符串化为json对象
				$data = $.parseJSON(str);
				//得到50条数据的数组
				$list = $data.list;
				//拼接数据
				$listres = $list.map(function(item) {
					$pingjie = `<li data-gid="${item.goodid}">
					<a class="goodinf" href="#">
						<img src="${item.imgsrc}" />
						<div class="goodprice">
							<span>￥${item.price}</span>`;
					if(item.limitsale) {
						$pingjie += `<span>${item.limitsale}</span>`;
					}
					$pingjie += `</div>
						<p class="goodname">
							${item.title}`;
					if(item.content) {
						$pingjie += `<i>${item.content}</i>`;
					}
					$pingjie += `</p>
						<p class="goodfinish">
							<span>
								<b>${item.finish}</b> 笔成交
							</span>
							<span>
								<b>${item.comment}</b> 条评论
							</span>
						</p>
						<p class="goodshop">
							${item.shopname}
						</p><div class="ziying">`;
					if(item.ziying) {
						$pingjie += `
							<span>${item.ziying}</span>
						`;
					}
					$pingjie += `</div>
						<div class="goodcollect">
							<span>
								<i></i>
								<b>收藏</b>
							</span>
							<span>
								<i></i>
								<b>加入购物车</b>
							</span>
						</div>
					</a>
				</li>`;
					return $pingjie;
				}).join('');
				//渲染至页面
				$('.listcontent').html($listres);
				
				//渲染分页
				//得到总页数
				$pages=$data.pages;
				$pageres=`<ul>
					<li class="tofirst"><span>首页</span></li>
					<li class="toprev"><span>上一页</span></li>`;
				for(var i=0;i<$pages;i++){
					$pageres+=`<li><span>${i+1}</span></li>`;
				}
				$pageres+=`<li class="tonext"><span>下一页</span></li>
					<li class="tolast"><span>尾页</span></li>
				</ul>`;
				//渲染至页面
				$('.listPage').html($pageres);
				$acpage=$page*1+1;
				$('.listPage li').eq($acpage).children().css('background','#fff');
				$('.listPage li').eq($acpage).children().css('color','#f30213');
				$('.listPage li').eq($acpage).children().css('border-color','#fff');
			}
		});
	}
	//点击页数时候更新页面
	$('.listPage').on('click','span',function(){
		//判断是否为数字
		if(!isNaN($(this).html())){
			//是数字的时候
			//获取需要的页码
			$page=$(this).html();
		}else{
			//不是数字的时候
			if($(this).html()=='首页'){
				$page=1;
			}else if($(this).html()=='上一页'){
				if($page==1){
					$page=1;
					alert('已经在首页');
				}else{
					$page--;
				}
			}else if($(this).html()=='下一页'){
				if($page==$pages){
					$page=$pages;
					alert('已经在最后一页');
				}else{
					$page++;
				}
			}else if($(this).html()=='尾页'){
					$page=$pages;
			}
		}
		//重新渲染
			xuanran($page,$n);
	})
	
	
	//点击某个商品跳转详情页并传入该商品id
	$('.listcontent').on('click','li',function(){
		$needid=$(this).attr('data-gid');
		location.href='conpage.html?'+$needid;
	});
	
})