$(document).ready(function() {
	$('#fullpage').fullpage({
		verticalCentered: true,
		navigation: true,
		continuousVertical: false,  
	});
  $('.scene').parallax();
  $(document).resize(function(){
    $("#gmap").width($(this).width());
    $("#gmap").height($(this).height());
  }).trigger("resize")
});
