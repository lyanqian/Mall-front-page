$(document).ready(function($){
    // 购物车
    // $("#cart1").mouseover(function(){
    //     $("#cart2").show();
    //     $("#menu").show();
    // })
    // $("#cart2").mouseout(function(){
    //     $("#cart2").hide();
    //     $("#menu").hide();
    // })
    // $("#menu").mouseover(function(){
    //     $("#cart2").show();
    //     $("#menu").show();
    // })
    // $("#menu").mouseout(function(){
    //     $("#cart2").hide();
    //     $("#menu").hide();
    // })

    // 购物车
    $(".shopCart").hover(function(){
        $("#cart2").show();
        $("#menu").show();
    },function(){
        $("#cart2").hide();
        $("#menu").hide();
    })

    // 轮播图效果
    var timer=null,
        index=0,
        len=$('.bloc').length;
    function slideImg(){
        $("#ban-middle").mouseover(function(){
            if(timer) clearInterval(timer);
        });
        $("#ban-middle").mouseout(function(){
            timer=setInterval(function(){
                index++;
                if(index>=len){
                    index=0;
                }
                //切换图片
                changeImg();
            },2000)
        });
        $("#ban-middle").mouseout();

        $("#prev").click(function(){
            index--;
            if(index<0) index=len-1;
            changeImg();
        })
        $("#next").click(function(){
            index++;
            if(index>=len) index=0;
            changeImg();
        })
        $(".dot").click(function(){
            index=$(this).index();
            changeImg();
        })
    } 
    function changeImg(){
        $(".bloc").eq(index).addClass('pics-active').siblings().removeClass('pics-active');
        $(".dot").eq(index).addClass('dots-active').siblings().removeClass('dots-active');
    }
    slideImg();


    //显示子菜单
    // $(".menu-item").mouseover(function(){
    //     var c=$(this).index();
    //     $(".sub-inner-box").eq(c).addClass("show").siblings().removeClass("show");
    //     $(".sub-menu").show();
    // })
    // $(".menu-item").mouseout(function(){
    //    var c=$(this).index();
    //     $(".sub-inner-box").eq(c).removeClass("show"); 
    //     $(".sub-menu").hide(); 
    // })

    // $(".sub-inner-box").mouseover(function(){
    //     var c=$(this).index();
    //     $(".sub-inner-box").eq(c).addClass("show").siblings().removeClass("show");
    //     $(".sub-menu").show();
    // })
    // $(".sub-inner-box").mouseout(function(){
    //    var c=$(this).index();
    //     $(".sub-inner-box").eq(c).removeClass("show"); 
    //     $(".sub-menu").hide();  
    // })

    //显示子菜单
    $(".menu-item").hover(function(){
        var c=$(this).index();
        $(".sub-inner-box").eq(c).addClass("show").siblings().removeClass("show");
        $(".sub-menu").show();
    },function(){
        var c=$(this).index();
        $(".sub-inner-box").eq(c).removeClass("show"); 
        $(".sub-menu").hide(); 
    })

    $(".sub-inner-box").hover(function(){
        var c=$(this).index();
        $(".sub-inner-box").eq(c).addClass("show").siblings().removeClass("show");
        $(".sub-menu").show();
    },function(){
        var c=$(this).index();
        $(".sub-inner-box").eq(c).removeClass("show"); 
        $(".sub-menu").hide(); 
    })

    // 显示楼层
    $(".major").mouseover(function(){
        var a=$(this).index();
        $(".floor-content").eq(a).addClass("show").siblings().removeClass("show");
        $(".major").eq(a).addClass("red").siblings().removeClass("red");
    })
    $(".hot").mouseover(function(){
        var b=$(this).index();
        $(".f2").eq(b).addClass("show").siblings().removeClass("show");
        $(".hot").eq(b).addClass("red").siblings().removeClass("red");
    })
    $(".phone").mouseover(function(){
        var b=$(this).index();
        $(".f3").eq(b).addClass("show").siblings().removeClass("show");
        $(".phone").eq(b).addClass("red").siblings().removeClass("red");
    })
    $(".appliance").mouseover(function(){
        var b=$(this).index();
        $(".f4").eq(b).addClass("show").siblings().removeClass("show");
        $(".appliance").eq(b).addClass("red").siblings().removeClass("red");
    })
    $(".computer").mouseover(function(){
        var b=$(this).index();
        $(".f5").eq(b).addClass("show").siblings().removeClass("show");
        $(".computer").eq(b).addClass("red").siblings().removeClass("red");
    })
// 左侧楼层导航
    var offset=$('.floor').height()*(-1);
    var items =$('.elevator .elevator-item');
    function init(){
        //跳转
        $('.elevator').find('.elevator-item').on('click',function(){
            $('html,body').animate({
                scrollTop:$('.floor').eq($(this).index()).offset().top
            });
        })

        // 跳转到顶部
         $('.topBack').on('click',function(){
            $('html,body').animate({
                scrollTop: '0px'
                // $('.scroll_top').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});
            });
        })
        // 淡入淡出
        $(window).on('scroll',function(){
            $('.floor').each(function(index){
                if($(window).height()+$(window).scrollTop()>=$(this).offset().top-offset){
                    if(index===0){
                        $('.elevator').fadeIn();
                    }
                    items.removeClass('elevator-active');
                    items.eq(index).addClass('elevator-active');
                }
                else{
                    if(index===0){
                        $('.elevator').fadeOut();
                    }
                }
            })
        })
        // 楼层指示
        // $(".elevator-item").mouseover(function(){
        //     var d=$(this).index();
        //     $(".elevator-text").eq(d).addClass("show");
        //     $(".elevator-num").eq(d).addClass("hide");
        // })
        // $(".elevator-item").mouseout(function(){
        //     var d=$(this).index();
        //     $(".elevator-text").eq(d).removeClass("show");
        //     $(".elevator-num").eq(d).removeClass("hide");
        // })
    }
    init();
    // 右侧楼层导航
    function rightInit(){
        $(".right-item").mouseover(function(){
            var d=$(this).index();
            $(".right-text").eq(d).addClass("show");
            $(".right-num").eq(d).addClass("hide");
        })
        $(".right-item").mouseout(function(){
            var d=$(this).index();
            $(".right-text").eq(d).removeClass("show");
            $(".right-num").eq(d).removeClass("hide");
        })
    }
    rightInit();
// 登陆
    $("#login-btn").click(function(){
        // 获取登录窗体代码
        var loginHtml = $("#loginHtml").html();
        showLayer(loginHtml,closeCallback);

        // 登录表单校验
        $("#loginSubmitBtn").click(function(){
            var username = $("input[name='username']").val();
            var password = $("input[name='password']").val();
            if(username === 'imooc' && password === 'imooc'){
                alert("登录成功");
            }else{
                $(".error-msg").html("账号或密码输入错误");
            }
        });
         //提示错误名字
        $("#username").blur(function(){
            var name=$("#username").val();
            if(isNaN(name)){
                $(".error-msg").text("账户名格式错误！");
            }else if(name.length!=11){
                $(".error-msg").text("请输入11位的账号名");
            }else if(name.length==0){
                $(".error-msg").text("账号名不能为空");
            }else{
                $(".error-msg").text("");
            }
        })
         //提示密码错误
        $("#password").blur(function(){
            var name=$("#password").val();
            if(name.length<6||name.length>16){
                $(".error-password").text("请输入6-16位密码，区分大小写，不能用空格！");
            }else{
                $(".error-msg").text("");
            }
        })

         //提示错误名字
        $("#rege-username").blur(function(){
            var name=$("#rege-username").val();
            if(isNaN(name)){
                $(".error-rege").text("账户名格式错误！");
            }else if(name.length!=11){
                $(".error-rege").text("请输入11位的账号名");
            }else if(name.length==0){
                $(".error-rege").text("账号名不能为空");
            }else{
                $(".error-rege").text("");
            }
        })
        // 提示验证码错误
        $("#verify").blur(function(){
            var name=$("#verify").val();
            if(name!="gyyd"){
                $(".error-verify").text("验证码错误！");
            }else{
                $(".error-verify").text("");
            }
        })
    });
// 注册
    $("#rege-btn").click(function(){
        // 获取注册窗体代码
        var loginHtml = $("#loginHtml").html();
        showLayer(loginHtml,closeCallback);
        // 登录表单校验
        $("#loginSubmitBtn").click(function(){
            var username = $("input[name='username']").val();
            var password = $("input[name='password']").val();
            if(username === 'imooc' && password === 'imooc'){
                alert("登录成功");
            }else{
                $(".error-rege").html("账号或密码输入错误");
            }
        });
          //提示错误名字
        $("#rege-username").blur(function(){
            var name=$("#rege-username").val();
            if(isNaN(name)){
                $(".error-rege").text("账户名格式错误！");
            }else if(name.length!=11){
                $(".error-rege").text("请输入11位的账号名");
            }else if(name.length==0){
                $(".error-rege").text("账号名不能为空");
            }else{
                $(".error-rege").text("");
            }
        })
        // 提示验证码错误
        $("#verify").blur(function(){
            var name=$("#verify").val();
            if(name!="gyyd"){
                $(".error-verify").text("验证码错误！");
            }else{
                $(".error-verify").text("");
            }
        })
    });
   
        
    // 弹出层关闭回调函数
    function closeCallback(){
        $(".error-msg").html("");
        $(".error-rege").html("");
    }   

    // 显示弹出层
    function showLayer(html,closeCallback){
        // 显示弹出层遮罩
        $("#layer-mask").show();
        // 显示弹出层窗体
        $("#layer-pop").show();
       
        // 填充弹出层窗体内容
        $("#layer-content").html(html);
        // 弹出层关闭按钮绑定事件
        $("#layer-close").click(function(){
            // 弹出层关闭
            hideLayer();
            // 关闭的回调函数
            closeCallback();
        });
         // 登陆与注册点击
        $(".title").click(function(){
            $(this).addClass("title-active").siblings().removeClass("title-active");
            var x=$(this).index();
            $(".login").eq(x).addClass("show").siblings().removeClass("show");
        })
    }

    // 隐藏弹出层
    function hideLayer(){
        // 弹出层关闭
        $("#layer-mask").hide();
        $("#layer-pop").hide();
    }
    
})