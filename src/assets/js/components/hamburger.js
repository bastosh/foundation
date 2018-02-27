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