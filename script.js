$(document).ready(function(){
    $(".header_menu").slideToggle("");
    $(".fa-server").click(function(){
        $(".header_menu").slideToggle("slow");
    });
  });
 

  $(document).ready(function () {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 200) {
           $('.fa-angle-double-up').show(300)
       }
       else{
           $('.fa-angle-double-up').hide(100)
       }
    })
    $('.fa-angle-double-up').click(function () {
        $('html , body').animate({
            scrollTop: 0
        }, 500)
    })
});