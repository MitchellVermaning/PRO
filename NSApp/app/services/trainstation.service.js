(function () {
    'use strict';

    angular
        .module('services')
        .service("TrainStationService", TrainStationService);

    function TrainStationService($http) {
        var self = this;

        // -- Laad de tekst zien tijdens het laden -- //
        self.allStations = [
            {name: "Bezig met laden ..."}
        ];

        // -- Vervang de tekst met de trainstation gegevens -- //
        $http.get('data/trainstations.json').then(function (trainStations) {
            self.allStations.length = 0;
            angular.extend(self.allStations, trainStations.data);
        });
    }
})();