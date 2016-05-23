function closeAIQuestion(id) {
	var imgContainer = $('#badge' + id + ' div.verify-893'),
		 i = 0,
		func = function swapImages() {
			var elem ="verify-893 frame_" + i + "_delay-005s";

			imgContainer.attr('class', elem);
			++i;
			if(i == 12) {
				clearInterval(refreshId);
			}
		}

	func.i =i;
	func.id =id;

	imgContainer.show();
	var refreshId = setInterval(func ,50);

	$('#ai-question-body-' + id).css("border", "2px solid #aaa").effect('shake',{direction: 'right'});
	setTimeout(function(){
		$('#ai-question-body-' + id + ' input').prop('disabled', true);
		//imgContainer.fadeOut(1000);
	}, 1300);
}


