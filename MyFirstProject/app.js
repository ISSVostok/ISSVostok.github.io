$(document).ready(function() {
  $('#image-url').keyup(function(){
	var url = $(this).val();
	$('.thumbnail img').attr('src', url);
  });
  
  $('#top-text').keyup(function(){
	var top = $(this).val();
	$('.top-title').text(top);
  });
  
  $('#bottom-text').keyup(function(){
	var top = $(this).val();
	$('.bottom-title').text(top);
  });
});