$(document).ready(function () {

    function animation() {

        var windowHeight = $(window).height();
        var scrollDown = $(window).scrollTop();

        $('.animation').each(function () {
            var position = $(this).offset().top;

            if (position < scrollDown + windowHeight - 50) {
                var animacija = $(this).attr('data-animation');
                $(this).addClass(animacija);
            }
        });
    }

    animation();
    counter();

    $(window).scroll(function () {
        animation();
        counter();
    });


    //ADD HEADER STYLE ON SCROOL
    $(window).scroll(function () {

        var scroll = $(window).scrollTop();
        if (scroll > 50) {

            $('header').addClass('bg-dark py-lg-1').removeClass('py-lg-4');

        } else {
            $('header').removeClass('bg-dark py-lg-1').addClass('py-lg-4');
        }

    });


    //EASE SCROLL

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });


//counter
    function counter() {
        var windowHeight = $(window).height();
        var scrollDown = $(window).scrollTop();
        var position = $('.achievements').offset().top;
        if (position < scrollDown + windowHeight - 50) {
            $('.counter').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');

                $({countNum: $this.text()}).animate({
                    countNum: countTo
                },
                {

                    duration: 2000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }
                });
            });
        }

    }





//SLIDER

    if ($('.owl-carousel').length > 0) {
        $('.team-slider').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            dots: false,
            autoplay: true,

            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
    }


});

