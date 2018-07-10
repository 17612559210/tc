$(function(){
	var bookTypes=JSON.parse(localStorage.getItem("bookTypes"));
	var taoshutuan=JSON.parse(localStorage.getItem("taoshutuan"));
	var newbooks=JSON.parse(localStorage.getItem("newbooks"));
	var guessLikes=JSON.parse(localStorage.getItem("guessLikes"));
	var selfSupport=JSON.parse(localStorage.getItem("selfSupport"));
	var pressList=JSON.parse(localStorage.getItem("pressList"));
	//图书分类
	for(var i in bookTypes){
		var div=$("<div class=dddiv1 num="+i+"></div>");
		var p=$("<p class=dp1>"+bookTypes[i].title+"<i class='icon iconfont icon-arrow-right-copy'></i></p>");
		div.append(p);
		var p1=$("<p></p>");
		for(var j=0;j<bookTypes[i].list.length;j++){
			var span=$("<span class=dspan1></span>");
			var a=$("<a href=''>"+bookTypes[i].list[j].name+"&nbsp;</a>");
			span.append(a);
			p1.append(span);
		}
		div.append(p1);
		$(".ddiv1").append(div);		
	}

	//图书分类悬浮事件
	$(".ddiv1>div").mouseover(function(){
		$(".hiddens").html("");
		var num=$(this).attr("num");
		var div=$("<div class=hiddendiv></div>");
		for(var i=0;i<bookTypes[num].list.length;i++){
			var p=$("<p class=hiddensp1>"+bookTypes[num].list[i].name+"</p>");
			var p1=$("<p class=hiddensp2></p>");
			for(var j=0;j<bookTypes[num].list[i].content.length;j++){
				var a=$("<a href class=hiddensa>"+bookTypes[num].list[i].content[j]+"&nbsp;&nbsp;</a>");
				var li=$("<li></li>");
				$(li).css("display","inline");
				li.append(a);
				p1.append(li);
			}
			div.append(p);
			div.append(p1);	
		}	
		$(".hiddens").append(div);
		$(".hiddens").css("display","block");
	});
	$(".ddiv1>div").mouseout(function(){
		$(".hiddens").css("display","none");
	});
	$(".hiddens").mouseover(function(){
		$(".hiddens").css("display","block");
	});
	$(".hiddens").mouseout(function(){
		$(".hiddens").css("display","none");
	});
	
	


	//轮播图
	for(var i in slides){
		var div=$("<div class='swiper-slide'></div>");
		var imgs=$("<img src='imgs/slides/"+slides[i]+"'>");
		div.append(imgs);
		$(".swiper-wrapper").append(div)
	}
	new Swiper(".swiper-container",{
		autoplay:true,
		loop:true,
		pagination:{
			el:".swiper-pagination"
		},
		navigation:{
			nextEl:".swiper-button-next",
			prevEl:".swiper-button-prev"
		}
	});
	

	//猜你喜欢点击事件
	show5("guessLikes");
	$(".dochange div").click(function(){
		var names=$(this).attr("name");
		$(".ddddiv2linl").html("");
		$(".ddddiv2linr").html("");
		$(".dddiv2rr").html("");
		$(".dochange div").removeClass("add").addClass("remove");
		$(this).addClass("add").removeClass("remove");
		show(".dddiv2lall");
		show5(names);
	});	



	//图书畅销榜
	for(var i in bestSelling){
		var div=$("<div class=dddiv2r></div>");
		var p=$("<p></p>");
		if(i<9){
			var a=$("<a href class=da1>"+'0'+(i*1+1)+"."+bestSelling[i]+"</a>")
		}else{
			var a=$("<a href class=da1>"+(i*1+1)+"."+bestSelling[i]+"</a>")
		}
		p.append(a);
		div.append(p);
		div.append("<i class='icon iconfont icon-arrow-right-copy'></i>")
		$(".ddiv2r").append(div);
	}
	

	//淘书团
	for(var i=0;i<taoshutuan.length;i++){
		var div=$("<div class=ffdiv4></div>");
		var imgs=$("<img src='./imgs/taoshu/"+taoshutuan[i].img+"'>");
		var p=$("<p class=pinf1>"+'<a href>'+taoshutuan[i].desc+'</a>'+"</p>")
		var p1=$("<p class=pinf2>"+'<span class=spaninf1>团购价:￥'+taoshutuan[i].newPrice+'</span>'+'<span class=spaninf2>￥'+taoshutuan[i].oldPrice+'</span>'+"</p>")
		var divs=$("<div class=ffdiv5>"+((taoshutuan[i].oldPrice/taoshutuan[i].newPrice).toFixed(1))+'折'+"</div>")
		div.append(imgs);
		div.append(p);
		div.append(p1);
		div.append(divs);
		$(".fdiv4").append(div);
	}	



	//新书上架
	for(var i=0;i<newbooks.length-1;i++){
		var div=$("<div class=diving1>"+'<p>'+newbooks[i].title+'</p>'+"</div>");
		var divs=$("<div class=diving2>"+'<span class=spaning1>￥'+newbooks[i].newPrice+'</span>'+'<br><br>'+'<span class=spaning2>￥'+newbooks[i].oldPrice+'</span>'+"</div>");
		var p=$("<p class=ping1>"+newbooks[i].author+"</p>");
		var divimg=$("<div class=diving3>"+'<img src=./imgs/newbooks/'+newbooks[i].img+'>'+"</div>");
		$(".g").append(div);
		div.append(p);
		div.append(divs);
		div.append(divimg);
	}
	//鼠标悬浮事件
	$(".diving3").mouseover(function(){	
		show2(this);
	})


	//平台自营
	for(var i in selfSupport){
		var div=$("<div class=divinh1 num="+i+">"+"<span class=spaninh1>"+selfSupport[i].title+"</span>"+"</div>");
	$(".hdiv1r").append(div);
 	}
 	//调用函数创建默认显示
	show3("novel","0");
	//调用函数悬浮事件
	$(".hdiv1r>div").mouseover(function(){
		var num=$(this).attr("num");
		$(".hdiv1r>div").removeClass('hmouseover');
		$(this).addClass('hmouseover');
		$(".hdiv2l").html("");
		$(".hdiv2r").html("");
		show3(selfSupport[num].title,num);
	});
		

	//出版社直销
	//调用创建默认页面
	show4(0);
	//获取左边栏
	for(var i in pressList){
		var div=$("<div class=divini1 num="+i+"></div>");
		var p=$("<p>"+pressList[i].name+"</p>");
		var i=$("<i class='icon iconfont icon-arrow-right-copy'></i>");
		div.append(p);
		div.append(i);
		$(".idiv3-1").append(div);
	}


	//设置点击清空,更换样式
	$(".idiv3-1>div").mouseover(function(){
		$(".idiv3-1>div").removeClass('imouseover');
		$(this).addClass('imouseover');
	});


	//箭头点击事件
	$(".fontup").click(function(){
		$(".idiv3-1").animate({
			"top":"-450px",
		})
	});
	$(".fontdown").click(function(){
		$(".idiv3-1").animate({
			"top":"0px",
		})
	});



	//出版社直销点击事件
	 $(".idiv3-1>div").mouseover(function(){
	 	var num=$(this).attr("num");
	 	$(".idiv4").html("");
	 	show4(num);
	 })

})




//猜你喜欢点击效果方法
function show5(obj){
	var x=JSON.parse(localStorage.getItem(obj));
		$(".ddddiv2linl").html("");
		$(".ddddiv2linr").html("");
		$(".dddiv2rr").html("");
		var imgs=$("<img src='imgs/"+obj+"/"+x[0].img+"'>");
		var p=$("<p class=pind1>"+x[0].title+'<br><br>'+'<span class=spanind1>￥'+x[0].newPrice+'</span>'+'<span class=spanind2>￥'+x[0].oldPrice+'</span>'+"</p>");
		var p1=$("<p class=pind2>"+x[0].desc+"</p>");
		$(".ddddiv2linl").append(imgs);
		$(".ddddiv2linr").append(p);
		$(".ddddiv2linr").append(p1);				
		for(var j=1;j<x.length;j++){
			var div=$("<div class=dddddind1></div>");
			var imgss=$("<img src='imgs/"+obj+"/"+x[j].img+"'>");
			var p2=$("<p class=pind3>"+x[j].author+'<br><br>'+'<span class=spanind3>￥'+x[j].newPrice+'</span>'+'<span class=spanind4>￥'+x[j].oldPrice+'</span>'+"</p>");
			div.append(imgss);
			div.append(p2);
			$(".dddiv2rr").append(div);
		}
}


	
//动画效果猜你喜欢
function show(obj){
	$(obj).animate({
		"margin-left":"600px",
	},0,function(){
		$(this).animate({
			"margin-left":"0px"
		},300)
	})
}



//出版社直销点击方法
function show4(obj2){
	var div1=$("<div class=divini2>"+"<h2>"+pressList[obj2].name+"</h2>"+"</div>");
	var div2=$("<div class=divini3>"+"<p>"+pressList[obj2].desc+"</p>"+"</div>")
	$(".idiv4").append(div1);
	$(".idiv4").append(div2);
	for(var j=0;j<pressList[obj2].list.length;j++){
	var div3=$("<div class=divini4>"+"<img src=./imgs/press/"+pressList[obj2].list[j].img+">"+"</div>");
	var p=$("<p class=pini1>"+pressList[obj2].list[j].title+"</p>");
	var p1=$("<p class=pini2>￥"+pressList[obj2].list[j].newPrice+'<span>￥'+pressList[obj2].list[j].oldPrice+'</span>'+"</p>");
	div3.append(p);
	div3.append(p1);
	$(".idiv4").append(div3);
	}
}



//动画效果新书上架
function show2(obj){
	$(obj).animate({
		"margin-left":"60px",
	},500,function(){
		$(this).animate({
			"margin-left":"80px"
		},500)
	})	
}


//平台自营效果
function show3(obj,obj2){
	var divs=$("<div class=divinh2>"+"<img src='imgs/selfSupport/"+obj+"/"+selfSupport[obj2].list[0].img+"'>"+"</div>");
	var divss=$("<div class=divinh3>"+"<p>"+selfSupport[0].list[0].title+'/'+selfSupport[obj2].list[0].author+"</p>"+"</div>");
	var divsss=$("<div class=divinh4>"+'<span class=spaninh2>￥'+selfSupport[obj2].list[0].newPrice+'</span>'+'<br><br>'+'<span class=spaninh3>￥'+selfSupport[obj2].list[0].oldPrice+'</span>'+"</div>");
	$(".hdiv2l").append(divs);
	$(".hdiv2l").append(divss);
	$(".hdiv2l").append(divsss);
	for(var j=0;j<selfSupport[obj2].list.length;j++){
		var divright=$("<div class=divinh5></div>");
		var imgs=$("<img src='./imgs/selfSupport/"+obj+"/"+selfSupport[obj2].list[j].img+"'>");
		var p=$("<p class=pinh1>"+selfSupport[obj2].list[j].title+"</p>");
		var p1=$("<p class=pinh2>￥"+selfSupport[obj2].list[j].newPrice+'<span>￥'+selfSupport[obj2].list[j].oldPrice+'</span>'+"</p>")
		divright.append(imgs);
		divright.append(p);
		divright.append(p1);
		$(".hdiv2r").append(divright);
	}
}