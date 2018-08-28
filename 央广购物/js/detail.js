$(function(){
	$("#theHead").load("header.html",function(){
			var goodsLis=$("#allGoods>ul>li:eq(0)")	
			var goodsFy=$(".goods_classify")			
			var goodsDet=$(".goods_detail")	;
			goodsFy.css("display","none");
			goodsDet.css("display","none")
			goodsLis.hover(function(){
			goodsFy.css("display","block")
			},function(){
				goodsFy.css("display","none")
			}
	    );
		    goodsFy.hover(function(){
		    	goodsFy.css("display","block")
		    	goodsDet.css("display","block")
		    },function(){
		    	goodsFy.css("display","none")
		    	goodsDet.css("display","none")
		    })
	        goodsDet.hover(function(){
	        	goodsFy.css("display","block")
		    	goodsDet.css("display","block")
	        },function(){
	        	goodsFy.css("display","none")
		    	goodsDet.css("display","none")
	        })		
	})
	$("#under").load("footer.html",function(){
		
	})
	 var search=window.location.search.substr(1);
			
	 
	 
	$.ajax({
		type:"get",
		url:"datas/detail.json",
		async:true,
		success:function(res){
			
			var classify=res[search][0].classify;
			
			var str1=
			'<img src="img/logo342.png"/>'
			+'<a href="">'+classify[0]+'</a><span>></span>'
			+'<a href="">'+classify[1]+'</a><span>></span>'
			+'<a href="">'+classify[2]+'</a><span>></span>'
			+'<span>'+classify[3]+'</span>'
			$("#upSide").html(str1)
			
			var imgs=res[search][0].imgs;
			var str2='<div class="smallbox">'
					+'<img src="'+imgs[0]+'"/>'
					+'<div class="mask">'						
					+'</div>'
				+'</div>'				
				+'<div class="bigbox">'
					+'<img src="'+imgs[0]+'"/>'
				+'</div>'
				+'<ul>'
					+'<li><img src="'+imgs[0]+'"></li>'
					+'<li><img src="'+imgs[1]+'"></li>'
					+'<li><img src="'+imgs[2]+'"></li>'
					+'<li><img src="'+imgs[3]+'"></li>'
					+'<li><img src="'+imgs[4]+'"></li>'
				+'</ul>'
				+'<div class="collect">'
					+'<a><img src=""/>收藏商品</a>'
					+'<a><img src=""/>移动端购买</a>'
				+'</div>'
			$("#middleSide .mside_left").html(str2 )
			$("#middleSide .mside_middle h1").html(classify[3])
			$("#middleSide .mside_middle .price p").html(res[search][0].price)
			
			
			
	var small=$(".mside_left>.smallbox");
	var big=$('#middleSide .mside_left .bigbox')
	var mask=$(".mside_left>.smallbox>.mask")
    small.hover(function(){
    			mask.show();
    			big.show();
    		},function(){
    			mask.hide();
    			big.hide();
    		})
    		small.mousemove(function(e){
    			var e=e||window.event;
    			var x=e.pageX-small.offset().left-mask.width()/2;
    			var y=e.pageY-small.offset().top-mask.height()/2;
    			x=x<0?0:x;
    			y=y<0?0:y;
    			var maxX=small.width()-mask.width();
    			var maxY=small.height()-mask.height();
    			x=x>maxX?maxX:x;
    			y=y>maxY?maxY:y;
    			mask.css({top:y,left:x});
    			var blix=$("#middleSide .mside_left .bigbox img").width()/$(".mside_left>.smallbox>img").width();
    			var bliy=$("#middleSide .mside_left .bigbox img").height()/$(".mside_left>.smallbox>img").height();
    			big.scrollTop(bliy*y);
    			big.scrollLeft(blix*x);
    		})
	
	$(".mside_left>ul img").click(function(){
		$(".mside_left>ul img").css("border","none")
		$(".smallbox>img").attr("src",$(this).attr("src"));
		$(".bigbox img").attr("src",$(this).attr("src"))
        $(this).css("border","1px solid red")
	})
	$(".mside_left>ul>li>img:eq(0)").css("border","1px solid red")	
	
	
	
	$(".num>input[type='button']").eq(0).click(function(){
		
		if($(".num>input[type='text']").val()>1){
			$(".num>input[type='text']").val($(".num>input[type='text']").val()-1)
		}else{
			$(".num>input[type='text']").val(1)
		}
	})
	$(".num>input[type='button']").eq(1).click(function(){
		console.log($(".num>input[type='text']").val())
		$(".num>input[type='text']").val(Number($(".num>input[type='text']").val())+1)		
	})
//	   var btns=document.querySelector(".mside_middle .buyNow a")
		var cookie=getCookie("datas");
				if(cookie==undefined){
						//设置cookie
						setCookie("datas","[]",55);
						cookie=getCookie("datas");
				}
				
				var cookiearr=JSON.parse(cookie);
				
	            var btns=$(".mside_middle .buyNow a").eq(1);
	 			btns.click(function(){
						//收集要添加的信息
					var obj={};
					
					obj.imgsrc=$("#middleSide .smallbox img").attr("src");
					obj.name=$(".mside_middle>h1").html();
					
					obj.pcount=$(".mside_middle .price>p").html();					
					//商品数量
					
					obj.pid=Number($(".num>input[type='text']").val());
					console.log(obj)
					
					//假如当前的商品存在了  
					if(cheackobj(obj.imgsrc)){
						//更新商品数量
						updateNum(obj.imgsrc,obj.pid);
						
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
					 
					 
				})	
	    
	    $(".shop_cart .cart_wrap").click(function(){
	    	
	    	window.location.href="shoppingCart.html"
	    })
	           
	            
	}
	
	
	
				
	
	
})			
})		
	
		
		
		
		
	
	
	
	
	
		
	
	
	
	
	
