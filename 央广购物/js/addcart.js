window.onload=function(){

		//获取总数
//	    document.getElementById("ccount").innerHTML=getTotal();
		
		//取出所有按钮
		var cookie=getCookie("datas");
				if(cookie==undefined){
						//设置cookie
						setCookie("datas","[]",55);
						cookie=getCookie("datas");
				}
				
				var cookiearr=JSON.parse(cookie);
				
	            var btns=document.querySelector(".mside_middle .buyNow a")
	            console.log(btns)
	 			btns.addEventListener("click",function(){
						//收集要添加的信息
					var obj={};
					
					obj.imgsrc=document.querySelector("#middleSide .smallbox img").src;
					obj.name=document.querySelector(".mside_middle>h1").innerHTML;
					
					obj.price=document.querySelector(".mside_middle .price>p").innerHTML;
					
					//商品数量
					obj.pid=Number($(".num>input[type='text']").val());
					console.log(obj)
					
					//假如当前的商品存在了  
					if(cheackobj(obj.pid)){
						//更新商品数量
						updateNum(obj.pid,$(".num>input[type='text']").val());
						
					}else{
						var cookie=getCookie("datas");
						cookiearr=JSON.parse(cookie);
						//把收集好的信息添加到cookie数组中
						cookiearr.push(obj);//[{}]
						//把添加好商品的数组转会字符串
						var cookiestr=JSON.stringify(cookiearr)
						//从新设置cookie
						setCookie("datas",cookiestr,55);
						console.log(cookiestr)
					} 
					 //点击添加完成调用获取总数
						 
					 
				},true)	
		
	}
		
		
			
			
