

regcheck注册页面接口功能
/*
	验证手机号码是否存在
	post
		api/regcheck.php
			step : 1
			tel : 要验证的手机号
		返回
			{
				返回的信息代码 1 = 可用，0 = 不可用
			}
	*/
	
/*
	验证动态码和密码 存入数据库
	post
		api/regcheck.php
			step : 2
			tel : 可用的手机号
			password : 相应的密码
		返回
			{
				返回的信息代码 1 = 成功，0 = 错误
			}
	*/
	

/*
	用户登陆
	post
		api/logcheck.php
			tel : 要登陆的手机号
			userpsw : 相应登陆的密码
		返回
			{
				1 = 登录成功，0 = 登录失败
			}
*/

/*
		初始化商品列表
		post
			api/goodlist.php
				m : all
				page : 获取商品页码，默认为1
				n : 每页显示的条数，默认为50
			返回
				
			{
				count : 总商品数	
				pages : 页数 
				page : 当前页
				n : 每页显示商品数
				list : [
						{
							gid : 商品id
							title : 商品名称
							content : 商品介绍内容
							imgsrc: 商品图样
							price : 商品现价
							before : 商品原价
							finish : 成交量
							comment : 评论量
							limitsale : 是否限时折扣
							limitnum : 限购
							shopname : 店铺名称
							ziying : 是否自营
							remain : 库存量
						},
						{
							gid : 商品id
							title : 商品名称
							content : 商品介绍内容
							imgsrc: 商品图样
							price : 商品现价
							before : 商品原价
							finish : 成交量
							comment : 评论量
							limitsale : 是否限时折扣
							limitnum : 限购
							shopname : 店铺名称
							ziying : 是否自营
							remain : 库存量
						}
							]
							
						}

		*/



	/*
	个别商品渲染数据
	post
		api/goodlist.php
			m:one
			gid:商品的id
		返回
			{
				gid : 商品id
				title : 商品名称
				content : 商品介绍内容
				imgsrc: 商品图样
				price : 商品现价
				before : 商品原价
				finish : 成交量
				comment : 评论量
				limitsale : 是否限时折扣
				limitnum : 限购
				shopname : 店铺名称
				ziying : 是否自营
				remain : 库存量
			}
	*/
	
	/*
	添加数据库商品数量
	post
		api/buycar.php
			m:add
			gid:商品的id
			tel:用户的手机号码
			addnum:增加的数量
		返回
			{
				成功=1，失败=0
			}
	*/
	
	/*
	减少数据库商品数量
	post
		api/buycar.php
			m:cut
			gid:商品的id
			tel:用户的手机号码
			cutnum:减少的数量
		返回
			{
				减少成功=1，减少失败=0,原来无数据=2
			}
	*/
	
	/*
	更新数据库商品数量
	post
		api/buycar.php
			m:update
			gid:商品的id
			tel:用户的手机号码
			updatenum:更新的数量
		返回
			{
				成功=1，失败=0
			}
	*/
	/*
	删除购物车数据库某商品信息
	post
		api/buycar.php
			m:del
			gid:商品的id
			tel:用户的手机号码
		返回
			{
				减少成功=1，减少失败=0
			}
	*/
	
	
	/*
	获取某用户的购物车  方法1
	post
		api/buycar.php
			m:getinf
			tel:用户的手机号码
		返回
			[
				{
					shopname:商店名称1
					list:[
							{
								gid : 商品id
								title : 商品名称
								content : 商品介绍内容
								imgsrc: 商品图样
								price : 商品现价
								before : 商品原价
								finish : 成交量
								comment : 评论量
								limitsale : 是否限时折扣
								limitnum : 限购
								ziying : 是否自营
								remain : 库存量
								carnum:购物车中数量
							},{},{}
						]
				},{
					shopname:商店名称2
					list:[
							{
								gid : 商品id
								title : 商品名称
								content : 商品介绍内容
								imgsrc: 商品图样
								price : 商品现价
								before : 商品原价
								finish : 成交量
								comment : 评论量
								limitsale : 是否限时折扣
								limitnum : 限购
								ziying : 是否自营
								remain : 库存量
								carnum:购物车中数量
							},{},{}
						]
				}
				
			]
	*/
	
	
	
	
	
	
	/*
	获取某用户的购物车 方法2
	post
		api/buycar.php
			m:getinf
			tel:用户的手机号码
		返回
			{
				shopnames : [商店1,商店2,商店3,…,商店n]	
				shopgoods:[商店1含有商品的数量,商店2含有商品的数量,…,商店n含有商品的数量]
				list : [
						{	
							shopname:商店1
							gid : 商品id
							title : 商品名称
							content : 商品介绍内容
							imgsrc: 商品图样
							price : 商品现价
							before : 商品原价
							finish : 成交量
							comment : 评论量
							limitsale : 是否限时折扣
							limitnum : 限购
							ziying : 是否自营
							remain : 库存量
						},
						{	shopname:商店1
							gid : 商品id
							……
						}，{
							shopname:商店n
							gid:商品id
						}
					]
							
						}
	*/
	