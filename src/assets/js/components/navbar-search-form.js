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