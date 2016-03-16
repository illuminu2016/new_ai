var searchUsr = false,
	emailUsr = false,
	uploadPhoto = false,
	galleryUsr =  false;

$('*').click(function(e){
	searchUsr = targetSearchEvt(e, searchUsr, '._hm-typeahead-856', '._hm-search-978', '._hm-search-user-overflow', '._hm-search-inner-overflow');
	emailUsr = targetEvt(e, emailUsr, '.fa-envelope56', '._hm-email-user-overflow', '._hm-email-inner-overflow');
	galleryUsr = targetGalleryEvt(e, galleryUsr, '._ijl-874', '._mds932', '._unk877', '._imgk984');
	uploadPhoto = targetUploadEvt(e, uploadPhoto, '.vw-album998', '._upload-overlay899');
});

function targetUploadEvt(event, target, btn, container) {
	if($(event.target).is(btn)) {
		target = !target;

		$('html').css('overflow', 'hidden');

		event.stopPropagation();
	} else {
		if($(event.target).is(container)) {
			if(target) {
				target = !target;
			}
		}
	}

	target ? $(container).show() : $(container).hide();

	return target;
}

function targetGalleryEvt(event, target, btn, container, inDivider, imgPlaceholder) {
	if($(event.target).is(btn)) {
		$(imgPlaceholder).attr('src', event.delegateTarget.src);
		target = !target;

		$('html').css('overflow', 'hidden');

		event.stopPropagation();
	} else {
		if($(event.target).is(inDivider) || $(event.target).is(imgPlaceholder)) {
		} else {
			if(target) {
				target = !target;
				$('html').css('overflow', 'scroll');
			}
		}
	}

	target ? $(container).show() : $(container).hide();

	return target;
}

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

function showTools(id) {
	$(id).show();
}

function hideTools(id) {
	$(id).hide();
}

document.getElementById("uploadBtn1").onchange = function () {
	document.getElementById("uploadFile1").value = this.value;
};

document.getElementById("uploadBtn2").onchange = function () {
	document.getElementById("uploadFile2").value = this.value;
};

document.getElementById("uploadBtn3").onchange = function () {
	document.getElementById("uploadFile3").value = this.value;
};

document.getElementById("uploadBtn4").onchange = function () {
	document.getElementById("uploadFile4").value = this.value;
};

document.getElementById("uploadBtn5").onchange = function () {
	document.getElementById("uploadFile5").value = this.value;
};