var searchUsr = false,
	emailUsr = false;

$('*').click(function(e){
	searchUsr = targetSearchEvt(e, searchUsr, '._hm-typeahead-856', '._hm-search-978', '._hm-search-user-overflow', '._hm-search-inner-overflow');
	emailUsr = targetEvt(e, emailUsr, '.fa-envelope56', '._hm-email-user-overflow', '._hm-email-inner-overflow');
});

function targetEvt(event, target, btn, container, inDivider) {
	if($(event.target).is(btn)) {
		target = !target;
		event.stopPropagation();
	} else {
		if($(event.target).is(inDivider)) {
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
			} else {
				if(target) {
					target = !target;
				}
			}
	}

	target ? $(container).show() : $(container).hide();

	return target;
}
