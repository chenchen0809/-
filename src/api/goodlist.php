<?php
	//连接数据库
	include 'linkygdb.php';
	
	//接收数据处于哪个步骤
	$m=isset($_POST['m'])?$_POST['m']:'';
	
	//接收数据为all：初始化商品列表 
	if($m=='all'){
		//接收当前页码 和显示商品数量
		$page=isset($_POST['page'])?$_POST['page']:'';
		$n=isset($_POST['n'])?$_POST['n']:'';
		
		//查询ygshopping数据库中yggoolist所有的数据
		$sql1="select * from yggoodlist";
		//执行sql1语句得到其结果集
		$res1 = $conn -> query($sql1);
		//得到总商品数count
		$count=$res1->num_rows;
		//计算总页数pages
		$pages=ceil($count/$n);
		//开始查询的商品数
		$begin=($page-1)*50;
		//查询当前页数的n个商品
		$sql2="select * from yggoodlist limit $begin,$n";
		//执行sql2语句得到其结果集
		$res2 = $conn -> query($sql2);
		$list=$res2->fetch_all(MYSQLI_ASSOC);
		//关联数组
		$data=array(
			'count'=>$count,
			'pages'=>$pages,
			'page'=>$page,
			'n'=>$n,
			'list'=>$list
		);
		echo (json_encode($data,JSON_UNESCAPED_UNICODE)); 
	}else if($m=='one'){
		//接收数据为one：单个商品信息 
		//接收商品的gid
		$gid=isset($_POST['gid'])?$_POST['gid']:'';
		//查询ygshopping数据库中yggoolist表的gid相关数据
		$sql="SELECT * FROM yggoodlist WHERE goodid =$gid";
		//执行sql语句得到其结果集
		$res = $conn -> query($sql);
		$list=$res->fetch_all(MYSQLI_ASSOC);
		
		echo (json_encode($list,JSON_UNESCAPED_UNICODE)); 
	
	}
?>