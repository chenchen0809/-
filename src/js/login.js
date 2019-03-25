$(function() {
	//手机号、密码、验证码开关
	$telisok = false;
	$pswisok = false;
	$codeisok = false;
	//产生四位数随机验证码ranNum() 并渲染到页面
	$ranCode = ranNum();
	$('.logincodeOut').html($ranCode);

	//看不清楚 点击时 更新验证码
	$('.recode').click(function() {
			$ranCode = ranNum();
			$('.logincodeOut').html($ranCode);
		})
		//点击登录时，验证
	$('#loginBtn').click(function() {
		//每次点击重置开关
		$telisok = false;
		$pswisok = false;
		$codeisok = false;

		//获取输入的用户信息
		$tel = $('#logintel').val().trim();
		$psw = $('#loginpsw').val().trim();
		$code = $('#logincodeIn').val().trim();
		//判断非空
		if($tel && $psw && $code) {
			$.ajax({
				type: "post",
				url: "../api/logcheck.php",
				async: true,
				data: {
					tel: $tel,
					userpsw: $psw
				},
				success: function(str) {
					if(str == 1) {
						//账号密码验证成功时 判断验证码
						if($ranCode.toLowerCase() == $code.toLowerCase()) {
							$('.item:eq(2)>p').css('display', 'none');
							//验证码正确时，判断是否七天登录
							if($('#day7').prop('checked')) {
								//勾选时 设置cookie 7天免登陆
								$lasttime = new Date();
								$endtime = $lasttime.getDate() + 7;
								//7天后失效的cookie,并存入本次登录时间
								cookie.set('tel', $tel, {
									expires: $endtime,
									path: '/'
								});
								cookie.set('lasttime', $lasttime, {
									expires: $endtime,
									path: '/'
								});
								location.href = '../index.html';
							}else{
								$lasttime = new Date();
								$endtime = $lasttime.getDate() + 1;
								//1天后失效的cookie,并存入本次登录时间
								cookie.set('tel', $tel, {
									expires: $endtime,
									path: '/'
								});
								cookie.set('lasttime', $lasttime, {
									expires: $endtime,
									path: '/'
								});
								location.href = '../index.html';
							}
							//跳转首页
						} else {
							//验证码错误 提示 并 重置验证码
							$('.item:eq(2)>p').css('display', 'block');
							$ranCode = ranNum();
							$('.logincodeOut').html($ranCode);
						}

					} else {
						//账号密码验证失败时弹窗
						layui.use(['layer'], function() {
							var $ = layui.jquery,
								layer = layui.layer;
							layer.open({
								title: '提示信息',
								content: '用户信息错误或者账号已关闭'
							});
						});
					}
				}
			});
		} else {
			//其中有一项空,显示提示
			if(!$tel) {
				$('.item:eq(0)>p').css('display', 'block');
			} else {
				$('.item:eq(0)>p').css('display', 'none');
			}
			if(!$psw) {
				$('.item:eq(1)>p').css('display', 'block');
			} else {
				$('.item:eq(1)>p').css('display', 'none');
			}
			if(!$code) {
				$('.item:eq(2)>p').css('display', 'block');
			} else {
				$('.item:eq(2)>p').css('display', 'none');
			}
		}

	})
})