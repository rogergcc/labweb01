

$(document).ready(function(){

/*	$('#toogle-menu').click(function(){
		 $('.menu').slideToggle('normal',function(){ $(this).toggleClass('displayNone displayBlock');});
		 $('.menu').css('display', '')
	})
*/
	function limpiar()
	{
	   //document.getElementById("limpiar").innerHTML="";
	   document.getElementsByTagName(a).innerHTML="";
	}

	var mediaquery = window.matchMedia("(max-width: 768px)");
	if (mediaquery.matches) {
	   // mediaquery es 768
	   limpiar();
	} else {
	  // mediaquery no es 768
	}	
	function handleOrientationChange(mediaquery) {
	  if (mediaquery.matches) {
	    
	  } else {
	    // mediaquery fuera de 768
	  }
	}
	mediaquery.addListener(handleOrientationChange);

})