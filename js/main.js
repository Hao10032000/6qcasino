/**
    * headerFixed
*/

; (function ($) {

  "use strict";

  var selectImages = function () {
    if ($(".image-select").length > 0) {
      const selectIMG = $(".image-select");
      selectIMG.find("option").each((idx, elem) => {
        const selectOption = $(elem);
        const imgURL = selectOption.attr("data-thumbnail");
        if (imgURL) {
          selectOption.attr(
            "data-content",
            "<img src='%i'/> %s"
              .replace(/%i/, imgURL)
              .replace(/%s/, selectOption.text())
          );
        }
      });
      selectIMG.selectpicker();
    }
  };

  var menuleft = function () {
    if ($('div').hasClass('section-menu-left')) {
      var bt = $(".section-menu-left").find(".has-children");
      bt.on("click", function () {
        var args = { duration: 600 };
        if ($(this).hasClass("active")) {
          $(this).children(".sub-menu").slideUp(args);
          $(this).removeClass("active");
        } else {
          $(".sub-menu").slideUp(args);
          $(this).children(".sub-menu").slideDown(args);
          $(".menu-item.has-children").removeClass("active");
          $(this).addClass("active");
        }
      });
    }
  };

  var tabs = function () {
    $('.widget-tabs').each(function () {
      $(this).find('.widget-content-tab').children().hide();
      $(this).find('.widget-content-tab').children(".active").show();
      $(this).find('.widget-menu-tab').find('li').on('click', function () {
        var liActive = $(this).index();
        var contentActive = $(this).siblings().removeClass('active').parents('.widget-tabs').find('.widget-content-tab').children().eq(liActive);
        contentActive.addClass('active').fadeIn("slow");
        contentActive.siblings().removeClass('active');
        $(this).addClass('active').parents('.widget-tabs').find('.widget-content-tab').children().eq(liActive).siblings().hide();
      });
    });
  };

  $('ul.dropdown-menu').on('click', function (event) {
    event.stopPropagation();
  });

  var btnQuantity = function () {
    if ($('div').hasClass('choose-amount')) {
      $(".minus-btn").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest("div").find("input");
        var value = parseInt($input.val());

        if (value > 1) {
          value = value - 1;
        }

        $input.val(value);
      });

      $(".plus-btn").on("click", function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest("div").find("input");
        var value = parseInt($input.val());

        if (value > 0) {
          value = value + 1;
        }

        $input.val(value);
      });
    }
  };

  var collapse_menu = function () {
    if ($('div').hasClass('layout-wrap')) {
      // $('.section-menu-left-mobile').on("click", function (e) {
      //   $(this).addClass('focus');
      // });
      // $(document).on('click',function(e){
      //   var clickID=e.target.classList;if((clickID=='section-menu-left-mobile')){
      //       $('#section-menu-left-mobile').removeClass('focus');
      // }});
      $(".button-collapse-menu").on("click", function (e) {
        $('.button-collapse-menu').toggleClass('active');
        $('.layout-wrap').toggleClass('active');
        $('.section-menu-left').toggleClass('active');
        $('.section-menu-left-mobile').toggleClass('active');
        $('.section-content-right').toggleClass('active');
        $('.header-dashboard').toggleClass('active');
        $('.section-menu-left').find('.mobile-button').toggleClass('active');
      })
      $(".button-show-hide").on("click", function (e) {
        $('.section-menu-left').toggleClass('active');
        $('.section-menu-left').find('.mobile-button').toggleClass('active');
        $('.overlay').toggleClass('active');
      })
      $(".overlay").on("click", function (e) {
        $('.section-menu-left').toggleClass('active');
        $('.section-menu-left').find('.mobile-button').toggleClass('active');
        $('.overlay').toggleClass('active');
      })
    }
  }
  var headerFixed = function () {
    if ($('body').hasClass('counter-scroll')) {
      var nav = $('.header-dashboard');
      if (nav.length) {
        var
          offsetTop = nav.offset().top,
          headerHeight = nav.height(),
          injectSpace = $('', {
            height: headerHeight
          }).insertAfter(nav);

        $(window).on('load scroll', function () {
          if ($(window).scrollTop() > offsetTop) {
            nav.addClass('is-fixed');
            injectSpace.show();
          } else {
            nav.removeClass('is-fixed');
            injectSpace.hide();
          }
        })
      }
    }
  };
  $('.q6-read-more').click(function () {
    $('.more-text').slideToggle();
    $('.providers-seo').toggleClass('show-overlay');
  });
  $('.description-block-buttons').click(function () {
    $('.description-collapse').slideToggle();
    $('.widget-terms').toggleClass('show-overlay');

  });

  //OTP
  $('.digit-group').find('input').each(function () {
    $(this).attr('maxlength', 1);
    $(this).on('keyup', function (e) {
      var parent = $($(this).parent());

      if (e.keyCode === 8 || e.keyCode === 37) {
        var prev = parent.find('input#' + $(this).data('previous'));

        if (prev.length) {
          $(prev).select();
        }
      } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
        var next = parent.find('input#' + $(this).data('next'));

        if (next.length) {
          $(next).select();
        } else {
          if (parent.data('autosubmit')) {
            parent.submit();
          }
        }
      }
    });
  });

  $(".info-account .name ").on("click", function (e) {
    $('.popup-account').toggleClass('show');
  })
  //reloader
  var preloader = function () {
    setTimeout(function () {
      $(".preload-container").fadeOut("slow", function () {
        $(this).remove();
      });
    }, 1000);
  };
  //goTop
  var goTop = function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 800) {
        $('.button-go').addClass('show');
      } else {
        $('.button-go').removeClass('show');
      }
    });

    $('.button-go').on('click', function () {
      $("html, body").animate({ scrollTop: 0 }, 1000);
      return false;
    });
  };
  //video
  var video = function () {
    if ($('div').hasClass('box-video')) {
      $('.popup-youtube').magnificPopup({
        type: 'iframe'
      });
    }
  };
  //faq

  $(".title-wrap").on("click", function () {
    $(this).closest('.faq-item').find('.faq-content').slideToggle("show");
  });

  //Side bar game
  $(".game-panel-menu .nav-pills .btn-side-bar-game").on("click", function () {
    $(this).closest('.game-panel-menu').find('.tab-content').addClass("show-tab-penal");
  });
  $(".btn-close-panel").on("click", function (e) {
    $('.tab-content').removeClass('show-tab-penal');
  })


  // Dom Ready
  $(function () {
    selectImages();
    menuleft();
    tabs();
    btnQuantity();
    collapse_menu();
    headerFixed();
    preloader();
    video();
    goTop();

  });

})(jQuery);
