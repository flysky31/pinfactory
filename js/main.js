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
/*

document.addEventListener('DOMContentLoaded', function() {
  const loadMoreBtn = document.querySelectorAll('.more');
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
*/
document.addEventListener('DOMContentLoaded', function() {
  // 모든 thumbnail-container에 대해 처리
  const containers = document.querySelectorAll('.thumbnail-container');

  containers.forEach(container => {
    const loadMoreBtn = container.querySelector('.more');
    const thumbnails = container.querySelectorAll('.thumbnail');

    // 처음 6개 썸네일만 노출하고 나머지 썸네일은 숨김
    for (let i = 6; i < thumbnails.length; i++) {
      thumbnails[i].classList.add('hidden');
    }

    // 더보기 버튼 클릭 시 숨겨진 썸네일들을 모두 노출
    loadMoreBtn.addEventListener('click', function() {
      const hiddenThumbnails = container.querySelectorAll('.thumbnail.hidden');

      hiddenThumbnails.forEach(function(thumbnail) {
        thumbnail.classList.remove('hidden');
      });

      // 모든 썸네일이 노출되면 더보기 버튼 숨김
      loadMoreBtn.style.display = 'none';
    });
  });
});

