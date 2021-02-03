$('#banner').slick({
    dots:true,
    autoplay:true,
    autoplaySpeed:1500
});
$("#works").slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive:[
        {
            breakpoint:1024,
            settings: {
                slidesToShow:3,
                slidesToScroll:1,
            }
        },
        {
            breakpoint:767,
            settings: {
                slidesToShow:1,
                slidesToScroll:1,
            }
        }
    ]
});

$('menu').click({
    
});