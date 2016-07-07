function initNoIdentityMap() {
	var mapDiv = document.getElementById('map_noidentity');
	var map = new google.maps.Map(mapDiv, {
		center: {lat: 47.15, lng: 27.59},
		zoom: 12
	});
};

function goToRoute(url) {
	window.location = url;
};

/*$('.vw-information-894').block({ message: null });
$('.vw-album-894').block({ message: null });*/
$('.container').block({ message: null });

