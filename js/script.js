$(document).ready(function () {
  $('#header,.info').ripples({
    dropRadius: 20,
    perturbance: 0.06,
  });

  $('.navbar-toggler').click(function () {
    $('.navbar-toggler').toggleClass('change');
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 718) {
      $('.navbar').addClass('navbar-background');
      $('.navbar').addClass('fixed-top');
    } else {
      $('.navbar').removeClass('navbar-background');
      $('.navbar').removeClass('fixed-top');
    }
  });

  $('.nav-item a, .header-link, #back-to-top').click(function (link) {
    link.preventDefault();
    let target = $(this).attr('href');
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top - 25,
        },
        3000
      );
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    console.log(position);
    if (position >= 718) {
      $('#back-to-top').addClass('scrollTop');
    } else {
      $('#back-to-top').removeClass('scrollTop');
    }
  });

  $('.parent-container').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      tPrev: 'Previous (Left arrow key)',
      tNext: 'Next (Right arrow key)',
      tCounter: '<span class="mfp-counter">%curr% of %total%</span>',
    },
  });
});
