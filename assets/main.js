$(document).ready(function() {
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
        }
        $(document).resize(function(){
          $("#gmap").width($(this).width());
          $("#gmap").height($(this).height());
        }).trigger("resize");
 }
 
  var feed = new Instafeed({
      get: 'tagged',
      tagName: 'thesaladbarmy',
      clientId: '107c09c4ca70419c9e37c6844c75bafc',
      template: '<div class="slide"><a class="th radius" href="{{link}}"><img class="instagram" src="{{image}}" /></a></div>',
      after: function(){init();},
      error: function(){init();},
		  resolution: 'low_resolution'
  });
  feed.run();

          
});

