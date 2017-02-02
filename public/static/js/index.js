$(function () {
    $(".bg-menu ul li").click(function () {
        var url = $(this).find("img")[0].src;
        var index = $(this).index();
        $(".header").css("background-position",index * document.body.clientWidth);
        $(".header").css("background-image","url(" + url + ")");
    })
});

window.onscroll=function(){
    var top=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
    var $topbar = $(".topbar");
    var height = $("#logo").height();

    if(top <= height) {
        $topbar.hide();
    }
    else if(top > height) {
        (function(){
            $topbar.show();
        })();
    }
};