
$(function() {


    $('.input-form-tel').inputmask({"mask": "+7(999) 999-9999"});

    $('form').each(function() {
        $(this).validate({
            focusinvalid: false,
            rules: {

                Телефон: {
                   required: true,
                   minlength: 10,
                },
                Имя: {
                    required: true,
                    minlength: 2,
                },   
            },  
            messages: {
                Имя: {
                    required: 'Введите Имя',
                    minlength: 'Введите полное Имя',
                },  
                Телефон: {
                    required: 'Введите телефон',
                    minlength: 'Введите полный номер телефона',
                },  
            },
            submitHandler(form) {
                let th = $(form)

                $.ajax({
                type: 'POST',
                url: 'mail.php',
                data: th.serialize(),
                }).done(() => {

                    console.log('Отправлено')

                th.trigger('reset');
                });

                return false;
                }             
        });
    });

   
    $('.call-me').on('click', function(event) {
        event.preventDefault();
        $('.b-popup').removeClass('b-popup_display');
        $('.b-popup').addClass('b-popup_not_display');
    });

    $('.close-button').on('click', function() {
        $('.b-popup').addClass('b-popup_display');
    })

    $('.up-bar__left li a').on('click', function(event) {
        event.preventDefault();

        $('.up-bar__left').toggleClass('up-bar__left_display');
        $('.up-bar__button').toggleClass('up-bar__button__ul__off');    
        $('html, body').removeClass('not_scroll');
        $('.up-bar__left').removeClass('fon-open');
        $('.up-bar__left').removeClass('fon-open__li');

        let href = $(this).attr('href');

        let offset = $(href).offset().top+1/7*$(href).offset().top;
        

        $('html, body').animate ({
            scrollTop: offset,
        }, 500);
    });

    $('.footer__left li a').on('click', function(event) {
        event.preventDefault();
        

        let href = $(this).attr('href');

        let offset = $(href).offset().top;
        

        $('html, body').animate ({
            scrollTop: offset,
        }, 500);
    });

    $('.up-bar__button').data('counter', 0).click(function(event) {
        event.preventDefault();
            let counter = $(this).data('counter'); 
    
            $(this).data('counter', counter + 1);        
            
            let b = $(this).data('counter');
    
            if(b%2 !== 0) {
    
                $('html, body').toggleClass('not_scroll');
                $('.up-bar__left').toggleClass('up-bar__left_display');
                $('.up-bar__left').toggleClass('fon-open');
                $('.up-bar__left').toggleClass('fon-open__li');
                $('.up-bar__button').toggleClass('up-bar__button__ul__off');
    
            } else {
                
                $('.up-bar__left').toggleClass('up-bar__left_display');
                $('.up-bar__button').toggleClass('up-bar__button__ul__off');
                $('html, body').toggleClass('not_scroll');
                $('.up-bar__left').toggleClass('fon-open');
                $('.up-bar__left').toggleClass('fon-open__li');
            };      
        });   

        var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            slidesPerView:3,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          },
          pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
          },
          breakpoints: {
            0: {
                slidesPerView: 1,
              },
         
            720: {
              slidesPerView: 2,
            },
            1201: {
              slidesPerView: 3,
            },
          }

        });

    
    


    function addApll() {
        let name = $('#input__text').val(),
            phone = $('#input__tel').val();

    
        if(name.length >1 && phone.length !==0) {

            $('.b-popup').addClass('b-popup_display');
            $('.a-popup').removeClass('a-popup_display');
            
            name = $('#input__text').val('');
            phone = $('#input__tel').val('');

        }   else {

            $('.button-burger').on('click', function(event) {
                event.preventDefault()
            });
            $('#input__text').addClass('error');
            $('#input__tel').addClass('error');  
        }; 
    };

 
    $('.button-burger').on('click', addApll);
    

    $('.a-button').on('click', function() {
        $('.a-popup').addClass('a-popup_display');
        $('html, body').removeClass('not_scroll');
    });

    

    

    

    
               
                
  
    
        

    
})  


   

