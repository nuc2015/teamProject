{
    $(document).ready(function () {
        //头部导航栏
        $(".first_page, .free_server, .value_add_server, .campus_join, .safe_job, .safe_train, .safe_forum").mouseover(function () {
            $(this).css({
                color: "red",
                cursor : "pointer"
            });
            $(this).find(".choose-menu").css({
                display: "block"
            });
            if (this.className=="first_page"){
                $(".first_page img:first").attr('src','image/首页2.png');
            }
            if (this.className=="free_server"){
                $(".free_server img:first").attr('src','image/免费服务2.png');
            }
            if (this.className=="value_add_server"){
                $(".value_add_server img:first").attr('src','image/增值服务2.png');
            }
            if (this.className=="campus_join"){
                $(".campus_join img:first").attr('src','image/安全招聘2.png');
            }
            if (this.className=="safe_job"){
                $(".safe_job img:first").attr('src','image/校园合作2.png');
            }
            if (this.className=="safe_train"){
                $(".safe_train img:first").attr('src','image/安全培训2.png');
            }
            if (this.className=="safe_forum"){
                $(".safe_forum img:first").attr('src','image/安全论坛2.png');
            }
        });
        $(".first_page, .free_server, .value_add_server, .campus_join, .safe_job, .safe_train, .safe_forum").mouseout(function () {
            $(this).css({
                color: "white",
                background: "#17181f"
            });
            $(this).find("img").css({
                background: ""
            });
            $(".choose-menu").css({
                display: "none"
            });
            if (this.className=="first_page"){
                $(".first_page img:first").attr('src','image/首页.png');
            }
            if (this.className=="free_server"){
                $(".free_server img:first").attr('src','image/免费服务.png');
            }
            if (this.className=="value_add_server"){
                $(".value_add_server img:first").attr('src','image/增值服务.png');
            }
            if (this.className=="campus_join"){
                $(".campus_join img:first").attr('src','image/安全招聘.png');
            }
            if (this.className=="safe_job"){
                $(".safe_job img:first").attr('src','image/校园合作.png');
            }
            if (this.className=="safe_train"){
                $(".safe_train img:first").attr('src','image/安全培训.png');
            }
            if (this.className=="safe_forum"){
                $(".safe_forum img:first").attr('src','image/安全论坛.png');
            }
        });
    });
}
{
    window.onload = init;
    var dingshiqi;
    function init() {
        dingshiqi = window.setInterval("qiehuan()",2000);
        document.getElementById("li1").style.border = "3px solid #17181f";
    }
    var i = 1;
    function qiehuan(){
        var imgs = document.getElementById("imgs");
        i++;
        if(i>3){
            i = 1;
        }
        qingchu();
        var liobj = document.getElementById("li"+i);
        imgs.src="image/slideshow"+i+".png";
        liobj.style.border = "3px solid #17181f";
    }
    function stop(){
        window.clearInterval(dingshiqi);
    }
    function start(){
        dingshiqi = window.setInterval("qiehuan()",2000);
    }
    function xuanze(li,me){
        i = li;
        qingchu();
        stop();
        var imgs = document.getElementById("imgs");
        imgs.src="image/slideshow"+li+".png";
        me.style.border = "3px solid #17181f";
    }
    //li颜色清除
    function qingchu(){
        for(var j = 1;j<=3;j++){
            var obj = document.getElementById("li"+j);
            obj.style.border = "3px solid #ffffff";
        }
    }
}
