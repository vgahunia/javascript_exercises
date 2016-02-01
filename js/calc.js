
$(document).ready(function() {

	$('#10').click(function() {
		$("#calculator").toggle("slide", 500);
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

	$('#clear').click(function(){
		equation = "";
		$('#calc_answer').html(equation);
	})
	
	$('#equal').click(function() {
		console.log(equation);
		var x = eval(equation);
		$('#calc_answer').html(x);
	})
})

