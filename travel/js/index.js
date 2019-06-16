
	
			//获取焦点时
			var d_value = $(".txt").val();
			$(".txt").focus(function(){//首先，定义一个变量存放我们的原始值也就是默认的请输入目的地,得到这个默认值时做判断，如果这个值等于默认值，则设置为空；
				if($(this).val() == d_value){
					//$(this)等于当前的txt
					$(this).val("");//设置当前输入框的值为空
				}
			
			});
			//失去焦点时
			$(".txt").blur(function(){//失去焦点时再做一次判断，如果为空，赋给他初值
				if($(this).val()==""){
					
				$(this).val(d_value);
					
				}
			
				
			});
			
			//固定导航栏
			
			
			//鼠标放上去显示，离开隐藏
			//使用hover来实现，hover有两个方法，一个show，一个hide
		  $("#Nav .mainNav ul li").hover(function(){
				$(this).find(".secondmenu").show();//显示出来
				$(this).addClass("hover");//等于给li添加class=“hover”这样一个样式，鼠标放上去这个li元素会显示让用户看到鼠标放到了这个元素上
				
			},function(){
				$(this).find(".secondmenu").hide();//隐藏
				$(this).removeClass("hover");//鼠标移开时特效消失
			});
			
		//***********广告轮播图*********
		
		var _index=0;//声明一个变量_index,初始化，因为每一个图片都有一个序列号，每个按钮也是
		var timePlay=null;//声明一个定时器
		$("#Adv .ImgList").eq(0).show().siblings("div").hide();//eq(0)进入页面显示第一张图片，其他隐藏
		$("ul.button li").hover(function(){  /*鼠标放在上面*/
			
		clearInterval(timePlay); //鼠标放上去的时候他还在轮播，比较乱，因此我们鼠标放上去时自动轮播应该消失
		 _index=$(this).index();//获取当前li的序列号
		//alert(_index);弹窗测试
		$(this).addClass("hover").siblings().removeClass("hover");//siblings跟当前的li同等级的除了它本身的其他的li移除掉，放到哪个按钮上面那个变为白色，鼠标已开后变回黑色
		//fadeIn()   淡入    fadeOut  淡出，实现渐变
		$("#Adv .ImgList").eq(_index).fadeIn().siblings("div").fadeOut();
		//找到和按钮序列号相同的图片，显示出来，其他图片隐藏, 此时按钮不见，ul和div是同等级的，应该找同等级的div元素siblings（”div“）
		
		
		},function(){/*鼠标移开*/ //鼠标移开的时候，再次调用播放器
		
		autoPlay();
		});
		
		//自动轮播,函数实现
		//构建自动轮播函数
		 function autoPlay(){
		 	//设置定时器；
		 	timePlay=setInterval(function(){//定时器保存到变量里面
		 	_index++;//自动轮播序列号加1
		 	//alert(_index);
		 	//当序列号加到2时，需改变按钮的样式，获取到ul下的li，跟他同等级的
		 	if(_index<4){
		 		if(_index==3){_index=-1}//在这里再进行一次判断，当他执行到第四张图时直接将值变为-1，实现无缝连接，否则第四张图到第一张就会等4秒
		 	$("ul.button li").eq(_index).addClass("hover").siblings().removeClass("hover");//按钮自动切换
            $("#Adv .ImgList").eq(_index).fadeIn().siblings("div").fadeOut();//图片也要跟住换
		 	//alert(_index);

		 	}//else{_index=-1;}//设置成-1，地址加加后变为0，就是播放第一章图
		 	},2000);//1,要执行的内容，2，时间
		
		 
		
		 };
		autoPlay();//调用和执行函数
		
		
		
		//第一部分-------轮播按钮
		
		var _index1 = 0;
		var timeplay1=null;//声明一个定时器
		
		
		$("#Part1_Left ul.scrollImg_button li").hover(function(){
			clearInterval(timePlay1);
			_index1 = $(this).index();//获取这个当前序列号
		
		$(this).addClass("hover").siblings().removeClass("hover");//添加class=hover显示按钮；
		$("#Part1_Left .Part_imgCon .scrollImg").animate({/*left:"-477px"*不能写死,用序列号乘以477*/left:"-"+_index1*477+"px"},1000);
		$("#Part1_Left ul.scrollingTxt li").eq(_index1).show().siblings().hide();//序列号相同的li显示，其他的隐藏
			
		},function(){
			autoPlay1();
			
		});
		
		
		
		function autoPlay1(){
			
			timePlay1=setInterval(function(){
				
				if(_index1<4){
				
				if(_index1==3){_index1=-1;}
				_index1++;
				$("#Part1_Left ul.scrollImg_button li").eq(_index1).addClass("hover").siblings().removeClass("hover");
				//alert(_index1);
				$("#Part1_Left ul.scrollingTxt li").eq(_index1).show().siblings().hide();
				$("#Part1_Left .Part_imgCon .scrollImg").animate({left:"-"+_index1*477+"px"},1000);
				}else{_index1=-1;}
			},2000);
			
		};
		autoPlay1();
			
			
			
			
			
			
			
			
			//第一部分--右边选项卡按钮
			 
			$("#Part1_Right .select_btn li").mouseover(function(){/*鼠标放上去*/
			$(this).addClass("hover").siblings().removeClass("hover");//显示按钮
			//$(this).index()//获取序列号
			$("#Part1_Right .select_context .select_context1").eq($(this).index()).show().siblings().hide();//让图片获取和选项卡相同的序列号
			
			
			});
			
			//选项卡内容动画制作文字滑动
			$("#Part1_Right .select_context1 ul.sel_Img li").hover(function(){
				$(this).find("p").animate({height:"43px"},200);//find查找到这个p标签，设置动画，鼠标放上去让他的高度在200秒内变为43
				
				
				
			},function(){
				//鼠标移开，高度重新为0
				$(this).find("p").animate({height:"0px"},200)
				
			})
			
			
	