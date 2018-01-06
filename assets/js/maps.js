/*
function initialize() {
	var mapOptions = {
		streetViewControl: false,
		zoom: 4,
		center: new google.maps.LatLng(45.610022, 6)
	}
	var map = new google.maps.Map(document.getElementById('map-canvas'),
			mapOptions);


	map.setOptions({'scrollwheel': false});

	var myLatLng = new google.maps.LatLng(43.610022, 3.874162);
	var beachMarker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: ''
	});
}

google.maps.event.addDomListener(window, 'load', initialize);
*/

function initialize() {
	var mapOptions = {
		streetViewControl: false,
		zoom: 9,
		center: new google.maps.LatLng(1.342465, 103.829273)
	}
	var map = new google.maps.Map(document.getElementById('map-canvas'),
			mapOptions);


	map.setOptions({'scrollwheel': false});

	var myLatLng = new google.maps.LatLng(1.342465, 103.829273);
	var beachMarker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: ''
	});
}

google.maps.event.addDomListener(window, 'load', initialize);
