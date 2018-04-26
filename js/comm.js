$(document).ready(function() {

    $('.banner').myscroll({
            picElem: $('#move'), //图片父级
            ctrlElem: $('#ctrl'), //控制条父级(包括小圆点和左右箭头)
            isLibs: true, //是否创建底部小圆点(样式均可自定义调整),默认向lib添加单独类名，详情见调用后dom结构
            isArrows: false, //是否创建左右箭头(样式均可自定义调整)
            autoPlay: true, //是否自动播放
            playTime: 2000, //自动播放间隔时间
            playSpeed: 700, //图片切换速度 
            effect: 'fade' //轮播的改变方式 top(向上) left(向左) fade(淡入淡出)
    });

    $('.group_banner').myscroll({
        picElem: $('#group_move'), //图片父级
        ctrlElem: $('#group_ctrl'), //控制条父级(包括小圆点和左右箭头)
        isLibs: false, //是否创建底部小圆点(样式均可自定义调整),默认向lib添加单独类名，详情见调用后dom结构
        isArrows: true, //是否创建左右箭头(样式均可自定义调整)
        autoPlay: true, //是否自动播放
        playTime: 2000, //自动播放间隔时间
        playSpeed: 700, //图片切换速度 
        effect: 'left' //轮播的改变方式 top(向上) left(向左) fade(淡入淡出)
    });

    $('#choiceness_banner').myscroll({
        picElem: $('#choiceness_move'), //图片父级
        ctrlElem: $('#choiceness_ctrl'), //控制条父级(包括小圆点和左右箭头)
        isLibs: true, //是否创建底部小圆点(样式均可自定义调整),默认向lib添加单独类名，详情见调用后dom结构
        isArrows: true, //是否创建左右箭头(样式均可自定义调整)
        autoPlay: true, //是否自动播放
        playTime: 4000, //自动播放间隔时间
        playSpeed: 700, //图片切换速度 
        effect: 'right' //轮播的改变方式 top(向上) left(向左) fade(淡入淡出)
    });

    $('#choiceness_banner').hover(function(){
        $('#choiceness_ctrl .arrow').show();
    },function(){
        $('#choiceness_ctrl .arrow').hide();
    })


    $('#mabyLike ul li').hover(function(){
        $(this).find('h6').show();
        $(this).css('cursor','pointer');
        // $($(this).find('h6').click(function(){
        //     window.location.href="goods_details.html";
        // }));
    },function(){
        $(this).find('h6').hide();
    })

	$('#top ul li:nth-child(5)').hover(function(){
		$('#shoopMarsk').show();
	},function(){
		$('#shoopMarsk').hide();
	});

	$('#top ul li:nth-child(7)').hover(function(){
		$('#serviceMarsk').show();
	},function(){
		$('#serviceMarsk').hide();
	});

	$('#top ul li:nth-child(9)').hover(function(){
		$('#myshopMarsk').show();
	},function(){
		$('#myshopMarsk').hide();
	});

    // 商品分类
    $('#nav ul li:not(.nav_line)').hover(function(){
    	$(this).addClass('whiteBg');
		$('#nav_type').show();
		$('#nav_type_foryYou').show();
    	
    },function(){
    	$(this).removeClass('whiteBg');
    	$('#nav_type').hide();
    	$('#nav_type_foryYou').hide();
    })

    $('.search input').click(function(){
    	$('.history').show();
    });
    $('.search input').blur(function(){
        $('.history').hide();
    });
    $('.search span').hover(function(){
    	$('.search_type').show();
    },function(){
    	$('.search_type').hide();
    });

    $('#fixNav span#s').hover(function(){
        $('#fixNav_search_type').show();
    },function(){
        $('#fixNav_search_type').hide();
    });

    // 历史记录
    $('#fixNav #fixNav_input').click(function(){
        $('#history').show();
    });
    $('#fixNav #fixNav_input').blur(function(){
        $('#history').hide();
    })


    // 回到顶部
   $(window).scroll(function (){
        var st = $(this).scrollTop();
        if (st > 1) {
            $('#sidebar ul li:last').show();
            $('#sidebar ul li:last').click(function(){
                $('body,html').animate({ scrollTop: 0 }, 100);
            })
        }else{

            $('#sidebar ul li:last').hide();
        }

        if (st > 700) {
            $('#fixNav').show();
        }else{
            $('#fixNav').hide();
        }

        if (st >1120) {
            $('#fix').show();
        }else{
            $('#fix').hide();
        }

    });

   $('.fix ul li').click(function(event) {
        var flag = $(this).index();
        console.error(flag);
        $('.fix ul li').find('a').removeAttr('style');
        $('.fix ul li').eq(flag).find('a').css('border-top','5px solid red');
        console.log($('.fix ul li').eq(flag));
   });

   // 固定导航条
   // $('#fixNav em').hover(function(){
   //      console.log(1);
   //      var html = $('#nav').html();
   //      $('#fixNav div:last()').removeAttr('hidden');
   //      $('#fixNav div:last()').append('<div class="nav" id="black_nav">'+html+'</div>');

   // },function(){
   //      $('#fixNav div:last()').attr('hidden', 'hidden');
   // });

   // 红人穿搭 图片翻转
    function rotate(){
        var random = parseInt((Math.random()*5));
        $('.item').eq(random).find(".correct").children().children().removeClass();
        $('.item').eq(random).find(".opposite").children().children().removeClass();
        $('.item').eq(random).find(".correct").children().children().addClass("test");
        $('.item').eq(random).find(".opposite").children().children().addClass('test2');
        setTimeout(function(){
            $('.item').eq(random).find(".correct").children().children().removeClass();
            $('.item').eq(random).find(".opposite").children().children().removeClass();
            $('.item').eq(random).find(".correct").children().children().addClass("test2");
            $('.item').eq(random).find(".opposite").children().children().addClass('test');
        },3000);
    }
    setInterval(rotate, 4000);

    // 商品详情页 数量
    $('#detail_info ul li:nth-child(4)>button').click(function(){
        var num = parseInt($('#detail_info ul li:nth-child(4)>input').val());
        var id = $(this).attr('id');
        console.log(id);
        if ( id == 'plus') {
            num += 1;
            $('#detail_info ul li:nth-child(4)>input').val(num);
        }else{
            num -= 1;
            $('#detail_info ul li:nth-child(4)>input').val(num);
        }
        if (num <= 0) {
            $('#detail_info ul li:nth-child(4)>button#div').attr('disabled','disabled');
        }else{
             $('#detail_info ul li:nth-child(4)>button#div').removeAttr('disabled');  
        }
        if (num >= 99) {
            $('#detail_info ul li:nth-child(4)>button#plus').attr('disabled','disabled');
        }else{
            $('#detail_info ul li:nth-child(4)>button#plus').removeAttr('disabled');  
        }
    })

    // 店铺详情
    $('#shop_info').hover(function(){
        $('#shop_info_detail').show();
        $('#shop_info_detail').css('background-color','rgb(246,246,246)');
    },function(){
        $('#shop_info_detail').hide();
    });

    // 店铺全部商品
    $('#head_nav>ul>li:nth-child(3)').hover(function(){
        $('#all_goods').show();
    },function(){
        $('#all_goods').hide();
    });

    //
    $('#detail_info h4>em').hide();
    $('#detail_info h4').hover(function() {
        $('#detail_info h4>em').show();
    }, function() {
        $('#detail_info h4>em').hide();
    });

    // 商品详情 滚动
    var top = 0;
    var t = 0;
    $(window).scroll(function(e){
        top = $(this).scrollTop();
        console.log(top);
        if (top < 1100) {
            $('#moreInfo_right').css('position','static');
            $('#moreInfo_right').css('float','right');
        }else{
             $('#moreInfo_right').css('clear','right');
             $('#moreInfo_right') .css('position','fixed');
        }
        
        if(t<=top){//下滚  
            if (top <= 600) {
                cl(0);
            }
            if (top > 1130 && top <= 1300) {
                 cl(1);
            }
            if (top > 1300 && top < 1521) {
                cl(2);
            }
            if (top > 1521 && top < 8825) {
                cl(3);
            }

            if (top > 8825 && top < 9100) {
                cl(4);
            }
        }else{//上滚  
            if (top < 600) {
                cle(0);
            }
            if (top > 1130 && top < 1283) {
                cle(1);
            }
            if (top > 1283 && top < 1520) {
                cle(2);
            }
            if (top > 1520 && top <8824) {
                cle(3);
            }

            if (top > 8824 && top < 9000) {
                cle(4);
            }  
        }
        setTimeout(function(){t = top;},0);    
    
    });

    var cl = function(i){
        if (i>0) {
            $('#moreInfo_right ul li').eq(i-1).find('p').addClass('goods_right');
            $('#moreInfo_right ul li').eq(i-1).find('p').removeClass('goods_right_red');
            $('#moreInfo_right ul li').eq(i-1).find('a').removeClass('b');
        }else{
            $('#moreInfo_right ul li').eq(0).find('p').addClass('goods_right');
        }
        $('#moreInfo_right ul li').eq(i).find('p').removeClass('goods_right');
        $('#moreInfo_right ul li').eq(i).find('p').addClass('goods_right_red');
        $('#moreInfo_right ul li').eq(i).find('a').addClass('b');
        $('#moreInfo_right ul li').each(function(){
            $(this).removeClass('goods_right_red');
            $(this).removeClass('b');
        })
        
    }

    var cle = function(i){
        $('#moreInfo_right ul li').eq(i).find('p').removeClass('goods_right_red');
        $('#moreInfo_right ul li').eq(i).find('p').addClass('goods_right');
        $('#moreInfo_right ul li').eq(i).find('a').removeClass('b');

        $('#moreInfo_right ul li').eq(i-1).find('p').addClass('goods_right_red');
        $('#moreInfo_right ul li').eq(i-1).find('p').removeClass('goods_right');
        $('#moreInfo_right ul li').eq(i-1).find('a').addClass('b');

    }
    var flag ;
    $('#moreInfo_right ul li').hover(function() {
       flag = $(this).find('p').hasClass('goods_right_red');
        $(this).find('p').removeClass('goods_right');
        $(this).find('p').addClass('goods_right_red');
        $(this).find('a').addClass('b');
    }, function() {        
        if (!flag) {
            $(this).find('p').removeClass('goods_right_red');
            $(this).find('p').addClass('goods_right');
            $(this).find('a').removeClass('b'); 
        }
    });

    $('#moreInfo_right ul li').click(function(){
        console.log('aaaaaaa');
         $('#moreInfo_right ul li').find('p').removeClass('goods_right_red');
         $('#moreInfo_right ul li').find('a').removeClass('b');
         $(this).find('p').addClass('goods_right_red');
         $(this).find('a').addClass('b');
    });

    $('.fix div:nth-of-type(2) li:nth-child(2)').click(function(){
        $('#moreInfo_middle_top').hide();
        $('#moreInfo_middle_top3').hide();
        $('#moreInfo_middle_top2').show();
        $('#moreInfo_right ul').hide()
    })

    $('.fix div:nth-of-type(2) li:nth-child(1)').click(function(){
        $('#moreInfo_middle_top').show();
        $('#moreInfo_middle_top2').hide();
        $('#moreInfo_middle_top3').hide();
        $('#moreInfo_right ul').show()
    })

     $('.fix div:nth-of-type(2) li:nth-child(3)').click(function(){
        $('#moreInfo_middle_top3').show();
        $('#moreInfo_middle_top').hide();
        $('#moreInfo_middle_top2').hide();
        $('#moreInfo_right ul').hide()
    })


    



});  