import select2 from 'select2';

$(document).ready(function() {

  // Tabs
  $('ul.tabs__caption').on('click', 'li:not(.is-active)', function() {
    $(this)
      .addClass('is-active').siblings().removeClass('is-active')
      .closest('div.tabs').find('div.tabs__content').removeClass('is-active')
      .eq($(this).index()).addClass('is-active');
  });

  $('a.tabs__trigger').click(function(e) {
    e.preventDefault();
  });

  // Select
  $('.js-select').select2({
    minimumResultsForSearch: -1,
    width: '100%'
  });

  // Sliders
  var $status = $('.sldr-number');
  var $slickElement = $('.js-country-slider');

  $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + ' / ' + slick.slideCount);
  });

  $slickElement.slick({
    autoplay: false,
    autoplaySpeed: 10000,
    dots: false,
    arrows: true,
    infinite: true,
    draggable: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<svg class="icon icon-arrow sldr-prev"><use xlink:href="img/sprite.svg#icon-arrow"></use></svg>',
    nextArrow: '<svg class="icon icon-arrow sldr-next"><use xlink:href="img/sprite.svg#icon-arrow"></use></svg>',
  });

  $('.js-news-slider').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    dots: true,
    arrows: true,
    infinite: true,
    draggable: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '0px'
        }
      }
    ]
  });

  $('.js-cases-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    infinite: true,
    draggable: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 668,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

  $('.js-slider-preview').slick({
    autoplay: true,
    autoplaySpeed: 6000,
    dots: false,
    arrows: false,
    infinite: true,
    draggable: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 4,
    centerMode: false,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
});
