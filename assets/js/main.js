$(function () {
    $(document).on('click', '.btn-hero', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $('.project-finder').offset().top
        }, 200);
    });
    $(window).on('scroll', function() {
        $('h1').each(function() {
          var $pin = $(this);
          var inner = $pin.next().position().top - $(window).scrollTop();
          var ptop = $pin.height() + 20;

            if (inner < ptop) {
                $pin.addClass('pinned');
            } else {
                $pin.removeClass('pinned');
            }
        });
    });
    $('.projects').masonry({
        itemSelector: '.project'
    });
});
