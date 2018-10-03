//Add New To-Dos with Enter
$("input").keyup(function(event) {
	if (event.which === 13) {
		//Add To-Do
		$("ul").append(`<li><span><i class="fas fa-trash-alt"></i></span> ${$(this).val()}</span>`);

		//Add Check Off Functionality
		$("li:last").click(function() {
		$(this).toggleClass("completed");
		})

		//Add To-Do Delete Functionality
		$("span").click(function(event) {
			$(this).parent().fadeOut(500, function(){
				$(this).remove();
			})
		
			event.stopPropagation();
		})

		//Clear Input Value
		$(this).val("");
	}
})
