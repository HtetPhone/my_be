
    $('.my-btn').click(function(){
        $('.my-list').css({marginLeft:'0'});
    });

    $('.close-btn').click(function(){
            $('.my-list').css({marginLeft:'-100%'});
        });

    $('.nav-item').click( function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    //gallery
    $('.gallery-nav-link').click( function(){
        let value = $(this).attr('data-filer');
        console.log(value);
        if (value == 'showAll'){
            $('.img-case').show('1000');
        }
        else{
            $('.img-case').not('.'+value).hide('1000');
            $('.img-case').filter('.'+value).show('1000');

        }
    })
    //add active class
    $('.gallery-nav-link').click( function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    //loader remove
    $(window).on('load', function(){
        $(".loader-wrapper").fadeOut(1300);
    })