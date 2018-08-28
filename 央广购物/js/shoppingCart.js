	$(function(){
		$("#thefoot").load("footer.html")
		
		$("#header .wrap>ul>li").last().css("width","90px")		
		$("#header .wrap>ul>li:lt(3)").hover(function(){
			$(this).children().eq(0).css({border:"1px solid #ccc",background:"white"})
			$(this).children().eq(0).stop().animate({height:"95px"},100)
		},function(){	
			$(this).children().eq(0).stop().animate({height:"20px"},100,function(){
				$(this).css({border:"none",background:"#f6f6f6"})
			})
		})
		//购物车数据加载0-------------------------------------------------------------	
		//购物车数据加载0-------------------------------------------------------------	
	var cookiearr=getAll();
	
	//获取表格
	 
	var str="";
	for(var i=0;i<cookiearr.length;i++){
		str+='<tr>'
				+'<td><input type="checkbox" name="" id="" value=""  checked="checked"/>'
					+'<img src="'+cookiearr[i].imgsrc+'"/>'
					+'<p>'+cookiearr[i].name+'</p>'
					+'<div class="">'
						+'<input type="button" name="" id="" value="-" class="tl"/>'
						+'<input type="text" name="" id="" value="'+cookiearr[i].pid+'" />'
						+'<input type="button" name="" id="" value="+" class="gl"/>'
					+'</div>'
						
					+'<span class="unit_cost">'+cookiearr[i].pcount+'</span>'
					+'<span class="money">'+cookiearr[i].pcount*cookiearr[i].pid+'</span>'
					+'<i class="collect"></i>'
					+'<i class="del"></i>'
				+'</td>'
			+'</tr>'
		
				
	}
	$("table").html(str);
	//获取总金额的封装
	allprice();
	function allprice(){
		var aa=0;
	$.each($("table tr td>input"), function(index,ele) {
		
		if(ele.checked==true){
		var bb=Number(($(this).siblings(3).children().eq(1).val()));
		var cc=Number($(this).siblings().eq(3).html())
		var dd=bb*cc;
		aa+=bb*cc

        $(this).siblings().eq(4).html(dd)
		console.log(aa)
		}else{
			$(this).siblings().eq(4).html(0)
		}
		
	});
	$("#clearing>ul>li").eq(2).children().eq(1).html(aa)
	}
	
	$("table tr td>input").change(function(){
		allprice();
		allnum();
		var flagda=true;
		$.each($("table tr td>input"), function(index,ele) {
			if(!ele.checked){
				flagda=false;	
			}
			if(flagda){
			$("#content>input").attr("checked",true)
		}else{
			$("#content>input").attr("checked",false)
		}
		});
	resetcookie()
	})
	
	$(".del").click(function(){
		$(this).parent().parent().remove();
		allprice();
		allnum();
		resetcookie()
	})
	$("#content>input").change(function(){
		if($(this).attr("checked")){			
			$("table tr td>input").attr("checked",true)
		}else{
			$("table tr td>input").attr("checked",false)
		}
	allnum();allprice()
	resetcookie()
	})
	

	function allnum(){
		
		var bb=0;
		var cc=0;
		$.each($("table div input[type='text']"), function(index,ele) {
			
			if($(this).parent().siblings().eq(0).attr("checked")){
				bb+=Number($(this).attr('value'));
				cc++
			}	
			
		$("#clearing>ul>li").eq(1).children().eq(1).html(bb)
		$("#clearing>ul>li").eq(0).children().eq(1).html(cc)
	    });
	    $("#middle h3>div>div>.mask").width(bb)
	   if(bb>=100){
				alert("购物车已装满了，请先清空购物车")
				$("table tr td").children().eq(3).children().eq(1).attr("disabled")
				$("table div .gl").attr("disabled","true")
				$("#middle h3>div>div>.mask").width("100px")
			}else{
				$("table div .gl").removeAttr("disabled")
			}
	};
	
    allnum();		
		
	$("#clearing>input").change(function(){
		console.log($(this).attr('checked'));
		if($(this).attr('checked')){
			$("table tr td>input").attr("checked",true)
		}else{
			$("table tr td>input").attr("checked",false)
		}	
		resetcookie();
		
	})
	$("#clearing>span").click(function(){
		$.each($("table tr td>input"), function() {
			if($("table tr td>input").attr('checked')){
			   $(this).parent().parent().remove()
		    } 
		});	
		allnum();allprice()
		resetcookie()
		
	})
	
	$("table div .tl").click(function(){
		if($(this).next().attr("value")>1){
			$(this).next().attr("value",$(this).next().val()-1);
		}else{
		    $(this).attr("disabled")	
		}
		
		allnum();allprice();
		resetcookie()
	})	
	$("table div .gl").click(function(){	
		
		$(this).prev().attr("value",Number($(this).prev().val())+1);
		allnum();allprice();
		resetcookie()
	})
	$("table tr td").children().eq(3).children().eq(1).blur(function(){
		if($(this).val()<=0){
			$(this).val(1)
		}
		allnum();allprice();
		resetcookie()
	})
	function resetcookie(){
		var cookiearr=[];
	    $.each($("table tr td"), function(index,ele) {
		    var obj={};		    
			obj.imgsrc=$(this).children().eq(1).attr("src");
			obj.name=$(this).children().eq(2).html();			
			obj.pcount=$(this).children().eq(4).html();		
		    obj.pid=Number($(this).children().eq(3).children().eq(1).val());
		    console.log(obj);
		    var cookie=getCookie("datas");
		    cookiearr.push(obj)
		    
	});
	var cookiestr=JSON.stringify(cookiearr);
		setCookie("datas",cookiestr,55);
	}	
		
	
	
//	tab.appendChild(tobody)
//	var cks=document.querySelectorAll(".ck");
//	//获取总价的方法
//	function getTotalprice(){
//		var cks=document.querySelectorAll(".ck");
//		var sum=0;
//		for(var i=0;i<cks.length;i++){
//			//假如被选中 
//			if(cks[i].checked==true){
//				var xiaoji=cks[i].parentNode.parentNode.children[6].innerHTML;
//				console.log(xiaoji)
//				sum+=Number(xiaoji)
//				
//			}
//
//		}
//			return sum;
//	}
//	//每个cks 触发改变事件
//	for(var j=0;j<cks.length;j++){
//		cks[j].onchange=function(){
//			//判定是否全选
//			checkisall();
//			
//		document.getElementById("totalcount").innerHTML="总价为：￥"+getTotalprice();
//		}
//		
//	
//	}
//	//判定全选的函数
//	var checkall=document.querySelector("#allCheck");
//	function checkisall(){
//		var flag=true;
//		for(var i=0;i<cks.length;i++){
//			if(cks[i].checked==false){
//				flag=false;
//			}
//		}
//	
//		if(flag){
//			checkall.checked=true;
//		}else{
//			checkall.checked=false;
//		}
//
//	}
//	//全选操作
//		checkall.onchange=function(){
//			
//			for(var i=0;i<cks.length;i++){
//				cks[i].checked=this.checked;
//				
//			}
//			document.getElementById("totalcount").innerHTML="总价为：￥"+getTotalprice();
//		}
//
//	//加减操作
//	var jian=document.querySelectorAll(".jian");
//	var adds=document.querySelectorAll(".add");
//	
//	for(var i=0;i<adds.length;i++){
//		//加
//		adds[i].onclick=function(){
//			var inp=this.previousElementSibling;
//			inp.value=Number(inp.value)+1;
//			var tr=this.parentNode.parentNode;
//			var pid= tr.getAttribute("pid");
//			var price=Number(tr.children[5].innerHTML);
//			tr.children[6].innerHTML=Number(inp.value)*price;
//			
//			//更新数量
//			updateNum(pid,1);
//			//判断是否被选中
//			var thisck=tr.children[0].children[0];
//			if(thisck.checked==true){
//				document.getElementById("totalcount").innerHTML="总价为：￥"+getTotalprice();
//				
//			}
//			
//		}
//		//减
//		jian[i].onclick=function(){
//			var inp=this.nextElementSibling;
//			inp.value=Number(inp.value)-1;
//			var tr=this.parentNode.parentNode;
//			var pid=tr.getAttribute("pid");
//			
//			if(inp.value<1){
//				inp.value=1;
//			}else{
//				updateNum(pid,-1);
//			}
//		var price=Number(tr.children[5].innerHTML);
//		tr.children[6].innerHTML=Number(inp.value)*price;
//			//判断是否被选中
//			var thisck=tr.children[0].children[0];
//			if(thisck.checked==true){
//				document.getElementById("totalcount").innerHTML="总价为：￥"+getTotalprice();
//				
//			}
//			
//			
//		}
//		//输入框
//		var inputs=document.querySelectorAll(".pnum");
//		inputs[i].onblur=function(){
//			//获取输入框的值
//			var inpval=parseInt(this.value);
//			//不能输入非数字和<1
//			if(inpval<1||isNaN(inpval)){
//				alert("请输入正确的数字")
//				this.value=1;
//				return ;
//			}
//			var tr=this.parentNode.parentNode;
//			var price=Number(tr.children[5].innerHTML);
//			tr.children[6].innerHTML=inpval*price;
//			var tck=tr.children[0].children[0];
//			if(tck.checked==true){
//					document.getElementById("totalcount").innerHTML="总价为：￥"+getTotalprice();
//			}
//			//改变cookie值
//			var pid=tr.getAttribute("pid");
//			var cookiearr=getAll();
//			for(var j=0;j<cookiearr.length;j++){
//				if(pid==cookiearr[j].pid){
//					cookiearr[j].pcount=inpval;
//				}
//				
//			}
//			//把改变数量后的cookie数组设置回cookie
//			var cookiestr=JSON.stringify(cookiearr);
//			setCookie("datas",cookiestr,55);
//			
//		}
//		//删除方法
//		var dels=document.querySelectorAll(".del");
//		dels[i].onclick=function(){
//			
//			var tr=this.parentNode.parentNode;
//			
//			//改变cookie数组中值
//			var pid=tr.getAttribute("pid");
//			tr.remove();
//			tr=null;
//			delcookie(pid);
//			
//			
//			
//	}
	   
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});

