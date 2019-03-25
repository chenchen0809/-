<?php
	//连接数据库
	include 'linkygdb.php';
	
	//接收数据处于哪个步骤
	$step=isset($_POST['step'])?$_POST['step']:'';
	
	//接收数据为步骤1：数据库是否存在手机号,存在就返回提示
	if($step==1){
		//接收手机号
		$tel=isset($_POST['tel'])?$_POST['tel']:'';
		
		//查询ygshopping数据库中userlist的数据
		$sql="select * from userlist where tel='$tel'";
		//执行sql语句得到其结果集
		$res = $conn -> query($sql);
		if($res->num_rows){
			//结果集存在 则 数据库中已存在该手机号，不可用
			echo 0;
		}else{
			//数据库中不存在该手机号，可用
			echo 1;
		}
		
	}else if($step==2){
		//接收手机号和密码
		$tel=isset($_POST['tel'])?$_POST['tel']:'';
		$userpsw=isset($_POST['userpsw'])?$_POST['userpsw']:'';
		
		//存入数据
		$sql="insert into userlist (tel,userpsw) value ('$tel','$userpsw')";
		//执行sql语句得到其结果集
		$res = $conn -> query($sql);
		echo $res;
//		if($res->num_rows){
//			//结果集存在 则 数据库中已存在该手机号，不可用
//			echo 0;
//		}else{
//			//数据库中不存在该手机号，可用
//			echo 1;
//		}

	}
?>