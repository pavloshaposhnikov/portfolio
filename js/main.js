$(function() {


  /* Smooth Scroll */
      $("[data-scroll]").on("click", function(event) {
          event.preventDefault();
  
          let elementId = $(this).data(`scroll`);
          let elementOffset = $(elementId).offset().top;
          
          $("html, body").animate({
              scrollTop: elementOffset - 0
          }, 600);
          
      });
  
});
  
      /* Scroll Up Button */
  
  $(document).ready(function() { //when document is ready
      $(window).scroll(function() { //when webpage is scrolled
        if ($(this).scrollTop() > 500) { //if scroll from top is more than 500
          $('.scroll-up').fadeIn(); //display element with class 'top-scroll'; opacity increases
        } else { //if not
          $('.scroll-up').fadeOut(); //hide element with class 'top-scroll'; opacity decreases
        }
      });
    });
  
  
    /* Show More Button */
  
    $(document).ready(function(){
      $(".portfolio__item").slice(0, 3).show();
      $("#showMore").on("click", function(e){
        e.preventDefault();
        $(".portfolio__item:hidden").slice(0, 3).slideDown();
        if($(".portfolio__itemt:hidden").length == 0) {
          $("#showMore").text("No Content").addClass("noContent");
        }
      });
      
      /* Mobile Nav */
      (function () {
        var toggle = document.querySelector('.nav-toggle');
        
        toggle.addEventListener('click', function(e) {
          this.classList.toggle('opened');
        });
      })();
    })
  
            /* Nav Toggle */
  
            let nav = $("#nav");
            let navToggle = $("#navToggle");
  
            $("#navToggle").on("click", function(event) {
              event.preventDefault();
  
              nav.toggleClass("show");
          });

          $('.nav-toggle').on('click', function(event){
            $('#body').toggleClass('no-scroll');
          });
          
          $('.nav__link').on('click', function(event){
            $('#body').removeClass('no-scroll');
            $('.nav').removeClass('show');
            $('.nav-toggle').removeClass('opened');
          });
          
