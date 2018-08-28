$(function(){
	$("#thefoot").load("footer.html")
	
	var btns=$("#enterBox>.user_enter>ul>li");
	var mark1=$("#enterBox>.user_enter>.mark1");
	var mark2=$("#enterBox>.user_enter>.mark2");
	var under_line1=$("#enterBox>.user_enter>.under_line1")
	var under_line2=$("#enterBox>.user_enter>.under_line2")
	var user=$("#enterBox>.user");
	var phone=$("#enterBox>.phone")
	
	btns.eq(0).click(function(){
		$(this).addClass("active").siblings().removeClass("active")
		mark1.css("display","block");under_line1.css("display","block")
		mark2.css("display","none");under_line2.css("display","none")
		phone.animate({right:"524px"},600).fadeOut(600)
		user.animate({right:"64px"},600).fadeIn(600)
	})
	btns.eq(1).click(function(){
		$(this).addClass("active").siblings().removeClass("active")
		mark2.css("display","block");under_line2.css("display","block")
		mark1.css("display","none");under_line1.css("display","none")
		user.animate({right:"524px"},600).fadeOut(600)
		phone.animate({right:"64px"},600).fadeIn(600)
	})
//	
//	$("#enterBox>.form>.ac_theft>dd>input").
//	$("#enterBox>.form>.pass>dd>input")
//	$("#enterBox>.form>.auth_code>dd>input")
	
	$(".form input[type='button']").click(function(){
		
		if($("#enterBox>.form>.ac_theft>dd>input").val()==localStorage.usernum&&
		$("#enterBox>.form>.pass>dd>input").val()==localStorage.password&&
		$("#enterBox>.form>.auth_code>dd>input").val()=="fwaf"){
			
			sessionStorage.duernum=localStorage.usernum
			sessionStorage.dpassword=localStorage.password
			window.location.href="index.html"
		}else{
			alert("手机号或密码或验证码错误")
		}
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})