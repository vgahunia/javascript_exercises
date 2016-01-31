
$(document).ready(function() {

	$('#10').click(function() {
		$("#answer").load("ajax/calc.html");
	})

	var equation = "";

	$('.digit').click(function() {
		equation += $(this).text();
		$('#calc_answer').html(equation);
	})

	$('.op').click(function() {
		equation += $(this).text();
		$('#calc_answer').html(equation);
	})
	
})

