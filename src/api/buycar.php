<?php
	//连接数据库
	include 'linkygdb.php';
	
	//接收数据判断需要进行什么操作
	$m=isset($_POST['m'])?$_POST['m']:'';
	//接收数据为add时 增加购物车商品数量
	if($m=='add'){
		//接收当前用户 和商品gid、增加的数量
		$gid=isset($_POST['gid'])?$_POST['gid']:'';
		$tel=isset($_POST['tel'])?$_POST['tel']:'';
		$addnum=isset($_POST['addnum'])?$_POST['addnum']:'';
		
		//查询 该用户 某商品是否存在过记录
		$sql1="select num from ygcar where goodid = '$gid' and tel = '$tel'";
		$res1 = $conn -> query($sql1);
		//如果有数据,进行直接添加，更新数据库
		if($res1->num_rows){
			//获取原有数据
			$needdata=$res1->fetch_all(MYSQLI_ASSOC);
			$beforenum=$needdata[0]['num'];
			//原有数量+新增数量
			$newnum=$beforenum*1+$addnum*1;
			//更新数据库
			$sql2="UPDATE ygcar set num = $newnum WHERE goodid = '$gid' AND tel = '$tel';";
			$res2 = $conn -> query($sql2);
			//成功返回1 错误返回0
			echo $res2;
		}else{
			//若原来无数据，新加数据
			$sql3="insert into ygcar (num,tel,goodid) values ($addnum,$tel,$gid)";
			$res3 = $conn -> query($sql3);
			//成功返回1 错误返回0
			echo $res3;
		}
		

//		$nownum=$beforenum*1;
//		echo $nownum;
	}else if($m=='cut'){
		//接收当前用户 和商品gid、减少的数量
		$gid=isset($_POST['gid'])?$_POST['gid']:'';
		$tel=isset($_POST['tel'])?$_POST['tel']:'';
		$cutnum=isset($_POST['cutnum'])?$_POST['cutnum']:'';
		
		//查询 该用户 某商品是否存在过记录
		$sql1="select num from ygcar where goodid = '$gid' and tel = '$tel'";
		$res1 = $conn -> query($sql1);
		//如果有数据,进行减少，更新数据库
		if($res1->num_rows){
			//获取原有数据
			$needdata=$res1->fetch_all(MYSQLI_ASSOC);
			$beforenum=$needdata[0]['num'];
			if($beforenum<=$cutnum){
				//当原有的数量小于等于减去的数量时，清空该数据信息
				$sql2="delete from ygcar where goodid = '$gid' AND tel ='$tel'";
				$res2 = $conn -> query($sql2);
				echo $res2;
			}else{
				//当原有的数量大于减去的数量时，减少该数据的num并更新
				//原有数量-减少数量
				$newnum=$beforenum*1-$cutnum*1;
				//更新数据库
				$sql2="UPDATE ygcar set num = $newnum WHERE goodid = '$gid' AND tel = '$tel'";
				$res2 = $conn -> query($sql2);
				//成功返回1 错误返回0
				echo $res2;
			}
		}else{
			//若原来无数据，返回2
			echo 2;
		}
	}else if($m=='update'){
		//接收当前用户 和商品gid、更新的数量
		$gid=isset($_POST['gid'])?$_POST['gid']:'';
		$tel=isset($_POST['tel'])?$_POST['tel']:'';
		$updatenum=isset($_POST['updatenum'])?$_POST['updatenum']:'';
		//更新数据库
		$sql1="UPDATE ygcar set num = $updatenum WHERE goodid = '$gid' AND tel = '$tel';";
		$res1 = $conn -> query($sql1);
		//成功返回1 错误返回0
		echo $res1;
		
	}else if($m=='getinf'){
		//接收当前用户
		$tel=isset($_POST['tel'])?$_POST['tel']:'';
		//获取某用户购物车中的所有的商品ID
		$sql1="SELECT goodid FROM ygcar WHERE tel = $tel";
		$res1 = $conn -> query($sql1);
		$iddata=$res1->fetch_all(MYSQLI_ASSOC);
		$idlength=$res1->num_rows;
		//某用户所有的 id 存入数组idarr
		$idarr=array();
		for($i=0;$i<$idlength;$i++){
			$idarr[$i]=$iddata[$i]['goodid'];
		}
		//查询 某用户所有id 对应的商店名称 并存入数组namearr （in_array()去重）
		$namearr=array();
		for($i=0;$i<$idlength;$i++){
			$goodid=$idarr[$i];
			$sql2="SELECT shopname FROM yggoodlist WHERE goodid = $goodid";
			$res2 = $conn -> query($sql2);
			$shopname=$res2->fetch_all(MYSQLI_ASSOC)[0]['shopname'];
			//去重判断
			if(!in_array($shopname,$namearr)){
				//不存在 就添加进namearr数组
				$namearr[]=$shopname;
			}
		}
		//某用户所有的商品的店铺数量
		$namelength=count($namearr);
		//设置最终输出的关联数组$data
		$data=array();
		//分店铺名称输出对象
		for($i=0;$i<$namelength;$i++){
			//设置同一店铺的商品数组
			$list=array();
			//当前店铺的名字
			$name=$namearr[$i];
			//循环购物车总所有商品id 判断是否属于当前店铺
			for($j=0;$j<$idlength;$j++){
				$id=$idarr[$j];
				//判断是否属于
				$sql3="SELECT * FROM yggoodlist WHERE goodid = $id AND shopname = '$name'";
				$res3 = $conn -> query($sql3);
				//属于则存进当前店铺的商品数组
				if($res3->num_rows){
					$datainf=$res3->fetch_all(MYSQLI_ASSOC);
					//查询该商品在购物车的数量
					$sql4="select num from ygcar where goodid = '$id' and tel = '$tel'";
					$res4 = $conn -> query($sql4);
					$carnum=$res4->fetch_all(MYSQLI_ASSOC)[0]['num'];
					$datainf[0]['carnum']=$carnum;
					//该商品存入 当前店铺的 商品列
					$list[]=$datainf;
				}
			}
			//循环所有id后 得到的同一商铺店名 和商品信息 存入关联数组$data
			$haha=array(
				'shopname'=>$name,
				'list'=>$list
			);
			$data[]=$haha;			
		}
			echo json_encode($data,JSON_UNESCAPED_UNICODE);	
		
	}else if($m=='del'){
		//接收要删除相应数据
		$gid=isset($_POST['gid'])?$_POST['gid']:'';
		$tel=isset($_POST['tel'])?$_POST['tel']:'';
		//更新数据库
		$sql="DELETE from ygcar WHERE tel = $tel AND goodid = $gid";
		$res = $conn -> query($sql);
		echo $res;
	}
	
?>