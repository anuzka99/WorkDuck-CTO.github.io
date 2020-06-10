(function ($) {
  "use strict";


  $(document).ready(function() {
    $('select').niceSelect();
  });
  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });


$('.counter').counterUp({
  time: 2000
});

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 300,
    infinite: true,
    asNavFor: '.slider-nav-thumbnails',
    autoplay:true,
    pauseOnFocus: true,
    dots: true,
  });
 
  $('.slider-nav-thumbnails').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    focusOnSelect: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
        }
      }
    ]
  });
 
  //remove active class from all thumbnail slides
  $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
 
  //set active class to first thumbnail slides
  $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');
 
  // On before slide change match active thumbnail to current slide
  $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
    $('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
 });
 
 //UPDATED 
   
 $('.slider').on('afterChange', function(event, slick, currentSlide){   
   $('.content').hide();
   $('.content[data-id=' + (currentSlide + 1) + ']').show();
 }); 

 $('.gallery_img').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});

// Search Toggle
$("#search_input_box").hide();
$("#search_1").on("click", function () {
  $("#search_input_box").slideToggle();
  $("#search_input").focus();
});
$("#close_search").on("click", function () {
  $('#search_input_box').slideUp(500);
});

//------- Mailchimp js --------//  
function mailChimp() {
  $('#mc_embed_signup').find('form').ajaxChimp();
}
mailChimp();


}(jQuery));

var randomScalingFactor = function () {
  return Math.round(Math.random() * 100);
};

var config = {
  type: 'pie',
  data: {
    datasets: [{
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
      ],
      label: 'Dataset 1'
    }],
    labels: [
      'Red',
      'Orange',
      'Yellow',
      'Green',
      'Blue'
    ]
  },
  options: {
    legend: {
      display: true,
      position: 'left',
    },
    responsive: true
  }
};

window.onload = function () {
  var ctx = document.getElementById('chart-area').getContext('2d');
  console.log(ctx,config)
  window.myPie = new Chart(ctx, config);
};

// Carousel
$('.owl-carousel').owlCarousel({
  items: 1,
  loop: true,
  dots: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 5000,
  nav: false,
  responsive: {
    0: {
      margin: 15,
    },
    600: {
      margin: 10,
    },
    1000: {
      margin: 10,
    }
  }
});

var owl = $('.owl-carousel').owlCarousel();

owl.on('changed.owl.carousel', function (event) {
  if (event.page.index == 1) {
    config.type = 'doughnut'
    config.options.cutoutPercentage = '50'
  }
  else if (event.page.index == 2){
    config.type = 'pie'
    config.options.cutoutPercentage = '0'
  }
  config.data.datasets.forEach(function (dataset) {
    dataset.data = dataset.data.map(function () {
      return randomScalingFactor();
    });
  });

  window.myPie.update();
    console.log(event.page.index);
})
