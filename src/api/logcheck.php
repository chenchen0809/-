<?php
	//连接数据库
	include 'linkygdb.php';
	
	//接收手机号
	$tel=isset($_POST['tel'])?$_POST['tel']:'';
	$psw=isset($_POST['userpsw'])?$_POST['userpsw']:'';
	
	//查询该用户的手机号和密码是否和数据库一致
	$sql = "SELECT * FROM userlist WHERE tel='$tel' and userpsw='$psw'";
	
	//执行sql语句得到其结果集
	$res = $conn->query($sql);
	if($res->num_rows > 0) {
		//存在：登陆成功
		echo 1;
	}else{
		//不存在：登陆失败
		echo 0;
	}
			
?>