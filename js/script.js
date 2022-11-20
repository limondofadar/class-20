$(function(){
    $('.slick_slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        arrows:false,
    });
    
   

    new VenoBox({
        selector: '.my-video-links',
    });

// counter part 

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    

    $('.slick_slider_autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:1500,
        arrows:true,
        prevArrow:'<i class="fa-solid fa-circle-chevron-right icon_one"></i>',
        nextArrow:'<i class="fa-solid fa-circle-chevron-left icon_two"></i>',
      });
              
})