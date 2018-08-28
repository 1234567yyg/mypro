//获取cookie转成数组
function getAll(){
	var cookie=getCookie("datas");
	var cookiearr=JSON.parse(cookie);
	return cookiearr;
	
}
//获取总数的方法
function getTotal(){
	var  total=0;
	var cookiearr=getAll();
	//把所有pcount相加
	for(var i=0;i<cookiearr.length;i++){
		
		total+=cookiearr[i].pcount;
		
	}
	return total;
}

//判断是否存在商品
function cheackobj(id){
	//判断当前添加购物车的商品和cookie中的是否相等 id=1001
	var cookiearr=getAll();
		var ext=false;
	for(var i=0;i<cookiearr.length;i++){
			if(id==cookiearr[i].imgsrc){
				ext=true;
				break;
			}
	
	}
	
	return ext;
}
//更新数量的函数
function updateNum(id,num){
	var cookiearr=getAll();
	for(var i=0;i<cookiearr.length;i++){
		
		if(id==cookiearr[i].imgsrc){
			cookiearr[i].pid+=num;
		}
	}
	//把更新后pcount的数据 从新设置会cookie
	var  cookiestr=JSON.stringify(cookiearr);
	setCookie("datas",cookiestr,55);
	
}
//删除数据
//[{},{},{"小米"},{}]
function delcookie(pid){
	var  cookiearr=getAll();
	for(var i=0;i<cookiearr.length;i++){
		if(pid==cookiearr[i].pid){
			//i--下标
			cookiearr.splice(i,1);
		}
		
	}
	//把改变后的设置回cookie
	var cookiestr=JSON.stringify(cookiearr);
	setCookie("datas",cookiestr,55);
}
