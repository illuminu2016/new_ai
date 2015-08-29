var addUsr = false,
	emailUsr = false,
	langUsr = false,
	questionUsr = false,
	barsUsr = false,
	searchUsr = false;

$('*').click(function(e){
	addUsr = targetEvt(e, addUsr, '.fa-user-plus', '._hm-add-user-overflow', '._hm-add-inner-overflow');
	emailUsr = targetEvt(e, emailUsr, '.fa-envelope', '._hm-email-user-overflow', '._hm-email-inner-overflow');
	langUsr = targetEvt(e, langUsr, '._hm-lang-icon', '._hm-lang-user-overflow', '._hm-lang-inner-overflow');
	questionUsr = targetEvt(e, questionUsr, '.fa-question-circle', '._hm-question-user-overflow', '._hm-question-inner-overflow');
	barsUsr = targetEvt(e, barsUsr, '.fa-bars', '._hm-bars-user-overflow', '._hm-bars-inner-overflow');
	searchUsr = targetSearchEvt(e, searchUsr, '._hm-typeahead-856', '._hm-search-978', '._hm-search-user-overflow', '._hm-search-inner-overflow');
});

function targetEvt(event, target, btn, container, inDivider) {
	if($(event.target).is(btn)) {
		target = !target;
	} else {
			if($(event.target).is(inDivider)) {
				console.log("aa");
			} else {
				if(target) {
					target = !target;
				}
			}
	}

	target ? $(container).show() : $(container).hide();

	return target;
}

function targetSearchEvt(event, target, btn, searchIcn, container, inDivider) {
	if(($(event.target).is(btn)) || ($(event.target).is(searchIcn))) {
		if(!target) {
			target = !target;
		}
	} else {
			if($(event.target).is(inDivider)) {
				console.log("aa");
			} else {
				if(target) {
					target = !target;
				}
			}
	}

	target ? $(container).show() : $(container).hide();

	return target;
}
