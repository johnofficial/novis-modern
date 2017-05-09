$(function() {
animationTrigger();
classAdd();
AOS.init({
  duration: 1200,
});
});
function classAdd() {
  $('.text-intro, .photo-intro').addClass('return-element');
}

function animationTrigger() {
  $(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    /* Cover Section Animation */
    $('.photo-intro').css({
      'transform': 'translateY('+ wScroll/3 +'px)'
    });
    /*
     Clients Section Animation
    if(wScroll > $('.clients-wrapper').offset().top - ($(window).height() / 1.5)) {
        $('.clients-text').addClass('animated');
      }
      */
      /* Services Section Animation */
      if(wScroll > $('.services-wrapper').offset().top - ($(window).height() / 1.2)) {
          $('.services-icon, .services-text').addClass('return-element');
        }
  });


}
