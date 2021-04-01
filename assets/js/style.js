$(document).ready(function() {
    $(".social ul li a").hover(function() {
        $(this).find(".social-hover").css("display", "initial")
    }, function() {
        $(this).find(".social-hover").css("display", "none")
    });

    $(".blog_update .all_blog a").hover(function() {
            $(this).css("font-weight", "bold");
            $(this).css("text-decoration", "underline");
        }, function() {
            $(this).css("font-weight", "initial");
            $(this).css("text-decoration", "none");
        })
        // hover brand
    $(".brand img.jubilee").hover(function() {
        $(this).attr("src", "assets/images/Logo_Jubilee-hover.png")
    }, function() {
        $(this).attr("src", "assets/images/Logo_Jubilee.png")
    });
    $(".brand img.logo-03").hover(function() {
        $(this).attr("src", "assets/images/Logo_Download-hover.png")
    }, function() {
        $(this).attr("src", "assets/images/Logo_Download.png")
    });
    $(".brand img.triton").hover(function() {
        $(this).attr("src", "assets/images/Logo_TRITON-hover.png")
    }, function() {
        $(this).attr("src", "assets/images/Logo_TRITON.png")
    });
    $(".brand img.rolex").hover(function() {
        $(this).attr("src", "assets/images/Logo_ROLEX-hover.png")
    }, function() {
        $(this).attr("src", "assets/images/Logo_ROLEX.png")
    });
    $(".brand img.elle").hover(function() {
        $(this).attr("src", "assets/images/Logo_ELLE-hover.png")
    }, function() {
        $(this).attr("src", "assets/images/Logo_ELLE.png")
    });
    $(".brand img.pandora").hover(function() {
        $(this).attr("src", "assets/images/Logo_PANDORA-hover.png")
    }, function() {
        $(this).attr("src", "assets/images/Logo_PANDORA.png")
    });


    $(".items").hover(function() {
            $(this).find(".information-featured").css("display", "initial");
            $(this).find(".owl-nav").css("display", "initial");
        },
        function() {
            $(".information-featured").css("display", "none");
            $(".owl-nav").css("display", "none");
        });
    $("footer .container .nav a").hover(function() {
            $(this).css("color", "#d6ba8d");
        },
        function() {
            $(this).css("color", "#ababab");
        }
    );
    $("footer .social a").hover(function() {
            $(this).css("background-color", "#d6ba8d");
            $(this).find("i").css("background-color", "#d6ba8d");
            $(this).find("i").css("color", "#333333");
        },
        function() {
            $(this).css("background-color", "#333333");
            $(this).find("i").css("background-color", "#333333");
            $(this).find("i").css("color", "#ffffff");
        }
    );

});

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            320: {
                items: 1
            }
        }
    })
});