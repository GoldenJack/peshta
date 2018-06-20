$(document).ready(function() {
    $(document).scroll(function(){
        var box = $('.header__menu__box');
        if($(document).scrollTop() > 80) {
            box.addClass('fixed');
            $('.header__menu__box__clear').height(box.height());
        }else{
            box.removeClass('fixed');
            $('.header__menu__box__clear').height(0);
        }
    });
});

//scroll a 
$(document).ready(function() {
    var nav = $('.header__menu');
    var scrollToPunkt = function(s){
        var anchor = s.attr('href');
        var anchorBlock = $(anchor).offset().top;
        $('html,body').animate({scrollTop: anchorBlock}, 1000);
        history.pushState({}, '', anchor);
    }

    nav.on('click', 'a.header__menu__link', function(e){
        e.preventDefault();
        scrollToPunkt($(this));
    })

    $('.menu__wrap').on('click', 'a.menu__wrap__link', function(e){
        e.preventDefault();
        scrollToPunkt($(this));
    });

    $('.header__down').on('click', function(e){
        e.preventDefault();
        scrollToPunkt($(this));
    });
    
});

//modals
$(document).ready(function() {
    //succes
    $('#success').iziModal({
        width: 540,
        padding: 30
    });
    //error
    $('#error').iziModal({
        width: 540,
        padding: 30
    });
    //contact__modal
    $('#contact__modal').iziModal({
        width: 540,
        padding: 30
    });



    $('.btn__modal__cf').click(function(e){
        e.preventDefault();
        var modal = $('#contact__modal');
        var title = $(this).data('title');

        modal.find('.modal__title').text(title);
        modal.find('.modal__title__input').val(title);
        modal.iziModal('open');
    })

    //gift modal 
    $('#gift__modal').iziModal({
        width: 540,
        padding: 30
    })
    $('.gift__btn').click(function(e){
        e.preventDefault();
        $('#gift__modal').iziModal('open');
    })

    //guide modal
    $('#guide__modal').iziModal({
        width: 540,
        padding: 30
    })
    $('.guide__btn').click(function(e){
        e.preventDefault();
        $('#guide__modal').iziModal('open');
    })
});

$(document).ready(function() {
    $(document).on('af_complete', function(event, response) {
        var form = response.form;

        if (form.data('form') == 'form__cf') {
            $('#success').find('.modal__title').text('запрос отправлен');
            $('#success').find('.modal__success__info').text('Спасибо! Ваш запрос обрабатывается. Мы свяжемся с вами в ближайшее время!');
            $('#contact__modal').iziModal('close');
            $('#success').iziModal('open');
        }else if (form.data('form') == 'form__gift') {
            $('#success').find('.modal__title').text('подарок отправлен');
            $('#success').find('.modal__success__info').text('Спасибо! Подарок отправлен на указанный вами e-mail');
            $('#gift__modal').iziModal('close');
            $('#success').iziModal('open');
        }else if (form.data('form') == 'form__guide') {
            $('#success').find('.modal__title').text('Материал отправлен');
            $('#success').find('.modal__success__info').text('Спасибо! Материал отправлен на ваш e-mail');
            $('#guide__modal').iziModal('close');
            $('#success').iziModal('open');        
        }
    });
});


//mobile menu 
$(document).ready(function() {
    var menu_trigger = $('.menu_trigger');
    menu_trigger.on('click', function(){
        var menu__btn = $(this).parent('.menu__btn');

        $(this).find('.menu_trigger__icon').toggleClass('active');
        menu__btn.toggleClass('open');

    });
});

//up
$(document).ready(function() {
    var up = $('.up');


    $(document).scroll(function(){
        var header = $('#header').height();

        if($(document).scrollTop() > header) {
            up.fadeIn(500);
        }else{
            up.fadeOut(500);
        }
    });

    up.click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop: 0}, 1500);
    })
});


$(document).ready(function() {
    var carousel = function(self) {
        var prev = '<a class="prev"><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19" cy="19" r="18" transform="translate(38.0002) rotate(90)" stroke="#BDBDBD" stroke-width="2" stroke-dasharray="3 3"/><path d="M16.7071 0.707107C17.0976 0.316582 17.0976 -0.316582 16.7071 -0.707107L10.3431 -7.07107C9.95262 -7.46159 9.31946 -7.46159 8.92893 -7.07107C8.53841 -6.68054 8.53841 -6.04738 8.92893 -5.65685L14.5858 0L8.92893 5.65685C8.53841 6.04738 8.53841 6.68054 8.92893 7.07107C9.31946 7.46159 9.95262 7.46159 10.3431 7.07107L16.7071 0.707107ZM0 1H16V-1H0V1Z" transform="translate(27.0002 19) rotate(180)" fill="#BDBDBD"/></svg></a>';

        var next = '<a class="next"><svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19" cy="19" r="18" transform="translate(0 38) rotate(-90)" stroke="#BDBDBD" stroke-width="2" stroke-dasharray="3 3"/><path d="M16.7071 0.707107C17.0976 0.316582 17.0976 -0.316582 16.7071 -0.707107L10.3431 -7.07107C9.95262 -7.46159 9.31946 -7.46159 8.92893 -7.07107C8.53841 -6.68054 8.53841 -6.04738 8.92893 -5.65685L14.5858 0L8.92893 5.65685C8.53841 6.04738 8.53841 6.68054 8.92893 7.07107C9.31946 7.46159 9.95262 7.46159 10.3431 7.07107L16.7071 0.707107ZM0 1H16V-1H0V1Z" transform="translate(11 19)" fill="#BDBDBD"/></svg></a>';

        $(self).slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: prev,
            nextArrow: next,
            dots: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true
                    }
                }
            ]
        });
    };

    carousel('#slider__stages', 4, 3, 1, 1);
    carousel('#partners__slider', 4, 3, 1, 1);
    carousel('#slider__result', 4, 3, 1, 1);


    if($(window).width() < 992) {
        carousel('#slider__work', 4, 3, 1, 1);
    }
});