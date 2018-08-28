$(function(){
	if(sessionStorage.duernum&&sessionStorage.dpassword){
     	$("#header>.wrap>ul>.red").html("欢迎光临央广购物")
     $("#header>.wrap>ul>.register").html("[退出]") ;
     $("#header>.wrap>ul>.red").removeClass("red")
     }else{
     	$("#header>.wrap>ul>.red").html("您好，请登录")
     $("#header>.wrap>ul>.register").html("免费注册") ;
     $("#header>.wrap>ul>.red").addClass("red")
     }
	
	$("#header .wrap>ul>li").last().css("width","90px")
$("#header .wrap>ul>li:lt(3)").hover(function(){
			$(this).children().eq(0).css({border:"1px solid #ccc",background:"white"})
			$(this).children().eq(0).stop().animate({height:"95px"},100)
		},function(){	
			$(this).children().eq(0).stop().animate({height:"20px"},100,function(){
				$(this).css({border:"none",background:"#f6f6f6"})
			})
        })
        
$("#headerMiddle .search>a").hover(
	function(){
		$(this).stop()
		$(this).children().css("color","#F15C18")
		$(this).animate({"height":"72px"})
	},
	function(){
		$(this).stop()
		$(this).children().css("color","#333")
		$(this).animate({"height":"36px"})
	})

$("#headerMiddle .shop_city>.city_wrap").hover(function(){
	$("#headerMiddle .shop_city .my_service").css("display","block");
	$("#headerMiddle .shop_city").css("border-bottom","none")
},function(){
	$("#headerMiddle .shop_city .my_service").css("display","none")
	$("#headerMiddle .shop_city").css("border-bottom","solid 1px #F0F0F0")
})
$("#headerMiddle .shop_city .my_service").hover(function(){
	$("#headerMiddle .shop_city .my_service").css("display","block");
	$("#headerMiddle .shop_city").css("border-bottom","none")
},function(){
	$("#headerMiddle .shop_city .my_service").css("display","none")
	$("#headerMiddle .shop_city").css("border-bottom","solid 1px #F0F0F0")
})

$("#headerMiddle .shop_cart .cart_wrap").hover(function(){
	$(".shop_cart .my_goods").css("display","block");
	$("#headerMiddle .shop_cart").css("border-bottom","none")
},function(){
	$(".shop_cart .my_goods").css("display","none")
	$("#headerMiddle .shop_cart").css("border-bottom","solid 1px #F0F0F0")
})
$(".shop_cart .my_goods").hover(function(){
	$(".shop_cart .my_goods").css("display","block");
	$("#headerMiddle .shop_cart").css("border-bottom","none")
},function(){
	$(".shop_cart .my_goods").css("display","none")
	$("#headerMiddle .shop_cart").css("border-bottom","solid 1px #F0F0F0")
})

     
     


     $("#allGoods .goods_classify li").eq(0).mouseenter(function(){
     	$.ajax({
     		type:"get",
     		url:"datas/header.json",
     		async:true,
     		success:function(res){
                
                var food=res.food;
                var str1=""
     			for(var j=0;j<food.length;j++){   
     				var str="";
     				for(var i=0;i<food[j].goods.length;i++){
     				str+='<li><span>'+food[j].goods[i]+'</span></li>'
     			}
     		    str1+='<div class="content">'
				     		+'<div class="con_left">'
				     			+'<span>'+food[j].tittle+'</span><a>></a>'
				     		+'</div>'
				     		+'<ul class="con_right">'
				     			+str
				     		+'</ul>'
				     	+'</div>'
     			}
     			$(".goods_detail .wrap").html(str1)
     		}
     	});

    })
      $("#allGoods .goods_classify li").eq(1).mouseenter(function(){
     	$.ajax({
     		type:"get",
     		url:"datas/header.json",
     		async:true,
     		success:function(res){
                
                var food=res.wiring;
                var str1=""
     			for(var j=0;j<food.length;j++){   
     				var str="";
     				for(var i=0;i<food[j].goods.length;i++){
     				str+='<li><span>'+food[j].goods[i]+'</span></li>'
     			}
     		    str1+='<div class="content">'
				     		+'<div class="con_left">'
				     			+'<span>'+food[j].tittle+'</span><a>></a>'
				     		+'</div>'
				     		+'<ul class="con_right">'
				     			+str
				     		+'</ul>'
				     	+'</div>'
     			}
     			$(".goods_detail .wrap").html(str1)
     		}
     	});

    });
    $("#allGoods .goods_classify li").eq(2).mouseenter(function(){
     	$.ajax({
     		type:"get",
     		url:"datas/header.json",
     		async:true,
     		success:function(res){
                
                var food=res.jewelry;
                var str1=""
     			for(var j=0;j<food.length;j++){   
     				var str="";
     				for(var i=0;i<food[j].goods.length;i++){
     				str+='<li><span>'+food[j].goods[i]+'</span></li>'
     			}
     		    str1+='<div class="content">'
				     		+'<div class="con_left">'
				     			+'<span>'+food[j].tittle+'</span><a>></a>'
				     		+'</div>'
				     		+'<ul class="con_right">'
				     			+str
				     		+'</ul>'
				     	+'</div>'
     			}
     			$(".goods_detail .wrap").html(str1)
     		}
     	});

    })
    $("#allGoods .goods_classify li").eq(3).mouseenter(function(){
     	$.ajax({
     		type:"get",
     		url:"datas/header.json",
     		async:true,
     		success:function(res){
                console.log(res.food)
                var food=res.guard;
                var str1=""
     			for(var j=0;j<food.length;j++){   
     				var str="";
     				for(var i=0;i<food[j].goods.length;i++){
     				str+='<li><span>'+food[j].goods[i]+'</span></li>'
     			}
     		    str1+='<div class="content">'
				     		+'<div class="con_left">'
				     			+'<span>'+food[j].tittle+'</span><a>></a>'
				     		+'</div>'
				     		+'<ul class="con_right">'
				     			+str
				     		+'</ul>'
				     	+'</div>'
     			}
     			$(".goods_detail .wrap").html(str1)
     		}
     	});

    })
})


















