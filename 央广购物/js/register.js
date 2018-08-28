$(function(){
	$("#thefoot").load("footer.html")
	$(".phone_reg.phone_reg>.reg_con>.num>dd>input").blur(function(){
		var reg=/^1[3|5|7|8]\d{9}$/;
		if(!reg.test($(this).val())){
						$(this).next().css("display","block");
						
					}else{
						$(this).next().css("display","none");
						localStorage.usernum=$(this).val();
						
					}
	})	
	$(".phone_reg.phone_reg>.reg_con>.num>dd>.pass").blur(function(){
		var reg1=/^\w{6}$/;
		if(!reg1.test($(this).val())){
						$(this).next().css("display","block");
						
					}else{
						$(this).next().css("display","none");
						localStorage.password=$(this).val();
						
					}
	})	
	$(".phone_reg>.reg_con>.verify>dd>input").blur(function(){
		if($(this).val()=="fwaf"){
			$(this).next().css("display","none");
		}else{
			$(this).next().css("display","block")
		}
	})
	
	$(".reg_con>input").click(function(){
		window.location.href="enter.html"
	})
	
	
	
	
	
	
	
})