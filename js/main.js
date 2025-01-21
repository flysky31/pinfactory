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
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const thumbnails = document.querySelectorAll('.thumbnail');

  // 처음 6개만 노출하고 나머지는 숨김 처리
  for (let i = 6; i < thumbnails.length; i++) {
    thumbnails[i].classList.add('hidden');
  }

  loadMoreBtn.addEventListener('click', function() {
    // 숨겨진 썸네일을 찾아서 하나씩 노출
    const hiddenThumbnails = document.querySelectorAll('.thumbnail.hidden');

    if (hiddenThumbnails.length > 0) {
      hiddenThumbnails[0].classList.remove('hidden');
    }

    // 숨겨진 썸네일이 더 이상 없으면 '더보기' 버튼을 숨김
    if (document.querySelectorAll('.thumbnail.hidden').length === 0) {
      loadMoreBtn.style.display = 'none';
    }
  });
});

