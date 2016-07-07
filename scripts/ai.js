var allPosts = true,
	myPosts = true,
	aiPosts = true;

$(':checkbox').checkboxpicker();
$('#my-posts90').block({ message: null });
$('#input-2').change(function(a) {
	allPosts = !allPosts;

	if(!allPosts) {
		$('#my-post56').block({ message: null });
		$('#my-posts90').unblock();
		$('#input-4').prop('checked', true);
		$('#input-3').prop('checked', false);
	}
});

$('#input-4').change(function(a) {
	myPosts = !myPosts;

	if(!myPosts && !aiPosts) {
		$('#my-posts90').block({ message: null });
		$('#my-post56').unblock();
		$('#input-2').prop('checked', true);
	}
});

$('#input-3').change(function(a) {
	aiPosts = !aiPosts;

	if(!myPosts && !aiPosts) {
		$('#my-posts90').block({ message: null });
		$('#my-post56').unblock();
		$('#input-2').prop('checked', true);
	}
});
