$(document).ready(function(){

    // owl carousel
    $('header .owl-carousel').owlCarousel({
        
        loop:true,
        items:1,
        autoplay:true,
        animateOut:'fadeOut',
        smartSpeed:300,
    });


        $('.brand .owl-carousel').owlCarousel({
        
        loop:true,
        autoplay:true,
        responsive:{ 0 :{items:2}, 600 :{items:4}, 922 :{items:6} }
        
    })
    // for dark mode
    $('[data-toggle="tooltip"]').tooltip(); 
    $('[data-toggle2="tooltip2"]').tooltip(); 


    $('.menu').on('click', function () {
        $('.side-menu').toggleClass('open');
    });
    $('.side-menu .close-icon .fa-times').on('click' ,function(){

        $('.side-menu').removeClass('open');
    });

 
    // toggle navs
    $(window).scroll(function(){
        if($(this).scrollTop()>=30 || $( window ).width()<=1100)
        {
            $('.nav-left').fadeOut(500);
            $('.nav-top').fadeIn(500);
        }
        else
        {
            $('.nav-left').fadeIn(500);
            $('.nav-top').fadeOut(500);
        }
    });

    if($(this).scrollTop()>=30 || $( window ).width()<=1100)
    {
        $('.nav-left').fadeOut(500);
        $('.nav-top').fadeIn(500);
    }
    else
    {
        $('.nav-left').fadeIn(500);
        $('.nav-top').fadeOut(500);
    }


    // for counter up

    const counters=document.querySelectorAll('.about .container .row .div2 .row div span.num');
    // console.log(counters);
    const delay=200;

    counters.forEach(counter =>
        {
            const updateCount=()=>
            {
                const target =counter.getAttribute('data-target');
                const count = +counter.innerText;
                const speed = target / delay;
                if(count <target)
                {
                    counter.innerText= Math.floor(count + speed) ;
                    setTimeout(updateCount,1);
                }
                else
                {
                    counter.innerText=target;
                }
            }
            updateCount();
        });

        // countdown
        var countdown=$('.counterdown').html();
        $('.counterdown').countdown('2022/01/01', function(event) {
            $(this).html(event.strftime(countdown));

        });


        // switch mode
        
        var link=$('link[data-mode="switch"]');
        var linscriptk=$('script[data-convert="scrip1"]');
        console.log(linscriptk);

        $('i.fas.fa-moon').on('click',function(){ 
            linscriptk.attr('src','main10.js');
            if(link.attr('href')=='css/main.css')
            {
                link.attr('href','css/lightmode.css');
               
                $('.logo img').attr('src','images/logo-dark.png');
                $('.one img').attr('src','images/logo-dark.png');
                $(this).attr('class' , 'far fa-moon mr-3');

            }else
            {
                link.attr('href','css/main.css');
                $('.logo img').attr('src','images/logo.png');
                $('.one img').attr('src','images/logo.png');
                $(this).attr('class' , 'fas fa-moon mr-3');

            }
        });

        $('.side-menu ul li a').on('click' , function(){
            $('html , boby').animate({
        
                scrollTop:$( "#" +  $(this).data('scroll')).offset().top
            },1500)
           });

                // button up

          $(window).scroll(function(){

            if($(window).scrollTop() >=550)
            {
                $('.up').fadeIn(1000);
            }
            else
            {
                $('.up').fadeOut(1000);
            }
          })
   

            // up button click

            $('.up button').click(function(){
                $('html , body').animate({
                    scrollTop:0
                },500)

            });
            

});