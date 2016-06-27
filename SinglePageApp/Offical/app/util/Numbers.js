var app = app || {};

// maak hier een app.StudentsModel object
// dit object bevat de functies om studenten op te halen, etc.
// vanuit dit bestand ga je ook je PHP API lastig vallen met de vraag "mag ik alle studenten"

app.stuffModel = {
    randomNumber: function(response) {
        return Math.floor(Math.random() * response.length);
    },
    username: function(response, id) {
        return response[id];
    }
};