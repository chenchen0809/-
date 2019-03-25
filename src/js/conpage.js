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

	//详情页初始化
	//获取地址上的商品id
	$needid = location.search.slice(1);
	$bignum=0;
	//通过ajax获取数据库中该id的商品信息
	$.ajax({
			'type': 'post',
			'url': "../api/goodlist.php",
			'async': true,
			'data': {
				'm': 'one',
				'gid': $needid
			},
			'success': function(str) {
				//字符串化为json对象
				$data = $.parseJSON(str)[0];
				//渲染页面
				$('.navGname').html($data.title);

				$imgarr = [$data.imgsrc, $data.imgsrc, $data.imgsrc, $data.imgsrc, $data.imgsrc];
				//渲染数据到fa节点
				$hahares = $imgarr.map(function(item) {
					return `<li>
						<div class="small-img">
							<img src="${item}" />
						</div>
					</li>`;
				}).join('');

				$('.animation03').html($hahares);

				//放大镜插件使用：先渲染再调用插件
				var magnifierConfig = {
					magnifier: "#magnifier1", //最外层的大容器
					width: 360, //承载容器宽
					height: 360, //承载容器高
					moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
					zoom: 5 //缩放比例
				};

				var _magnifier = magnifier(magnifierConfig);
				
				//渲染其他具体内容
				$('.detail_name h1').html($data.title);
				$('.detail_name strong').html($data.content);
				$('.detail_price strong').html('￥'+$data.price);
				if($data.before){
					$('.beforepr').html('<del>原价：'+$data.before+'</del>');
				}else{
					$('.beforepr').css('display','none');
				}
				if($data.ziying=='自营'){
					$('.detail_service dd').html('由 <b>央广购物</b> 发货，并提供售后服务');
				}else{
					$('.detail_service dd').html('非自营 由 <b> '+$data.ziying+' </b>发货，并提供售后服务');
					
				}
				$('.detail_key dd>span').html('(库存 '+$data.remain+')');
				$bignum=$data.remain*1;
				if($data.remain==0){
					$('.quantity input').val(0);
				}
			}
		});
		
		//点击加/减时,更新数量,数量不能大于库存$bignum
		$('.cutbtn').click(function(){
			//获取框内原有数量
			$nowq=$('.quantity input').val();
			if($nowq==1){
				//如果原有数量为1时,不能再减
				alert('已达最少');
			}else{
				$nowq--;
				$('.quantity input').val($nowq);
			}
		});
		$('.addbtn').click(function(){
			//获取框内原有数量
			$nowq=$('.quantity input').val();
			if($nowq>=$bignum){
				//如果数量大于库存时,不能再加
				alert('已达最多');
			}else{
				$nowq++;
				$('.quantity input').val($nowq);
			}
		});
		//数量失去焦点的时候 判断是否为数字 是否为整数 是否大于库存
		$('.quantity input').blur(function(){
			$newq=$('.quantity input').val();
			if(isNaN($newq)){
				//非数字时,弹窗提示
				alert('数量应为数字');
				$('.quantity input').val(1);
			}else{
				//有小数时取整
				$('.quantity input').val(Math.floor($('.quantity input').val()));
				$newq=$('.quantity input').val();
				
				//数字时,判断是否超过临界值
				if($newq<1){
					//如果小于最小值
					alert('数量不能小于1');
				}else if($newq>$bignum){
					//如果大于库存
					alert('数量不能大于库存');
				}
			}
		})
		
		//点击加入购物车时 更新数据库信息
		$('.addbuy').click(function(){
			//获取用户手机号码
			$nowtel = getCookie('tel');
			//判断是否登录
			if($nowtel){
				//已登录时 获取数量 
				$newq=$('.quantity input').val();
				//利用ajax()更新数据库
				$.ajax({
					type:"post",
					url:"../api/buycar.php",
					async:true,
					data:{
						'm':'add',
						'gid':$needid,
						'tel':$nowtel,
						'addnum':$newq
					},
					success:function(str){
						if(str){
							alert('添加成功');
						}else{
							alert('添加失败');
						}
					}
				});
			}else{
				//未登录时 弹窗告诉
				alert('小可爱还没有登录哦!');
			}
			
			
		});
		
		
		
		

})