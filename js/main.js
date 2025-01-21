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


document.addEventListener('DOMContentLoaded', function() {
  const loadMoreBtn = document.querySelectorAll('.loadMoreBtn');
  const thumbnails = document.querySelectorAll('.thumbnail');

  for (let i = 6; i < thumbnails.length; i++) {
    thumbnails[i].classList.add('hidden');
  }

  loadMoreBtn.addEventListener('click', function() {
    const hiddenThumbnails = document.querySelectorAll('.thumbnail.hidden');

    hiddenThumbnails.forEach(function(thumbnail) {
      thumbnail.classList.remove('hidden');
    });

    loadMoreBtn.style.display = 'none';
  });
});

