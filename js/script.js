 

// slick slider
$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '.slick-prev',
        nextArrow:'.slick-next'
    }); 

    //    counter
      $('.counter').counterUp({
        delay: 10,
        time: 3000 
    });
  });


//   venobox

  $(document).ready(function(){
    $('.venobox').venobox({
      framewidth : '700px', 
      frameheight: '500px',
      border     : '10px',
      
    }); 
});


$('.project_slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  slidesToShow:2,
  prevArrow: '.slick-prev',
  nextArrow:'.slick-next'

}); 


var clock = $('.clock').FlipClock({
  
      clockFace:'DailyCounter',
  
      autoStart:true,
  
      callbacks: {
        stop:function() {
  
          $('.message').html('The clock has stopped!')
  
        }
  
      }
  
  });


  $(document).ready(function(){
    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    });
  });
  