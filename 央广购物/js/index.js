$(function(){
	$("#theHead").load("header.html",function(){
		if(!(sessionStorage.duernum&&sessionStorage.dpassword)){
			$("#header>.wrap>ul>.red").click(function(){
				window.location.href="enter.html"
			})
			$("#header>.wrap>ul>.register").click(function(){
				window.location.href="register.html"
			})
		}else{
			$("#header>.wrap>ul>.register").click(function(){
				sessionStorage.clear();
				window.location.reload()
			})
		}
		
		
		
		
	$(".goods_detail").css("display","none");		
	var goodsFy=$(".goods_classify")			
	var goodsDet=$(".goods_detail")	;
		    goodsFy.hover(function(){		    	
		    	goodsDet.css("display","block")
		    },function(){		    	
		    	goodsDet.css("display","none")
		    })
	        goodsDet.hover(function(){	        	
		    	goodsDet.css("display","block")
	        },function(){	        
		    	goodsDet.css("display","none")
	        })		
	});
	$.ajax({
    		type:"get",
    		url:"datas/index.json",
    		async:true,
    		success:function(res){
    			
    			var left=res.recommend[0].left;
    			var banner=res.recommend[0].banner;
    			var right=res.recommend[0].right
    			var str1="";   			
    			for(var i=0;i<left.length;i++){
    				str1+='<li><img src="'+left[i]+'"/></li>'
    			}   			
    			var str2=""
    			for(var j=0;j<banner.length;j++){
    				str2+='<li><img src="'+banner[j]+'"/></li>'
    			}    			
    			var str3="";
    			for(var k=0;k<right.length;k++){
    				str3+='<li><img src="'+right[k]+'"/></li>'
    			}   			
    	var str4='<ul class="hurdle_first">'
					+str1
				+'</ul>'
				+'<div class="hurdle_sec">'
					+'<ul class="img">'
						+str2
					+'</ul>	'
					+'<ul class="ctrl">'
						+'<li class="active"></li>'
						+'<li></li>'
						+'<li></li>'
						+'<li></li>'
						+'<li></li>'
					+'</ul>	'
					+'<span class="prev"><</span><span class="next">></span>'
				+'</div>'
				+'<ul class="hurdle_thr">'
					+str3
				+'</ul>'
				
			$("#product .detail_wrap").html(str4)	
								$("#product .detail_wrap li").click(function(){
     	window.location.href="detail.html?"+$(this).children().eq(0).attr("src")
     })
			var vbanner1=$("#product .detail_wrap .hurdle_sec>.img");
	var vlis1=$("#product .detail_wrap .hurdle_sec .ctrl li");
	var vctrlp1=$("#product .detail_wrap .hurdle_sec .prev");
	var vctrln1=$("#product .detail_wrap .hurdle_sec .next");
	var vbannersec1=$("#product .detail_wrap .hurdle_sec")
	var num1=0;
	var flag1=true;
	var timer1=null;
    timer1=setInterval(move1,2000);
		function move1(){							
			if(flag1){			
				flag1=false;				
					num1++;
				if(num1>4){
					vbanner1.animate({marginLeft:-339*num1},500,function(){						
						num1=0;
						bgColor1()
						vbanner1.css("marginLeft","0");
						flag1=true;						
					})					
				}else{
					vbanner1.animate({marginLeft:-339*num1},500,function(){
						bgColor1()
						flag1=true;
					})
				}			
			}
		}	

			
			vlis1.click(function(){
				num1=$(this).index();
				bgColor1();
				vbanner1.animate({marginLeft:-339*num1},500,function(){})
			});
		
        vbannersec1.hover(function(){
        	clearInterval(timer1)
			vctrlp1.stop().animate({opacity:0.5},200)
			vctrln1.stop().animate({opacity:0.5},200)
        },function(){
        	timer1=setInterval(move1,2000);
			vctrlp1.stop().animate({opacity:0},200)
			vctrln1.stop().animate({opacity:0},200)
        })
						
		vctrln1.click(function(){
		    move1()
		})
		vctrlp1.click(function(){
		    if(flag1){
				flag1=false;
					num1--;
				if(num1<0){
					vbanner1.css("marginLeft",-339*(vlis1.length)+'px');	
					num1=vlis1.length-1;
					bgColor1();
					vbanner1.animate({marginLeft:-339*num1},500,function(){
						flag1=true;
					})
				}else{
					bgColor1();
					vbanner1.animate({marginLeft:-339*num1},500,function(){
						flag1=true;
					})
				}
			}
		})
	
		function bgColor1(){		
			$.each(vlis1,function(){
				vlis1.removeClass("active")
				vlis1.eq(num1).addClass("active")
			})

		
		}

				
    		}
    	});
	//食品酒水------------------------------------
	$("#content>.con_right>ul>li").eq(0).mouseenter(function(){   	
    	$.ajax({
    		type:"get",
    		url:"datas/index.json",
    		async:true,
    		success:function(res){
    			
    			var left=res.recommend[0].left;
    			var banner=res.recommend[0].banner;
    			var right=res.recommend[0].right
    			var str1="";   			
    			for(var i=0;i<left.length;i++){
    				str1+='<li><img src="'+left[i]+'"/></li>'
    			}   			
    			var str2=""
    			for(var j=0;j<banner.length;j++){
    				str2+='<li><img src="'+banner[j]+'"/></li>'
    			}    			
    			var str3="";
    			for(var k=0;k<right.length;k++){
    				str3+='<li><img src="'+right[k]+'"/></li>'
    			}   			
    	var str4='<ul class="hurdle_first">'
					+str1
				+'</ul>'
				+'<div class="hurdle_sec">'
					+'<ul class="img">'
						+str2
					+'</ul>	'
					+'<ul class="ctrl">'
						+'<li class="active"></li>'
						+'<li></li>'
						+'<li></li>'
						+'<li></li>'
						+'<li></li>'
					+'</ul>	'
					+'<span class="prev"><</span><span class="next">></span>'
				+'</div>'
				+'<ul class="hurdle_thr">'
					+str3
				+'</ul>'
				
			$("#product .detail_wrap").html(str4)	
			var vbanner1=$("#product .detail_wrap .hurdle_sec>.img");
	var vlis1=$("#product .detail_wrap .hurdle_sec .ctrl li");
	var vctrlp1=$("#product .detail_wrap .hurdle_sec .prev");
	var vctrln1=$("#product .detail_wrap .hurdle_sec .next");
	var vbannersec1=$("#product .detail_wrap .hurdle_sec")
	var num1=0;
	var flag1=true;
	var timer1=null;
    timer1=setInterval(move1,2000);
		function move1(){							
			if(flag1){			
				flag1=false;				
					num1++;
				if(num1>4){
					vbanner1.animate({marginLeft:-339*num1},500,function(){						
						num1=0;
						bgColor1()
						vbanner1.css("marginLeft","0");
						flag1=true;						
					})					
				}else{
					vbanner1.animate({marginLeft:-339*num1},500,function(){
						bgColor1()
						flag1=true;
					})
				}			
			}
		}	

			
			vlis1.click(function(){
				num1=$(this).index();
				bgColor1();
				vbanner1.animate({marginLeft:-339*num1},500,function(){})
			});
		
        vbannersec1.hover(function(){
        	clearInterval(timer1)
			vctrlp1.stop().animate({opacity:0.5},200)
			vctrln1.stop().animate({opacity:0.5},200)
        },function(){
        	timer1=setInterval(move1,2000);
			vctrlp1.stop().animate({opacity:0},200)
			vctrln1.stop().animate({opacity:0},200)
        })
						
		vctrln1.click(function(){
		    move1()
		})
		vctrlp1.click(function(){
		    if(flag1){
				flag1=false;
					num1--;
				if(num1<0){
					vbanner1.css("marginLeft",-339*(vlis1.length)+'px');	
					num1=vlis1.length-1;
					bgColor1();
					vbanner1.animate({marginLeft:-339*num1},500,function(){
						flag1=true;
					})
				}else{
					bgColor1();
					vbanner1.animate({marginLeft:-339*num1},500,function(){
						flag1=true;
					})
				}
			}
		})
	
		function bgColor1(){		
			$.each(vlis1,function(){
				vlis1.removeClass("active")
				vlis1.eq(num1).addClass("active")
			})

		
		}

						$("#product .detail_wrap li").click(function(){
     	window.location.href="detail.html?"+$(this).children().eq(0).attr("src")
     })	
    		}
    	});
    })    	
    	
    $("#content>.con_right>ul>li").eq(1).mouseenter(function(){
    	$.ajax({
    		type:"get",
    		url:"datas/index.json",
    		async:true,
    		success:function(res){
    			var str="";
    			var imgs=res.drink[0].imgs
    			for(var i=0;i<imgs.length;i++){
    				str+='<li><img src="'+imgs[i]+'"/></li>'
    			}
    			$("#product .detail_wrap").html(str)
    						$("#product .detail_wrap li").click(function(){
     	window.location.href="detail.html?"+$(this).children().eq(0).attr("src")
     })
    		}
    	});
    })
    	
    $("#content>.con_right>ul>li").eq(2).mouseenter(function(){
    	$.ajax({
    		type:"get",
    		url:"datas/index.json",
    		async:true,
    		success:function(res){
    			var str="";
    			var imgs=res.bar[0].imgs
    			for(var i=0;i<imgs.length;i++){
    				str+='<li><img src="'+imgs[i]+'"/></li>'
    			}
    			$("#product .detail_wrap").html(str)
    						$("#product .detail_wrap li").click(function(){
     	window.location.href="detail.html?"+$(this).children().eq(0).attr("src")
     })
    		}
    	});
    })	
    $("#content>.con_right>ul>li").eq(3).mouseenter(function(){
    	$.ajax({
    		type:"get",
    		url:"datas/index.json",
    		async:true,
    		success:function(res){
    			var str="";
    			var imgs=res.nutrition[0].imgs
    			for(var i=0;i<imgs.length;i++){
    				str+='<li><img src="'+imgs[i]+'"/></li>'
    			}
    			$("#product .detail_wrap").html(str)
    						$("#product .detail_wrap li").click(function(){
     	window.location.href="detail.html?"+$(this).children().eq(0).attr("src")
     })
    		}
    	});
    })
     $("#content>.con_right>ul>li").eq(4).mouseenter(function(){
    	$.ajax({
    		type:"get",
    		url:"datas/index.json",
    		async:true,
    		success:function(res){
    			var str="";
    			var imgs=res.tea[0].imgs
    			for(var i=0;i<imgs.length;i++){
    				str+='<li><img src="'+imgs[i]+'"/></li>'
    			}
    			$("#product .detail_wrap").html(str);
    			$("#product .detail_wrap li").click(function(){
     	window.location.href="detail.html?"+$(this).children().eq(0).attr("src")
     })
    		}
    	});
    })

     

	
	
	
	var bannerdiv=$("#banner .wrap>.move>.img");

	var bannerlis=$("#banner .wrap ul li");
	var banner=$("#banner");
	var next=$("#banner .wrap .next");
	var prev=$("#banner .wrap .prev")
		
		var num=1;
		var timer=null;
		timer=setInterval(move,2000);
		function move(){
			num++;
			if(num>1){
				num=0;
			}
			
			
			bannerdiv.eq(num).stop().fadeIn().siblings().stop().fadeOut();
				bannerlis.eq(num).addClass("active").siblings().removeClass("active");
		}	
		bannerlis.click(function(){
			num=$(this).index();
			
			bannerdiv.eq(num).stop().fadeIn().siblings().stop().fadeOut();
				bannerlis.eq(num).addClass("active").siblings().removeClass("active");					
		})
		banner.hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(move,2000);
		})
		next.click(function(){
			move();
		
		})
		prev.click(function(){
			num--;
			if(num<0){
				num=1};
		bannerdiv.fadeOut()
			bannerdiv.eq(num).stop().fadeIn().siblings().stop().fadeOut();
				bannerlis.eq(num).addClass("active").siblings().removeClass("active");
	})
    
	$("#specPerfor>ul>li").hover(function(){
		
		$(this).children().eq(0).stop().animate({width:"120px"});
		$(this).children().eq(0).children().eq(0).stop().animate({lineHeight:"30px",paddingTop:"30px"});
		$(this).children().eq(0).children().eq(1).css("color","#F15C18")
	},function(){
		
		$(this).children().eq(0).stop().animate({width:"110px"})
		$(this).children().eq(0).children().eq(0).stop().animate({lineHeight:"50px",paddingTop:"0"});
		$(this).children().eq(0).children().eq(1).css("color","gray")
	})
//中间内容部分-------------------------------------------	
   
    
    $("#content .con_right li").mousemove(function(){
    	$("#content .con_right li").css({"border":"none","color":"black"})
    	$(this).css({"border-top":"2px solid #F15C18","border-left":"1px solid #F15C18","border-right":"1px solid #F15C18","color":"#FEAA90"}); 
    	$("#content .con_right li .after").css("display","none")
        $(this).children().eq(1).css({"display":"block",bottom:"0"})
    })
	
	//内容部分轮播图-------------------------------
	
	
//家居——————————————————————————————————————————————————————	
	var vbanner2=$("#houseHome .detail_wrap .hurdle_sec>.img");
	var vlis2=$("#houseHome .detail_wrap .hurdle_sec .ctrl li");
	var vctrlp2=$("#houseHome .detail_wrap .hurdle_sec .prev");
	var vctrln2=$("#houseHome .detail_wrap .hurdle_sec .next");
	var vbannersec2=$("#houseHome .detail_wrap .hurdle_sec")
	var num2=0;
	var flag2=true;
	var timer2=null;
    timer2=setInterval(move2,2000);
		function move2()	{							
			if(flag2){			
				flag2=false;				
					num2++;
				if(num2>4){
					vbanner2.animate({marginLeft:-339*num2},500,function(){						
						num2=0;
						bgColor2()
						vbanner2.css("marginLeft","0");
						flag2=true;						
					})					
				}else{
					vbanner2.animate({marginLeft:-339*num2},500,function(){
						bgColor2()
						flag2=true;
					})
				}			
			}
		}	

			
			vlis2.click(function(){
				num2=$(this).index();
				bgColor2();
				vbanner2.animate({marginLeft:-339*num2},500,function(){})
			});
		
        vbannersec2.hover(function(){
        	clearInterval(timer2)
			vctrlp2.stop().animate({opacity:0.5},200)
			vctrln2.stop().animate({opacity:0.5},200)
        },function(){
        	timer2=setInterval(move2,2000);
			vctrlp2.stop().animate({opacity:0},200)
			vctrln2.stop().animate({opacity:0},200)
        })
						
		vctrln2.click(function(){
		    move2()
		})
		vctrlp2.click(function(){
		    if(flag2){
				flag2=false;
					num2--;
				if(num2<0){
					vbanner2.css("marginLeft",-339*(vlis2.length)+'px');	
					num2=vlis2.length-1;
					bgColor2();
					vbanner2.animate({marginLeft:-339*num2},500,function(){
						flag2=true;
					})
				}else{
					bgColor2();
					vbanner2.animate({marginLeft:-339*num2},500,function(){
						flag2=true;
					})
				}
			}
		})
	
		function bgColor2(){
		
			$.each(vlis2,function(){
				vlis2.removeClass("active")
				vlis2.eq(num2).addClass("active")
			})

		
		}
//珠宝————————————————————————————————————————————————————————————————————————————————————————
	var vbanner3=$("#jewelry .detail_wrap .hurdle_sec>.img");
	var vlis3=$("#jewelry .detail_wrap .hurdle_sec .ctrl li");
	var vctrlp3=$("#jewelry .detail_wrap .hurdle_sec .prev");
	var vctrln3=$("#jewelry .detail_wrap .hurdle_sec .next");
	var vbannersec3=$("#jewelry .detail_wrap .hurdle_sec")
	var num3=0;
	var flag3=true;
	var timer3=null;
    timer3=setInterval(move3,2000);
		function move3()	{							
			if(flag3){			
				flag3=false;				
					num3++;
				if(num3>4){
					vbanner3.animate({marginLeft:-339*num3},500,function(){						
						num3=0;
						bgColor3()
						vbanner3.css("marginLeft","0");
						flag3=true;						
					})					
				}else{
					vbanner3.animate({marginLeft:-339*num3},500,function(){
						bgColor3()
						flag3=true;
					})
				}			
			}
		}	

			
			vlis3.click(function(){
				num3=$(this).index();
				bgColor3();
				vbanner3.animate({marginLeft:-339*num3},500,function(){})
			});
		
        vbannersec3.hover(function(){
        	clearInterval(timer3)
			vctrlp3.stop().animate({opacity:0.5},200)
			vctrln3.stop().animate({opacity:0.5},200)
        },function(){
        	timer3=setInterval(move3,2000);
			vctrlp3.stop().animate({opacity:0},200)
			vctrln3.stop().animate({opacity:0},200)
        })
						
		vctrln3.click(function(){
		    move3()
		})
		vctrlp3.click(function(){
		    if(flag3){
				flag3=false;
					num3--;
				if(num3<0){
					vbanner3.css("marginLeft",-339*(vlis3.length)+'px');	
					num3=vlis3.length-1;
					bgColor3();
					vbanner3.animate({marginLeft:-339*num3},500,function(){
						flag3=true;
					})
				}else{
					bgColor3();
					vbanner3.animate({marginLeft:-339*num3},500,function(){
						flag3=true;
					})
				}
			}
		})
	
		function bgColor3(){
		
			$.each(vlis3,function(){
				vlis3.removeClass("active")
				vlis3.eq(num3).addClass("active")
			})

		
		}
	
//个护化妆*********************************************************	
	var vbanner4=$("#guardMakeup .detail_wrap .hurdle_sec>.img");
	var vlis4=$("#guardMakeup .detail_wrap .hurdle_sec .ctrl li");
	var vctrlp4=$("#guardMakeup .detail_wrap .hurdle_sec .prev");
	var vctrln4=$("#guardMakeup .detail_wrap .hurdle_sec .next");
	var vbannersec4=$("#guardMakeup .detail_wrap .hurdle_sec")
	var num4=0;
	var flag4=true;
	var timer4=null;
    timer4=setInterval(move4,2000);
		function move4()	{							
			if(flag4){			
				flag4=false;				
					num4++;
				if(num4>4){
					vbanner4.animate({marginLeft:-439*num4},500,function(){						
						num4=0;
						bgColor4()
						vbanner4.css("marginLeft","0");
						flag4=true;						
					})					
				}else{
					vbanner4.animate({marginLeft:-439*num4},500,function(){
						bgColor4()
						flag4=true;
					})
				}			
			}
		}	

			
			vlis4.click(function(){
				num4=$(this).index();
				bgColor4();
				vbanner4.animate({marginLeft:-439*num4},500,function(){})
			});
		
        vbannersec4.hover(function(){
        	clearInterval(timer4)
			vctrlp4.stop().animate({opacity:0.5},200)
			vctrln4.stop().animate({opacity:0.5},200)
        },function(){
        	timer4=setInterval(move4,2000);
			vctrlp4.stop().animate({opacity:0},200)
			vctrln4.stop().animate({opacity:0},200)
        })
						
		vctrln4.click(function(){
		    move4()
		})
		vctrlp4.click(function(){
		    if(flag4){
				flag4=false;
					num4--;
				if(num4<0){
					vbanner4.css("marginLeft",-439*(vlis4.length)+'px');	
					num4=vlis4.length-1;
					bgColor4();
					vbanner4.animate({marginLeft:-439*num4},500,function(){
						flag4=true;
					})
				}else{
					bgColor4();
					vbanner4.animate({marginLeft:-439*num4},500,function(){
						flag4=true;
					})
				}
			}
		})
	
		function bgColor4(){
		
			$.each(vlis4,function(){
				vlis4.removeClass("active")
				vlis4.eq(num4).addClass("active")
			})

		
		}
	
//服装配饰-------------------------------------------
var vbanner5=$("#garmentAcc .detail_wrap .hurdle_sec>.img");
	var vlis5=$("#garmentAcc .detail_wrap .hurdle_sec .ctrl li");
	var vctrlp5=$("#garmentAcc .detail_wrap .hurdle_sec .prev");
	var vctrln5=$("#garmentAcc .detail_wrap .hurdle_sec .next");
	var vbannersec5=$("#garmentAcc .detail_wrap .hurdle_sec")
	var num5=0;
	var flag5=true;
	var timer5=null;
    timer5=setInterval(move5,2000);
		function move5()	{							
			if(flag4){			
				flag5=false;				
					num5++;
				if(num5>4){
					vbanner5.animate({marginLeft:-439*num5},500,function(){						
						num5=0;
						bgColor5()
						vbanner5.css("marginLeft","0");
						flag5=true;						
					})					
				}else{
					vbanner5.animate({marginLeft:-439*num5},500,function(){
						bgColor5()
						flag5=true;
					})
				}			
			}
		}	

			
			vlis5.click(function(){
				num5=$(this).index();
				bgColor5();
				vbanner5.animate({marginLeft:-439*num5},500,function(){})
			});
		
        vbannersec5.hover(function(){
        	clearInterval(timer5)
			vctrlp5.stop().animate({opacity:0.5},200)
			vctrln5.stop().animate({opacity:0.5},200)
        },function(){
        	timer5=setInterval(move5,2000);
			vctrlp5.stop().animate({opacity:0},200)
			vctrln5.stop().animate({opacity:0},200)
        })
						
		vctrln5.click(function(){
		    move5()
		})
		vctrlp5.click(function(){
		    if(flag5){
				flag5=false;
					num5--;
				if(num5<0){
					vbanner5.css("marginLeft",-439*(vlis5.length)+'px');	
					num5=vlis5.length-1;
					bgColor5();
					vbanner5.animate({marginLeft:-439*num5},500,function(){
						flag5=true;
					})
				}else{
					bgColor5();
					vbanner5.animate({marginLeft:-439*num5},500,function(){
						flag5=true;
					})
				}
			}
		})
	
		function bgColor5(){
		
			$.each(vlis5,function(){
				vlis5.removeClass("active")
				vlis5.eq(num5).addClass("active")
			})

		
		}
		//脚部----------------------------------
	$("#thefoot").load("footer.html")
	
	//右边悬浮---------------------------------------
	
	$("#myCenter>li>div").hover(function(){
		
        $(this).css("background","#F15C18")
		$(this).stop().animate({width:"106px"})
	},function(){
		$(this).css("background","#343a3a")
		$(this).stop().animate({width:"34px"})

	})
	
	$("#topRight").click(function(){
		$("html,body").animate({scrollTop:"0"},800)
		
	})
	
	//左边悬浮----------------------------
	
	$(window).scroll(function(){
				if($(window).scrollTop()>$("#content>.con_left").scrollTop()+760){
					$("#leftSuspended").css("display","block");
				}else{
					$("#leftSuspended").css("display","none");
				}
			})

    $("#leftSuspended>p").click(function(){
    	$("html,body").animate({scrollTop:"0"},800)
    })
    
    $("#leftSuspended>li")
    $(window).scroll(function(){
    	if($(window).scrollTop()>=$("#content>.con_left").scrollTop()+760&&
    	$(window).scrollTop()<=$("#content>.con_left").scrollTop()+546+760){
    		$("#leftSuspended>li").eq(0).css("background","#F15C18")
    	}else{
    		$("#leftSuspended>li").eq(0).css("background","white")
    	}

    	if($(window).scrollTop()>=$("#content>.con_left").scrollTop()+760+546&&
    	$(window).scrollTop()<=$("#content>.con_left").scrollTop()+546+760+560){
    		$("#leftSuspended>li").eq(1).css("background","#F15C18")
    	}else{
    		$("#leftSuspended>li").eq(1).css("background","white")
    	}
    	
    	if($(window).scrollTop()>=$("#content>.con_left").scrollTop()+760+546+560&&
    	$(window).scrollTop()<=$("#content>.con_left").scrollTop()+546+760+560+600){
    		$("#leftSuspended>li").eq(2).css("background","#F15C18")
    	}else{
    		$("#leftSuspended>li").eq(2).css("background","white")
    	}
    	
    	if($(window).scrollTop()>=$("#content>.con_left").scrollTop()+760+546+560+600&&
    	$(window).scrollTop()<=$("#content>.con_left").scrollTop()+546+760+560+600+600){
    		$("#leftSuspended>li").eq(3).css("background","#F15C18")
    	}else{
    		$("#leftSuspended>li").eq(3).css("background","white")
    	}
    	
    	if($(window).scrollTop()>=$("#content>.con_left").scrollTop()+760+546+560+600+600&&
    	$(window).scrollTop()<=$("#content>.con_left").scrollTop()+546+760+560+600+600+620){
    		$("#leftSuspended>li").eq(4).css("background","#F15C18")
    	}else{
    		$("#leftSuspended>li").eq(4).css("background","white")
    	}
    	
    	if($(window).scrollTop()>=$("#content>.con_left").scrollTop()+760+546+560+600+600+620&&
    	$(window).scrollTop()<=$("#content>.con_left").scrollTop()+546+760+560+600+600+620+300){
    		$("#leftSuspended>li").eq(5).css("background","#F15C18")
    	}else{
    		$("#leftSuspended>li").eq(5).css("background","white")
    	}
    	
    })
    
    $("#leftSuspended>li").eq(0).click(function(){
    		$("html,body").animate({scrollTop:$("#content>.con_left").scrollTop()+761},600)
    	})
    $("#leftSuspended>li").eq(1).click(function(){
    		$("html,body").animate({scrollTop:$("#content>.con_left").scrollTop()+760+547},600)
    	})
    $("#leftSuspended>li").eq(2).click(function(){
    		$("html,body").animate({scrollTop:$("#content>.con_left").scrollTop()+546+760+561},600)
    	})
    $("#leftSuspended>li").eq(3).click(function(){
    		$("html,body").animate({scrollTop:$("#content>.con_left").scrollTop()+546+760+560+601},600)
    	})
    $("#leftSuspended>li").eq(4).click(function(){
    		$("html,body").animate({scrollTop:$("#content>.con_left").scrollTop()+546+760+560+600+601},600)
    	})
    $("#leftSuspended>li").eq(5).click(function(){
    		$("html,body").animate({scrollTop:$("#content>.con_left").scrollTop()+760+546+560+600+600+621},600)
    	})
    
    
    
    
    $("#liveStreaming .motion_graph>img").animate({left:"-200px",top:"-61px",width:"290px",height:"120px"},1000)   
    $("#liveStreaming .motion_graph>img").animate({top:"0"},1000)
    $("#liveStreaming .motion_graph>img").animate({left:"0"},1000)
    $("#liveStreaming .motion_graph>img").animate({width:"90px",height:"59px"},1000)
    var ghj=setInterval(function(){
    $("#liveStreaming .motion_graph>img").animate({left:"-200px",top:"-61px",width:"290px",height:"120px"},1000)   
    $("#liveStreaming .motion_graph>img").animate({top:"0"},1000)
    $("#liveStreaming .motion_graph>img").animate({left:"0"},1000)
    $("#liveStreaming .motion_graph>img").animate({width:"90px",height:"59px"},1000)
    },5000)
   

    
    
    $("#myCenter li").eq(1).click(function(){
				window.location.href="shoppingCart.html"
			})










































































































































})
	