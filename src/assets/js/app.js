import $ from 'jquery';
window.$ = $;

import Foundation from 'foundation-sites';

$(function () {
    $(document).foundation();

    AOS.init({
        duration: 800,
        once: true,
        delay: 20
    });

    setTimeout(function () {
        AOS.refresh();
    }, 0);
});

$(function () {
    $('.js-scroll-down').click(function (e) {
        var $this = $(this);

        e.preventDefault();

        $('html, body').animate({
            scrollTop: $this.closest('.js-block').next().offset().top,
        }, 600);

        $this.trigger('blur');
    });
});

$(function () {
    $('.js-to-top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({'scrollTop': 0}, 400);
    });
});

$(function () {
    "use strict";

    var $hamburgerButton = $('.hamburger-button');
    var $hamburgerPopup = $('.hamburger');
    var $hamburgerClose = $('.hamburger-close');

    $hamburgerButton.on('click', function (event) {
        event.preventDefault();

        $hamburgerPopup
            .removeClass('is-hidden')
            .animate({
                left: 0
            }, 0, function () {
                $hamburgerPopup.css({
                    position: 'fixed'
                }).animate({
                    opacity: 1
                }, 500);
            });
    });

    $hamburgerClose.on('click', function (event) {
        event.preventDefault();

        $hamburgerPopup
            .animate({
                opacity: 0
            }, 500, function () {
                $hamburgerPopup
                    .addClass('is-hidden')
                    .css({
                        left: '-100%'
                    });
            })
    });
});

$(function () {
    "use strict";

    var $activateButton = $('.buttons__watch');
    var $videoPopup = $('.video__popup');
    var $closeButton = $('.video__popup__close');

    var videoFrame = document.getElementById('video-frame');

    if (window.Vimeo) {
        var player = new Vimeo.Player(videoFrame);
    }


    $activateButton.on('click', function (event) {
        event.preventDefault();
        $videoPopup.toggleClass('is-hidden');
    });

    $closeButton.on('click', function () {
        $videoPopup.toggleClass('is-hidden');
        player.unload();
    });

    if ($(window).width() <= 1020) {
        $(videoFrame).attr({
            width: 500,
            height: 281
        });
    }

    if ($(window).width() <= 520) {
        $(videoFrame).attr({
            width: 320,
            height: 180
        });
    }
});

$(function () {
    var $searchButton = $('.navbar__auth__search__icon, .hamburger__search__icon');
    var $searchForm = $('.navbar__auth__search__form, .hamburger__search__form');

    var isDesktop = $(window).width() > 767;

    $searchButton.on('click', function () {

        if ($searchForm.hasClass('is-hidden')) {

            $searchButton.css({
                position: 'absolute'
            }).animate({
                left: isDesktop ? -250 : 0
            }, 500);

            $searchForm.removeClass('is-hidden')
                .animate({
                    width: isDesktop ? 200 : '100%'
                }, 500);
        } else {

            $searchButton.animate({
                left: -42
            }, 500, function () {
                $searchButton.css({
                    position: 'static'
                })
            });

            $searchForm
                .animate({
                    width: 0
                }, 500, function () {
                    $searchForm.addClass('is-hidden');
                });
        }
    });
});

$(function () {
    "use strict";


    var $select = $('.subscribe__form__select');


    $select.each(function () {
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('is-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');


        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                rel: $this.children('option').eq(i).val()
            }).prepend($('.select__icons').find('[data-country="' + $this.children('option').eq(i).data('country') + '"]').clone())
                .append('<div class="select__icons__text"><div class="select__icons__text__number">' + $.trim($this.children('option').eq(i).html()) + '</div><div class="select__icons__text__country">' + $this.children('option').eq(i).data('country-full') + '</div></div>').appendTo($list);
        }

        $styledSelect.append('<div class="select__icons__text">' + $.trim($this.children('option').eq(0).html()) + '</div>')
            .prepend($('.select__icons').find('[data-country="' + $this.children('option').eq(0).data('country') + '"]').clone());

        var $listItems = $list.children('li');

        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.html($(this).html()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
        });

        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });

    $(function () {
        "use strict";


        var $filterButtons = $('.ecommerce-1__content__filter__button');

        $filterButtons.on('click', function (event) {
            event.preventDefault();
            var $this = $(event.currentTarget);

            $filterButtons.removeClass('is-active');
            $this.addClass('is-active');


        });

        // Change products

        $filterButtons.on('click', function (event) {
            event.preventDefault();
            var $this = $(event.currentTarget);

            var productItems = $('.ecommerce-1__content__block__product').not('is-hidden').toArray();

            $(productItems).animate({
                opacity: 0
            }, 350, function () {
                var shuffled = _.shuffle(productItems);
                $(shuffled)
                    .prependTo('.ecommerce-1__content__block')
                    .css({opacity: 1})
            });
        });


        // Load more products

        var $loadButton = $('.ecommerce-1__content__more');
        var $productsBlock = $('.ecommerce-1__content__block');

        $loadButton.on('click', function (event) {
            event.preventDefault();

            var products = $('.ecommerce-1__content__block__product').not('.is-hidden').clone().toArray();
            var shuffled = _.shuffle(products);
            var winWidth = $(window).width();

            if (winWidth >= 1200 - 17) {
                $(shuffled).slice(0, 4).appendTo($productsBlock);
            }

            if (winWidth < 1200 - 17 && $(window).width() >= 1024 - 17) {
                $(shuffled).slice(0, 3).appendTo($productsBlock);
            }

            if (winWidth < 1024 - 17 && $(window).width() >= 768 - 17) {
                $(shuffled).slice(0, 2).appendTo($productsBlock);
            }

            if (winWidth < 768 - 17) {
                $(shuffled).slice(0, 1).appendTo($productsBlock);
            }

            $('body, html').animate({
                scrollTop: $loadButton.offset().top - $(window).height() + $loadButton.outerWidth()
            }, 600)
        });

        // Swap buttons

        $(window).on('load', function (event) {
            if ($(window).width() <= 830 - 17) {
                var $swipeButtons = $('.ecommerce-1__content__filter').addClass('owl-carousel');
                var $swipeItems = $('.ecommerce-1__content__filter__button');

                $swipeItems.wrap('<div class="swipe-buttons-wrap">');

                var $buttonsSlider = $swipeButtons.owlCarousel({
                    autoWidth: true,
                    center: false,
                    items: 6
                });

                $swipeButtons.find('.owl-stage').css({
                    'width': '+=1'
                });
            }
        });
    });
});




