(function () {
    'use strict';

    angular
        .module('controllers')
        .controller('TrainStationController', TrainStationController);

    function TrainStationController(TrainStationService) {

        // -- Maak alle variable aan -- //
        var vm = this, theMapTypeID, defaultLat = 52.1958346, defaultLong = 5.9369041, geocoder = new google.maps.Geocoder();

        vm.currentLocation = {};
        vm.allStations = TrainStationService.allStations;
        vm.clickOnPinToMap = clickOnPinToMap;

        // -- Probeer huidige locatie op te halen -- //
        loadMyLocation();

        // -- Zet standaard locatie op de kaart -- //
        setOnMap(defaultLat, defaultLong, 8, "TERRAIN");

        // -- Wijs functies toe aan controller class -- //
        vm.setStation = sendTrainStation;
        vm.setLocationOnMap = sendLocationOnMap;


        ////// -- Functies -- //////

        // -- Haal huidige locatie op via GPS -- //
        function loadMyLocation() {
            function success(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;

                vm.currentLocation = {lat: latitude, long: longitude};
            }

            navigator.geolocation.getCurrentPosition(success);
        }

        // -- Click event vanuit HTML. Toon deze op de kaart en wijs ze toe aan de variable 'currentStation' -- //
        function sendTrainStation(currentStation) {

            if (vm.currentStation != currentStation) {
                vm.currentStation = currentStation;
                setOnMap(currentStation.latitude, currentStation.longitude, 18, "HYBRID");
            } else {
                vm.currentStation = undefined;
                setOnMap(defaultLat, defaultLong, 8, "TERRAIN");
            }
        }

        // -- Verstuur huidige locatie naar de kaart. Bekijk wel of deze wel opgehaald is. Zo niet, probeer het nog 1 keer opnieuw en geef anders een melding weer -- //
        function sendLocationOnMap() {

            if (vm.currentStation != 'currentLocation') {
                vm.currentStation = 'currentLocation';
                if (vm.currentLocation.lat == null) {
                    console.log("Nieuwe poging tot laden locatie...");
                    loadMyLocation();
                    if (vm.currentLocation.lat == null) {
                        alert("Het is helaas niet mogelijk uw locatie te laden..");
                        vm.currentStation = undefined;
                    }
                } else {
                    // -- Het is gelukt. Verstuur naar de kaart -- //
                    setOnMap(vm.currentLocation.lat, vm.currentLocation.long, 18, "HYBRID");
                    vm.currentStation = 'currentLocation';

                    // -- Bereken de straatnaam d.m.v. lat en long -- //
                    var latLng = new google.maps.LatLng(vm.currentLocation.lat, vm.currentLocation.long);

                    geocoder.geocode({'latLng': latLng}, function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            vm.currentLocation.name = ": " + results[0].formatted_address;
                        }
                    });
                }
            } else {
                // -- Laat de hele kaart weer zien -- //
                vm.currentStation = undefined;
                setOnMap(defaultLat, defaultLong, 8, "TERRAIN");
            }
        }

        // -- Als je in de map op een pin klinkt, wordt het betreffende station op de kaart geopend -- //
        function clickOnPinToMap(latitude,longitude) {
            vm.currentStation = undefined;
            setOnMap(latitude, longitude, 18, "HYBRID");
        }

        // -- Deze functie zet de coördinaten op de kaart -- //
        function setOnMap(lat, long, zoom, type) {
            switch (type) {
                case "HYBRID":
                    theMapTypeID = google.maps.MapTypeId.HYBRID;
                    break;
                case "TERRAIN":
                    theMapTypeID = google.maps.MapTypeId.TERRAIN;
                    break;
            }
            vm.map = {
                center: {latitude: lat, longitude: long},
                zoom: zoom,
                options: {mapTypeId: theMapTypeID}
            };
        }

    }

})();