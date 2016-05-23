var searchUsr = false,
	emailUsr = false,
	uploadPhoto = false,
	galleryUsr =  false,
	messageUsr = false,
	sharePost = false,
	aiSharePost = false,
	reportPost = false,
	selfAlbum = {
		position: 0,
		cards: 0
	},
	profileMap = {
		openStatus: false,
		name: ''
	};

$('*').click(function(e){
	searchUsr = targetSearchEvt(e, searchUsr, '._hm-typeahead-856', '._hm-search-978', '._hm-search-user-overflow', '._hm-search-inner-overflow');
	emailUsr = targetEvt(e, emailUsr, '.fa-envelope56', '._hm-email-user-overflow', '._hm-email-inner-overflow');
	messageUsr = targetEvt(e, messageUsr, '.multiglass-884', '._message-ai-83', '._inner-message-ai-83');
	sharePost = targetShareEvt(e, sharePost, '.fa-share-alt', '._mds933', '.fa-times');
	reportPost = targetShareEvt(e, reportPost, '.fa-flag', '._mds182', '.fa-times');
	aiSharePost = targetShareEvt(e, aiSharePost, '.fa-bolt', '._mds939', '.fa-times');
	galleryUsr = targetGalleryEvt(e, galleryUsr, '._ijl-874', '._mds932', '._unk877', '._imgk984');
	uploadPhoto = targetUploadEvt(e, uploadPhoto, '.vw-album998', '._upload-overlay899');
});

function initMap() {
	var mapDiv = document.getElementById('map_placeholder');
	var map = new google.maps.Map(mapDiv, {
		center: {lat: 47.15, lng: 27.59},
		zoom: 12
	});
}

function targetUploadEvt(event, target, btn, container) {
	if($(event.target).is(btn)) {
		target = !target;

		$('html').css('overflow', 'hidden');

		event.stopPropagation();
	} else {
		if($(event.target).is(container)) {
			if(target) {
				target = !target;
				$('html').css('overflow', 'scroll');
			}
		}
	}

	target ? $(container).show() : $(container).hide();

	return target;
}

function targetShareEvt(event, target, btn, container, closeBtn) {
	if($(event.target).is(btn)) {
		target = !target;

		$('html').css('overflow', 'hidden');

		event.stopPropagation();
	} else {
		if($(event.target).is(container) || $(event.target).is(closeBtn)) {
			if(target) {
				target = !target;
				$('html').css('overflow', 'scroll');
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

function nextAlbumScroll(items) {
	var screenW = window.outerWidth;

	selfAlbum.position = (screenW > 1006) ? (selfAlbum.position - 222) : (selfAlbum.position - 160);
	selfAlbum.cards++;

	if(items - selfAlbum.cards > 1) {
		$('.abum901').css({"-webkit-transition":"0.7s", "webkit-transform": "translate(" + selfAlbum.position + "px,0)"});
	}
}

function addLinearQuestion() {
	$('._question-banner901').fadeIn(2000,"linear");
}

function addTwoLinearQuestion() {
	$('._question-banner902').fadeIn(2000,"linear");
}

if(document.getElementById("uploadBtn1")) {
	document.getElementById("uploadBtn1").onchange = function () {
		document.getElementById("uploadFile1").value = this.value;
	};
}

if(document.getElementById("uploadBtn2")) {
	document.getElementById("uploadBtn2").onchange = function () {
		document.getElementById("uploadFile2").value = this.value;
	};
}

if(document.getElementById("uploadBtn3")) {
	document.getElementById("uploadBtn3").onchange = function () {
		document.getElementById("uploadFile3").value = this.value;
	};
}

if(document.getElementById("uploadBtn4")) {
	document.getElementById("uploadBtn4").onchange = function () {
		document.getElementById("uploadFile4").value = this.value;
	};
}

if(document.getElementById("uploadBtn5")) {
	document.getElementById("uploadBtn5").onchange = function () {
		document.getElementById("uploadFile5").value = this.value;
	};
}

$(document).ready(function () {
	setTimeout(function(){
		$('#_question34').fadeIn(1000,"linear");
	}, 3000);
});

function closeQuestionTab(id) {
	$('#' + id).fadeOut(1000,"linear");
}

function answerAlg(id,question,q,answer) {
	closeQuestionTab(id);
	$('#' + question).fadeIn(1000,"linear");
}

function loadComments() {
	$('#comment_4').fadeIn(1000,"linear");
	$('#comment_5').fadeIn(1000,"linear");
}

function preparePostTimb() {
		$('#initial-comment86').html('');
		$('#ai-post-904').css('min-height', '100px');
}

function activateLocation() {
	$('#ai-main-99').css('color', '#5cb85c');
}

function editProfileInformation() {
	$('._profile-edit-88').each(function(){
		$(this).attr('contenteditable', true);
		$(this).css('background', '#f7f7f7');
	})
	$('#save-profile-info').show();
	profileMap.openStatus = true;
}

function saveProfileInformation() {
	$('#save-profile-info').hide();
	$('#pencil-profile-info').hide();
	$('#_profile-information-loader').fadeIn(1000,"linear");
	profileMap.openStatus = false;
	setTimeout(function(){
		$('._profile-edit-88').each(function(){
			$(this).attr('contenteditable', false);
			$(this).css('background', 'white');
		});
		$('#_profile-information-loader').hide();
		$('#pencil-profile-info').fadeIn(1000,"linear");
	}, 1000);
}

function editInterests() {
	$('#save-profile-interest').show();
	$('.tokenfield').fadeIn(1000,"linear");
	$('._hobby-close-67').each(function(){
		$(this).show();
	});
}

function saveInterests() {
	$('#save-profile-interest').hide();
	$('#pencil-profile-interest').hide();
	$('#_profile-interest-loader').fadeIn(1000,"linear");
	setTimeout(function(){
		$('#_profile-interest-loader').hide();
		$('#pencil-profile-interest').fadeIn(1000,"linear");
		$('.tokenfield').fadeOut(1000,"linear", function(){
			$('._hobby-close-67').each(function(){
				$(this).hide();
			});
		});
	}, 1000);
}

function removeInterest(id) {
	$('#'+id).hide();
}

function editProfileMoreInformation(btn1, btn2, btn3, selectOpt) {
	$('#' + btn1).hide();
	$('#' + btn2).show();
	$('#' + btn3).hide();
	$('#' + selectOpt).show();
}

function saveProfileMoreInformation(btn1, btn2, btn3, loader, selectOpt) {
	$('#' + btn1).hide();
	$('#' + loader).fadeIn(1000,"linear");
	setTimeout(function(){
		$('#' + loader).hide();
		$('#' + btn2).show();
		$('#' + selectOpt).hide();
		$('#' + btn3).show();
	}, 1000);

}

function openMapSelection() {
	if(profileMap.openStatus) {
		$('._map-overlay98').css('visibility', 'visible');
		$('._map-overlay98').css('z-index', '9999');
		$('html').css('overflow', 'hidden');
	}
}

function saveGlobalPosition() {
	if(profileMap.name.length > 0) {
		$('#position-input-map').html(profileMap.name);
	}
	hideMapOverlay();
}

function hideMapOverlay() {
	$('._map-overlay98').css('visibility', 'hidden');
	$('._map-overlay98').css('z-index', '1');
	$('html').css('overflow', 'scroll');
}

if(document.getElementById("tokenfield")) {
	$('#tokenfield').tokenfield();
}

function zoomPulse(container, btn) {
	$('#' + container).addClass('_zoom-green100');
	$('#' + btn).addClass('transition');
	setTimeout(function(){
		$('#' + btn).removeClass('transition');
	}, 1000);
}

function retimb(value) {
	$('._retimb-btn-506').hide();
	$('._retimb-loader').fadeIn(1000,"linear");
	setTimeout(function(){
		$('._retimb-loader').hide();
		if(value == 0) {
			$('._mds933').hide();
			sharePost = false;
		} else {
			$('._mds939').hide();
			aiSharePost = false;
		}
		$('._retimb-btn-506').show();
		$('html').css('overflow', 'scroll');
	}, 1000);
}

function reportPostFn() {
	$('._report-btn-193').hide();
	$('._report-loader').fadeIn(1000,"linear");
	setTimeout(function(){
		$('._report-loader').hide();
		$('._mds182').hide();
		reportPost = false;
		$('._report-btn-193').show();
		$('html').css('overflow', 'scroll');
	}, 1000);
}

function retimbAddComment() {
	$('._add-comment89').html('');
	$('._retimb100').css('min-height', '70px');
}

$(function() {
	var element = null;
	var options = {
		placement: function (context, source) {
			var $win, $source, winWidth, popoverWidth, popoverHeight, offset, toRight, toLeft, placement, scrollTop;

			$win = $(window);
			$source = $(source);
			element = placement = $source.attr('data-placement');
			popoverWidth = 400;
			popoverHeight = 270;
			offset = $source.offset();

			// Check for horizontal positioning and try to use it.
			if (placement.match(/^right|left$/)) {
				winWidth = $win.width();
				toRight = winWidth - offset.left - source.offsetWidth;
				toLeft = offset.left;

				if (placement === 'left') {
					if (toLeft > popoverWidth) {
						return 'left';
					}
					else if (toRight > popoverWidth) {
						return 'right';
					}
				}
				else {
					if (toRight > popoverWidth) {
						return 'right';
					}
					else if (toLeft > popoverWidth) {
						return 'left';
					}
				}
			}

			// Handle vertical positioning.
			scrollTop = $win.scrollTop();
			if (placement === 'bottom') {
				if (($win.height() + scrollTop) - (offset.top + source.offsetHeight) > popoverHeight) {
					return 'bottom';
				}
				return 'top';
			}
			else {
				if (offset.top - scrollTop > popoverHeight) {
					return 'top';
				}
				return 'bottom';
			}
		},
		trigger: 'manual',
		html: true,
		content: function() {
			return $('#' + ($(this).attr('data-user'))).html();
		},
		animation: false
	};

	$('._popover301').popover(options)
		.on("mouseenter", function () {
			var _this = this;
			$(this).popover("show");
			$(".popover").on("mouseleave", function () {
				$(_this).popover('hide');
			});
		}).on("mouseleave", function () {
			var _this = this;
			setTimeout(function () {
				if (!$(".popover:hover").length) {
					$(_this).popover("hide");
					popOverState = false;
				}
			}, 300);
		});


	if($('._report-overlay').html()) {
		$('._report-overlay').draggable({cursor: "move"});
	}
	if($('._retimb-container933').html()) {
		$('._retimb-container933').draggable({cursor: "move"});
	}
	$('.fa-share-alt').tooltip();
	$('.fa-heart').tooltip();
	$('.fa-bolt').tooltip();
	$('.fa-flag').tooltip();

	$( "#age-slider" ).slider({
		range: true,
		min: 18,
		max: 90,
		values: [ 20, 30 ],
		slide: function( event, ui ) {
			if((ui.values[ 1 ] > 23) && (ui.values[ 0 ] < 80)) {
				$( "#search-age" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		}
	});
	$( "#search-age" ).val( "" + $( "#age-slider" ).slider( "values", 0 ) + " - " + $( "#age-slider" ).slider( "values", 1 ) );

	$( "#personality-slider" ).slider({
		range: "min",
		value: 10,
		min: 0,
		max: 100,
		slide: function( event, ui ) {
			$( "#personality-context" ).val( ui.value + "%" );
		}
	});
	$( "#personality-context" ).val( $( "#personality-slider" ).slider( "value" ) + "%");

});

function addContact(source) {
	$(source).html('Contact requested');
};

function goToRoute(url) {
	window.location = url;
}





