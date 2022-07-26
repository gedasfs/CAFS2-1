let map;

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: {
			lat: 54.687157,
			lng: 25.279652,
		},
		zoom: 7,
	});

	let infoWindow = new google.maps.InfoWindow();

	const geocoder = new google.maps.Geocoder();

	map.addListener('click', (mapsMouseEvent) => {
		const latlng = new google.maps.LatLng(mapsMouseEvent.latLng.lat(), mapsMouseEvent.latLng.lng());

		geocoder.geocode({'latLng': latlng}, (results, status) => {
			if (status == google.maps.GeocoderStatus.OK) {
				// some JS AJAX requests to get forecast using "results"

				infoWindow = new google.maps.InfoWindow({
					position: mapsMouseEvent.latLng,
				});

				infoWindow.setContent('forecast');
				
				infoWindow.open(map);
			}
		});
	});
}

window.initMap = initMap;
