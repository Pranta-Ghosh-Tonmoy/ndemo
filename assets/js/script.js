$(function () {
   'use strict';

// Back To Top
$(window).on(`scroll` , function (){
   var scrollsize = $(window).scrollTop()

   if (scrollsize > 400) {
    $(`.backtotop`).slideDown()
   }
   else {
    $(`.backtotop`).slideUp()
   }
})


$(`.backtotop`).on(`click` , function () {
    $(`html, body`).animate({
        scrollTop:0
    },0)
})



})

const ps = new PerfectScrollbar('#nav');
