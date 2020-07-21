    //Start Loading
var logo1 = document.getElementById('logo1');
var logo2 = document.getElementById('logo2');
var logo3 = document.getElementById('logo3');
var logo4 = document.getElementById('logo4');
var logo5 = document.getElementById('logo5');
var logo6 = document.getElementById('logo6');
 
setTimeout(function (){
        'use strict';
    $('.loading').hide(function () {
        'use strict';
    $('body').css({overflow: 'auto'})
    $('.fixed-logo').fadeIn(3000);
        $('.width-change2').animate({width: '100%',opacity: '1'},3000,function () {
            'use strict';
            $('.width-change3').animate({width: '498.52px', opacity: '1'},3000,function () {
                'use strict';
                $('.width-change3').css({background: 'none'})
              $('.width-change4').animate({width: '111.47px', opacity: '1',color: 'white'},3000,function () {
                  'use strict';
                  $('.width-change4').css({color: 'white'})
              })  
            })        
        })
        

        })
        },0000)
setTimeout(function destroyLogo() {
    'use strict';
    $('#logo1').css({animation: 'rem1-line-anim 2s ease forwards'})
    },8000);
setTimeout(function destroyLogo() {
    'use strict';
    $('#logo2').css({animation: 'rem2-line-anim .7s ease forwards'})
},7500);
setTimeout(function destroyLogo() {
    'use strict';
    $('#logo3').css({animation: 'rem3-line-anim 1s ease forwards'})
},7000);
setTimeout(function destroyLogo() {
    'use strict';
    $('#logo4').css({animation: 'rem4-line-anim 1s ease forwards'})
},6000);
setTimeout(function destroyLogo() {
    'use strict';
    $('#logo5').css({animation: 'rem5-line-anim 1s ease forwards'})
},5500);
setTimeout(function destroyLogo() {
    'use strict';
    $('#logo6').css({animation: 'rem6-line-anim .7s ease forwards'})
},5000);

//End Loading

  var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows: true,
      },/*
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },*/
      spaceBetween: 500,
      loop: true,
    });