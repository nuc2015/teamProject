{
    $(document).ready(function () {
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
