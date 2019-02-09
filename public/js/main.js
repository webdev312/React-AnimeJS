(function($){

  "use strict";

  $(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        dots: false,
        responsive:{
            0:{
                items: 1,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items: 6,
                nav:true,
                loop:false
            }
        }
    })
  });

})(jQuery);
