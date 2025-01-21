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



document.getElementById('loadMoreBtn').addEventListener('click', function() {
  const hiddenThumbnails = document.querySelectorAll('.thumbnail.hidden');

  // 첫 번째 숨겨진 썸네일을 보여준다.
  if (hiddenThumbnails.length > 0) {
    hiddenThumbnails[0].classList.remove('hidden');
  }

  // 더 이상 숨겨진 썸네일이 없으면 버튼을 숨긴다.
  if (document.querySelectorAll('.thumbnail.hidden').length === 0) {
    this.style.display = 'none';
  }
});

