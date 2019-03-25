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
		xuanrancar();

	} else {
		//空 为 未登录状态
		$('.top_lr2').css('display', 'none');
		$('.top_lr').css('display', 'block');
		$('#logtel').html('<span>暂无等级会员</span>')
		alert('请登录');
	}

	//点击退出时 显示注册登录 隐藏登录面 并 清空cookie
	$('#loginOut').click(function() {
		$('.top_lr2').css('display', 'none');
		$('.top_lr').css('display', 'block');
		//清空cookie
		cookie.remove('tel');
		cookie.remove('lasttime');
	})

	function xuanrancar() {
		//渲染购物车
		$.ajax({
			'type': 'post',
			'url': '../api/buycar.php',
			'async': true,
			'data': {
				'm': 'getinf',
				'tel': $nowtel
			},
			'success': function(str) {
				$data = $.parseJSON(str);
//				console.log($data);
				$carres = $data.map(function(item) {
					$sameshopres = '';
					//渲染店铺名称
					$sameshopres += `<div class="shopname">
						<input type="checkbox" class="shopnamebtn" value="" />
						<span>${item.shopname}</span>
					</div>`;
					//拼接同意店铺的商品
					$lres = item.list.map(function(item1) {
						return `<div data-id="${item1[0].goodid}" class="goodcontent">
						<div class="goodcheckbox">
							<input class="chosebtn" type="checkbox" name="chosebtn" value=""/>	
						</div>
						<div class="goodimg">
							<img src="${item1[0].imgsrc}"/>
						</div>
						<p class="goodtitle">
							${item1[0].title}
						</p>
						<div class="goodnum">
							<span class="cut1">-</span>
							<input type="text" class="goodnewnum" value="${item1[0].carnum}" />
							<span class="add1">+</span>
						</div>
						<p class="goodprice">
							￥${item1[0].price}
						</p>
						<div class="goodsale">
							<span>${item1[0].limitsale}</span>
						</div>
						<div class="goodtotal">￥${(item1[0].price*item1[0].carnum).toFixed(2)}</div>
					</div>`;
					});
					//接入店铺抬头
					$sameshopres += $lres;
					return $sameshopres;
				}).join('');
				$('.everyshop').html($carres);

				//数量选中时 动画效果
				$('.goodnewnum').focus(function() {
					$(this).css('border-color', '#E4393C');
				});
				//数量失去焦点时 动画效果  判断是否为数字 是否为整数
				$('.goodnewnum').blur(function() {
					$(this).css('border-color', '#E1E1E1');
					$newq = $(this).val();
					if(isNaN($newq)) {
						//非数字时,弹窗提示
						alert('数量应为数字');
						$(this).val(1);
					} else {
						//有小数时取整
						$(this).val(Math.floor($(this).val()));
						$newq = $(this).val();
						//数字时,判断是否超过临界值
						if($newq < 1) {
							//如果小于最小值
							alert('数量不能小于1');
							$(this).val(1);
						}
					}
					$needid=$(this).parents('.goodcontent').attr('data-id');
					updateData($nowtel,$(this).val(),$needid);
					xuanrancar();

				});

				//点击加/减时,更新数量
				$('.cut1').click(function() {
					//获取框内原有数量
					$nowq = $(this).next().val();
					if($nowq == 1) {
						//如果原有数量为1时,不能再减
						alert('已达最少');
					} else {
						$nowq--;
						$(this).next().val($nowq);
					}
//					console.log($(this).parents('.goodcontent'));
					$needid=$(this).parents('.goodcontent').attr('data-id');
					updateData($nowtel,$nowq,$needid);
					xuanrancar();
				});
				$('.add1').click(function() {
					//获取框内原有数量
					$nowq = $(this).prev().val();
					$nowq++;
					$(this).prev().val($nowq);
					$needid=$(this).parents('.goodcontent').attr('data-id');
					updateData($nowtel,$nowq,$needid);
					xuanrancar();
				});
				
				//点击勾选按钮时 更新foot
				$('.chosebtn').click(function(){
					choseToTotal();
					$ok=0;
					//循环判断多少被勾选 
					for($i=0;$i<$('.chosebtn').length;$i++){
						if($('.chosebtn').eq($i).prop('checked')){
							//如果被勾选 就加1
							$ok++;
						}
					}
					//判断是否全部被勾选 是则点亮全选 否则取消全选
					if($ok==$('.chosebtn').length){
						$('.allbtn').eq(0).prop('checked',true);
						$('.allbtn').eq(1).prop('checked',true);
					}else{
						$('.allbtn').eq(0).prop('checked',false);
					$('.allbtn').eq(1).prop('checked',false);
					}
					
				});
				//判断是否被勾选 勾选的加上总件数/总价
				function choseToTotal(){
					//循环所有.chosebtn判断是否被勾选
					$totalmoney=0;
					$totalnum=0;
					for($i=0;$i<$('.chosebtn').length;$i++){
						if($('.chosebtn').eq($i).prop('checked')){
							//如果被勾选 就读取goodnewnum的内容 和 goodtotal的内容(记得去掉$)
							$totalnum=$totalnum*1+$('.chosebtn').eq($i).parent().siblings('.goodnum').children().eq(1).val()*1;
							$totalmoney=$totalmoney*1+$('.chosebtn').eq($i).parent().siblings('.goodtotal').html().slice(1)*1
						}
					}
					$totalmoney=($totalmoney).toFixed(2);
					$('#quantityTotal').html($totalnum);
					$('#allTotal').html('￥'+$totalmoney);
				}
				
				//点击全选时 全部选中/全部不选;重新计算总件数&总价
				//开关初始化
				$('.allbtn').click(function(){
					//使两个全选同步状态
					$('.allbtn').eq(0).prop('checked',$(this).prop('checked'));
					$('.allbtn').eq(1).prop('checked',$(this).prop('checked'));
					//判断该开关状态
					if($(this).prop('checked')){
						//要全选时 使所有打钩
						$('.chosebtn').prop('checked',true);
						//计算价格
						choseToTotal();
					}else{
						//取消全选时
						$('.chosebtn').prop('checked',false);
						choseToTotal()
					}
				})
				//点击删除时 删除勾选 更新数据库 重新渲染页面
				$('#delbtn').click(function(){
					//循环所有行 判断是否被勾选 (记得从后面开始循环)
					$long=$('.chosebtn').length-1;//删除前长度
					for($i=$long;$i>=0;$i--){
						//从后往前循环
						if($('.chosebtn').eq($i).prop('checked')){
							//如果被勾选 就删除 数据库删除该用户和对应id的数据
							$gid=$('.chosebtn').eq($i).parent().parent().attr('data-id');
							$.ajax({
								type:"post",
								url:"../api/buycar.php",
								async:true,
								data:{
									'm':'del',
									'gid':$gid,
									'tel':$nowtel
								},
								success:function(enen){
									if(enen){
										alert('删除成功');
									}
								}
							});
						}
					}
					//重新渲染
					xuanrancar();
				})
			}
		});
	}
	
	function updateData($tel,$val,$needid){
		$.ajax({
					type:"post",
					url:"../api/buycar.php",
					async:true,
					data:{
						'm':'update',
						'gid':$needid,
						'tel':$tel,
						'updatenum':$val
					},
					success:function(str){
//						console.log(str);
					}
				});
	}
})