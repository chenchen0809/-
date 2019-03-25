$(function() {
	//手机验证、验证码开关
	$telisok = false;
	$codeisok = false;
	//手机号码输入框失去焦点时拿到手机号传给后端ajax验证
	$('#regtel').blur(function() {
			$tel = $('#regtel').val().trim();
			//非空判断
			if($tel) {
				//正则判断 11位手机号码 以1开头
				$telreg = /^1\d{10}$/;
				if($telreg.test($tel)) {
					//正则判断正确
					$.ajax({
						type: "post",
						url: "../api/regcheck.php",
						async: true,
						data: {
							step: 1,
							tel: $tel
						},
						success: function(str) {
							if(str == 1) {
								//用户名可用,手机验证开关打开
								$('#regtel').css('color','#777');
								$telisok = true;
							} else {
								//用户名不可用
								$('.telpd').css('display', 'block');
								$('.telpd').html($('.telpd').html() + '手机号已存在');
								$('#regtel').css('color','#FF877F');
							}
						}
					});
				} else {
					//正则判断错误  提示
					$('.telpd').css('display', 'block');
					$('.telpd').html($('.telpd').html() + '请输入正确的手机号');
				}
			} else {
				//空时候 提示
				$('.telpd').css('display', 'block');
				$('.telpd').html($('.telpd').html() + '手机号不能为空');
			}
		})
		//手机号码输入框聚焦时重置
	$('#regtel').focus(function() {
			//确认 手机验证开关关闭
			telisok = false;
			//重新点击输入框时 清空提示
			$('.telpd').css('display', 'none');
			$('.telpd').html('<i class="iconfont icon-exclamation-circle"></i>');
		})
		//产生四位数随机验证码ranNum() 并渲染到页面
	$ranCode = ranNum();
	$('#yzCodeOut').html($ranCode + $('#yzCodeOut').html());

	//看不清楚 点击时 更新验证码
	$('#yzCodeOut').click(function() {
			$ranCode = ranNum();
			$('#yzCodeOut').html($ranCode + '<a href="#">看不清楚，更换一张</a>');
		})
		//判断验证码输入是否正确
	$('#yzCodeIn').blur(function() {
			$InCode = $('#yzCodeIn').val();
			if($InCode.toLowerCase() == $ranCode.toLowerCase()) {
				//输入的验证码与随机验证码相同时，验证码开关打开
				$('#yzCodeIn').css('color','#777');
				$codeisok = true;
			} else {
				//输入的验证码与随机验证码不同时，提示并重置随机验证码
				$('.icon-uniF05C').css('display', 'block');
				$ranCode = ranNum();
				$('#yzCodeOut').html($ranCode + '<a href="#">看不清楚，更换一张</a>');
				$('#yzCodeIn').css('color','#FF877F');
				
			}
		})
	//点击验证码输入框时重置
	$('#yzCodeIn').focus(function() {
		//验证码开关关闭
		$codeisok = false;
		//提示消失
		$('.icon-uniF05C').css('display', 'none');
	})
	
	//点击下一步，判断是否可以进行，若可以手机号码通过location.href传给reg2.html
	$('#regNextBtn').click(function(){
		//判断手机号和验证码开关是否都打开
		if($codeisok&&$telisok){
			console.log('wakkaa');
			//验证均通过
			if($('#agreeXY').prop('checked')){
				//已阅读并同意服务协议
				$('.agreepd').css('display', 'none');
				//跳转到注册步骤2 并传送tel
				location.href='reg2.html?'+$tel;
			}else{
				//未勾选同意时 提示
				$('.agreepd').css('display', 'block');
			}
		}else{
			//有开关未开，验证未通过
		}
	})
})