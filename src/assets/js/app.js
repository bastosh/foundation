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
        var button = document.querySelector('.nav-button');
        var content = document.querySelector('.content');
        var target = document.querySelector('header');
        var menu = document.querySelector('.burger-menu');

// click-touch event
        if ( button ) {
            button.addEventListener('click',
                function (e) {
                    button.classList.toggle('is-active');
                    content.classList.toggle('is-hidden');
                    target.classList.toggle('is-opened');
                    menu.classList.toggle('is-hidden');
                    e.preventDefault();
                }, false );
        }
    } // end toggleNav()

    toggleNav();

    function  burger() {
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