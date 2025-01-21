$(document).ready(function () {
    var mbsw = new Swiper(".mbsw", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".mbpagi",
          clickable: true,
        },
        autoplay:true,
        speed:1000,
    });
    var couponsw = new Swiper(".couponsw", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".coupagi",
          clickable: true,
        },
        autoplay:true,
        speed:1000,
    });


    $('.prod-btn li').click(function(){
        $('.prod-btn li').removeClass('on');
        $(this).addClass('on');
    })


    $('.tab-link').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.tab-link').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });


    //硫붾돱�섏씠吏� �� 濡ㅻ쭅
    var swiper = new Swiper(".menuSwiper", {
        slidesPerView: "auto",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
        //loop:true,
        // breakpoints: {
        //     768: {
        //         slidesPerView: 4,
                
        //     },
            
        // },
    });
 
});
설명
