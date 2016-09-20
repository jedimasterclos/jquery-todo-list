$(document).ready(function() {
	


	$('#submitB').click(function() {
		var listItem = $('#submitTodo').val();
		var rmvList = ' <img src ="http://vignette3.wikia.nocookie.net/clubpenguin/images/e/e3/Trashcan_furniture_icon.png/revision/latest?cb=20120607190621">';



		$('#listOf').append('<li>' + listItem + rmvList + '</li>');
		$('#submitTodo').val('');
	});

	$(document).on('click', 'img', function() {
  		$(this).parent().remove();
	});


$("#listOf").sortable();

});