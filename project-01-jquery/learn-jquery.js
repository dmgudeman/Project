//  https://www.youtube.com/watch?v=v-RC3kJCL4c
$(function () {
   // BASIC SELECTORS
   // $('*').css("border", "4px solid red");

   // BASIC ANIMATIONS
   // $('.box:first').animate({bottom: '200px', left: '200px'  }, 300);

   // INDEX FILTERS
   // $('p:lt(2)').css('border',' 4px solid red');

   // RELATIONSHIP FILTERS
   // $('h2:has(span)').css('border',' 4px solid red');
   // $('.box:parent').css('border',' 4px solid red');
   // $('.box:empty').css('border',' 4px solid red');

   // ATTRIBUTE FILTERS - i.e. class, src, href
   // $('p[class="lead"]').css('border',' 4px solid red');
   // $('p[name="shorty"]').css('border',' 4px solid red');
   // $('p[name^="shor"]').css('border',' 4px solid red');   //  THIS IS STARTS WITH REGEX
   // $('a[href$=".co.uk"]').css('border',' 4px solid red');   // THIS IS ENDS WITH REGEX

   // ATTRIBUTE METHODS
   // alert($('p:first').attr('class'));  // returns what the class is 
   // $('p:first').attr('class', 'not-lead');  // sets the class to not-lead

   // IMG SWAP
   // $('img').attr('src', 'img2.jpg');   // swaps out image
   // $('img').delay(400).fadeOut(500, funtion(){
   //     $(this).attr('src', 'img2.jpg').fadeIn(500);
   //   });

   // CLASS METHODS
   //  $('p').toggleClass("blue");

   // CONTENT METHODS
   //$('p:first').text("Hey");
   //   $('p:first').html('<a href="index1.html">link</a>');
   // $('input').val('yo dude!');

   //====================lesson 3====================================

   // $('h2').parents().css('border',' 4px solid red');
   // $('h2').parents('section').css('border',' 4px solid red');
   // $('h2').siblings().css('border',' 4px solid red');
   // $('h2').siblings('p:first').css('border',' 4px solid red');
   // $('h2').siblings().last().css('border',' 4px solid red');
   // $('h2').parents('section').siblings().css('border',' 4px solid red');
   //  $('h2').bind('mouseover', function(){
   //     $(this).toggleClss('blue');
   //  })
   //  $('html').children().bind('keydown', function(){
   //     $(this).toggleClass('blue');
   //  })
   
   $('*')
   .bind('keydown', function () {
      $(this).toggleClass('blue');
   })

});
