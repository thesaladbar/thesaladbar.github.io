  var mapScaleFactor = 1;
$(document).ready(function() {
  var feed = new Instafeed({
      get: 'tagged',
      target: 'slidesContainer',
      tagName: 'thesaladbarmy',
      clientId: '107c09c4ca70419c9e37c6844c75bafc',
      template: '<div class="slide  table"><div class="tableCell" style="height: '+$(window).height()+'px;"><a class="th radius" href="{{link}}"><img class="instagram" src="{{image}}" /></a></div></div>',
      after: function(){
        var slides = $('#instafeed .slides .slidesContainer').find('.slide');
        var numSlides = slides.length;
        var sliderWidth = numSlides * 100;
        var slideWidth = 100 / numSlides;

        $('#instafeed').find('.slidesContainer').css('width', sliderWidth + '%');
        $('#instafeed').find('.slides').after('<div class="controlArrow prev"></div><div class="controlArrow next"></div>');

        slides.each(function(index) {
          //if the slide won#t be an starting point, the default will be the first one
          if(!index && $('#instafeed').find('.slidesContainer').find('.slide.active').length == 0){
            $(this).addClass('active');
          }

          $(this).css('width', slideWidth + '%');

        });    
      
      },
      error: function(){},
		  resolution: 'standard_resolution'
  });
  function init(){
	      $('#fullpage').fullpage({
		      verticalCentered: true,
		      navigation: true,
		      continuousVertical: false,
          slidesNavigation: false,
          slidesNavPosition: 'bottom', 
          noWrap: true,
                    
	      });
        if( ! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          $('.scene').parallax();
        }else{
          mapScaleFactor = 0.8;
        }
        $(document).resize(function(){
          $("#gmap").width($(this).width()*mapScaleFactor);
          $("#gmap").height($(this).height()*mapScaleFactor);          
          $("#gmap").css('display','inline-block')
        }).trigger("resize");
 }
 init(); 
 $('#instafeed').find('.slidesContainer').attr('id','slidesContainer');
 feed.run();

          
});

