$(".mobile_gnb").hide()
$(".m_gnb_icon").click(function(){
    $(".mobile_gnb").fadeIn()
    $("body").addClass("scroll_none")

});
$(".close_btn").click(function(){
    $(".mobile_gnb").fadeOut()
    $("body").removeClass("scroll_none")   

});
$(".m_gnb_ul li").click(function(){
    $(".mobile_gnb").fadeOut()
    $("body").removeClass("scroll_none")
});




// 스르륵
$(".gnb li:nth-child(1) a").click(function () {
    $("body,html").animate({
        scrollTop: 900
    }, 700)
});
$(".gnb li:nth-child(2) a").click(function () {
    $("body,html").animate({
        scrollTop: 2800
    }, 700)
});
$(".gnb li:nth-child(3) a").click(function () {
    $("body,html").animate({
        scrollTop: 4200
    }, 700)
});
$(".gnb li:nth-child(4) a").click(function () {
    $("body,html").animate({
        scrollTop: 5400
    }, 700)
});
$(".gnb li:nth-child(5) a").click(function () {
    $("body,html").animate({
        scrollTop: 7700
    }, 700)
});
 
