import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

AOS.init();

/**!
 Navigation Button Toggle class
 */
(function() {

// old browser or not ?
    if ( !('querySelector' in document && 'addEventListener' in window) ) {
        return;
    }
    window.document.documentElement.className += ' js-enabled';

    function toggleNav() {

// Define targets by their class or id
        var burger = document.querySelector('#burger');
        var button = document.querySelector('.nav-button');
        var content = document.querySelector('.content');
        var target = document.querySelector('header');
        var menu = document.querySelector('.burger-menu');

// click-touch event
        if ( button ) {
            button.addEventListener('click',
                function (e) {
                    burger.classList.toggle('is-active');
                    button.classList.toggle('is-active');
                    content.classList.toggle('is-hidden');
                    target.classList.toggle('is-opened');
                    menu.classList.toggle('is-hidden');
                    e.preventDefault();
                }, false );
        }

    } // end toggleNav()

    toggleNav();

    function burger() {
        var trigger = $('#hamburger'),
            isClosed = true;

        trigger.click(function () {
            burgerTime();
        });

        function burgerTime() {
            if (isClosed === true) {
                trigger.removeClass('is-open');
                trigger.addClass('is-closed');
                isClosed = false;
            } else {
                trigger.removeClass('is-closed');
                trigger.addClass('is-open');
                isClosed = true;
            }
        }
    }
    burger();

}());

$(function () {
    $('.js-to-top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({'scrollTop': 0}, 400);
    });
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

    /*if ($(window).width() <= 750) {
        $('.header-5__logo').prependTo('.header-5__middle');
        $('.header-5__tag').remove();
    }*/

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
