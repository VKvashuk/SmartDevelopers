$(document).ready(function() {
  svg4everybody();

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

// input
var telInput  = $('.userPhoneModal'),
errorMsg = $('.error-msg'),
validMsg = $('.valid-msg');


var reset = function() {
  telInput.removeClass('error');
  errorMsg.addClass('hide');
  validMsg.addClass('hide');
};

telInput.intlTelInput({
  utilsScript: 'lib/utils.js',
  autoPlaceholder: true
});

telInput.blur(function() {
  var currentPlaceholder = $(this).attr('placeholder');
  reset();
  if ($.trim(telInput.val())) {
    if ($(this).intlTelInput('isValidNumber')) {
      $(this).addClass('valid');
      validMsg.removeClass('hide');
    } else {
      $(this).addClass('error');
      errorMsg.removeClass('hide');
    }
  }
});

telInput.on('countrychange keyup', function(e) {
  var currTelInput = $(this).attr('placeholder').replace(/[0-9]/g, 0);
  telInput.mask(currTelInput);
});


var telInputSecond  = $('.userPhone'),
errorMsgSecond = $('.error-msg'),
validMsgSecond = $('.valid-msg');


var resetSecond = function() {
  telInputSecond.removeClass('error');
  errorMsgSecond.addClass('hide');
  validMsgSecond.addClass('hide');
};

telInputSecond.intlTelInput({
  utilsScript: 'lib/utils.js',
  autoPlaceholder: true
});

telInputSecond.blur(function() {
  var currentPlaceholder = $(this).attr('placeholder');
  reset();
  if ($.trim(telInputSecond.val())) {
    if ($(this).intlTelInput('isValidNumber')) {
      $(this).addClass('valid');
      validMsgSecond.removeClass('hide');
    } else {
      $(this).addClass('error');
      errorMsgSecond.removeClass('hide');
    }
  }
});

telInputSecond.on('countrychange keyup', function(e) {
  var currTelInput = $(this).attr('placeholder').replace(/[0-9]/g, 0);
  telInputSecond.mask(currTelInput);
});


// Perfect Scrollbar
const ps = new PerfectScrollbar('.js-sidebar', {
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
});

const ps2 = new PerfectScrollbar('.js-box', {
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
});

// Popup
const OPEN = 'is-open';
$('.js-popup-control').each((i, control) => {
  control = $(control);
  const modal = $(`.js-popup[data-popup="${control.data('popup')}"]`);
  const prevent = modal.find('.js-popup-prevent');
  control.on('click', e => {
    e.preventDefault();
    modal.toggleClass(OPEN);
  });
  modal.on('click', e => {
    if ($(e.target).closest(prevent).length) return;
    modal.removeClass(OPEN);
    $('body').removeClass('is-popup-open').removeAttr('style').scrollTop(scrollPosition);
  });
});

// Second menu
(function() {
  var menu = $('.js-box');
  var link = $('.js-nav-link');
  var section = $('.js-menu-section');
  var activeLink = null;
  var OPEN = 'is-open';
  var ACTIVE = 'is-active';
  var delay = 400;
  var menuOpened = false;
  link.hover(showMenu, hideMenu);
  menu.hover(function() {
    showActive();
  }, hideMenu);
  function showMenu(e) {
    activeLink = $(this);
    var target = activeLink.data('target');
    var currentSection = section.filter('[data-menu="' + target + '"]');
    section.removeClass(ACTIVE);
    link.removeClass(ACTIVE);
    currentSection.addClass(ACTIVE);
    showActive();
  }
  function hideMenu(e) {
    menuOpened = false;
    setTimeout(function() {
      if (menuOpened) return;
      menu.removeClass(OPEN);
      link.removeClass(ACTIVE);
    }, delay);
  }
  function showActive() {
    activeLink.addClass(ACTIVE);
    menu.addClass(OPEN);
    menuOpened = true;
  }
})();

// Buttons remove classes/Search
$('.js-search-btn').click(function() {
  $('.js-search-wrapper').toggleClass('is-open');
  $('.js-sidebar').removeClass('is-open');
  $('.js-popup').removeClass('is-open');
  if ($(this).find('svg').attr('class') === 'icon icon-search') {
    $(this).find('svg').attr('class', 'icon icon-close');
    $(this).find('svg use').attr('xlink:href', 'img/sprite.svg#icon-close');
  }
  else if ($(this).find('svg').attr('class') === 'icon icon-close') {
    $(this).find('svg').attr('class', 'icon icon-search');
    $(this).find('svg use').attr('xlink:href', 'img/sprite.svg#icon-search');
  }
});

$('.js-btn-prev').click(function() {
  $('.js-box').removeClass('is-open');
  $('.js-menu-section').removeClass('is-open');
});

// Fixed Popup Window: No scroll/Safari
var scrollPosition = 0;

$('.js-popup-control').click(function() {
  var scrollPosition = $('body').scrollTop();

  $('body').addClass('is-popup-open').css({'position':'fixed', 'top':''+ scrollPosition + 'px'});
});
$('.js-aside-control').click(function() {
  $('body').removeClass('is-popup-open').removeAttr('style').scrollTop(scrollPosition);
});
$('.js-btn-close').click(function() {
  $('.js-sidebar').removeClass('is-open');
  $('.js-popup').removeClass('is-open');
  $('body').removeClass('is-modal-open').removeAttr('style').scrollTop(scrollPosition);
});

$('.js-btn-nav').click(function() {
  var scrollPosition = $('body').scrollTop();

  $('body').css({'position':'fixed', 'top':''+ scrollPosition + 'px'});
  $('.js-sidebar').addClass('is-open');
  $('body').addClass('is-modal-open');
  $('.js-search-wrapper').removeClass('is-open');
  $('.js-search-btn').find('svg').attr('class', 'icon icon-search');
  $('.js-search-btn').find('svg use').attr('xlink:href', 'img/sprite.svg#icon-search');
});

// Default links
$('.social__link').click(function() {
  window.open($(this).data('link'));
  return false;
});

$('.js-nav-link').click(function(e) {
  e.preventDefault();
});
});