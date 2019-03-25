$(function() {
	//接收电话号码并渲染到页面
	$tel = location.search.slice(1);
	$jmtel = $tel.slice(0, 3) + '****' + $tel.slice(7);
	$('#sendtel').html($jmtel);
	//开关设置
	$codeisok = false;
	$pswisok = false;
	//验证码渲染
	$ranCode = ranNum();
	$('#yzCodeOut2').html($ranCode + $('#yzCodeOut2').html());
	//看不清楚 点击时 更新验证码
	$('#yzCodeOut2').click(function() {
			$ranCode = ranNum();
			$('#yzCodeOut2').html($ranCode + '<a href="#">看不清楚，更换一张</a>');
		})
		//判断验证码输入是否正确
	$('#yzCodeIn2').blur(function() {
		$InCode = $('#yzCodeIn2').val();
		if($InCode.toLowerCase() == $ranCode.toLowerCase()) {
			//输入的验证码与随机验证码相同时，验证码开关打开
			$('#yzCodeIn2').css('color', '#777');
			$codeisok = true;
		} else {
			//输入的验证码与随机验证码不同时，提示并重置随机验证码
			$('.icon-uniF05C').css('display', 'block');
			$ranCode = ranNum();
			$('#yzCodeOut2').html($ranCode + '<a href="#">看不清楚，更换一张</a>');
			$('#yzCodeIn2').css('color', '#FF877F');
		}
	})

	//点击验证码输入框时重置
	$('#yzCodeIn2').focus(function() {
			//验证码开关关闭
			$codeisok = false;
			//提示消失
			$('.icon-uniF05C').css('display', 'none');
		})
		//动态码倒计时60s渲染
	$num = 60;
	$timer = setInterval(function() {
		$num--;
		$('#djs60').html($num);
		if($num < 0) {
			$('.dj60').css('display', 'none');
			$('.reget').css('display', 'inline-block');
			clearInterval($timer);
		}
	}, 1000)

	//第一次密码输入
	$('#userpsw').blur(function() {
			$psw = $('#userpsw').val().trim();
			//非空判断
			if($psw) {

			} else {
				//空时提示
				$('.pswpd').css('display', 'inline-block');
			}
		})
		//密码框再次点击时重置
	$('#userpsw').focus(function() {
			$pswisok = false;
			$('.pswpd').css('display', 'none');
		})
		//再次输入密码 验证是否一样
	$('#againpsw').blur(function() {
			$agpsw = $('#againpsw').val().trim();
			//非空判断
			if($agpsw) {
				//判断两次密码是否相同
				if($agpsw == $psw) {
					$pswisok = true;
				} else {
					//两次密码不同时
					$('.againpswpd').css('display', 'inline-block');
				}
			} else {
				//空时提示
				$('.againpswpd').css('display', 'inline-block');
			}
		})
		//二次密码框再次点击时重置
	$('#againpsw').focus(function() {
			$pswisok = false;
			$('.againpswpd').css('display', 'none');
		})
		//点击立即注册 判断两个开关是否打开
	$('#regright').click(function() {
		//判断密码和验证码开关是否都打开
		if($codeisok && $pswisok) {
			//验证均通过,把密码和手机号存入数据库
			$.ajax({
				type: "post",
				url: "../api/regcheck.php",
				async: true,
				data: {
					step: 2,
					tel: $tel,
					userpsw: $psw
				},
				success: function(str) {
					if(str) {
						//存入成功
						alert('注册成功');
						$lasttime=new Date();
						$endtime=$lasttime.getDate() + 3;
						//3天后失效的cookie,并存入本次登录时间
						cookie.set('tel',$tel,{
							expires:$endtime,
							path:'/'
						});
						cookie.set('lasttime',$lasttime,{
							expires:$endtime,
							path:'/'
						});
						location.href='../index.html';
					} else {
						//存入失败
						alert('注册失败');
					}
				}
			});
		} else {
			//有开关未开，验证未通过
		}
	})
})