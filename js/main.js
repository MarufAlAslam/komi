$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
        $(".navbar").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".navbar").removeClass("active");
    }
});



// let count = 1;
$('.landingBtn').click(function () {
    $('.landingBtn').removeClass('active');
    $(this).addClass('active');
})

$('.landingBtn1').click(function () {
    $('.csImg').removeClass('active');
    $('.cs1Img').addClass('active')
})
$('.landingBtn2').click(function () {
    $('.csImg').removeClass('active')
    $('.cs2Img').addClass('active')
})
$('.landingBtn3').click(function () {
    $('.csImg').removeClass('active')
    $('.cs3Img').addClass('active')
})
$('.landingBtn4').click(function () {
    $('.csImg').removeClass('active')
    $('.cs4Img').addClass('active')
})