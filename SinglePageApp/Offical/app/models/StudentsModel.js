var app = app || {};

// maak hier een app.StudentsModel object
// dit object bevat de functies om studenten op te halen, etc.
// vanuit dit bestand ga je ook je PHP API lastig vallen met de vraag "mag ik alle studenten"

app.studentModel = {
    loadStudent: function(response) {

        id = app.stuffModel.randomNumber(response);
        user = app.stuffModel.username(response, id);

        naam.innerHTML = user.firstname + " " + user.lastname;
        texttop.innerHTML = user.firstname + " is een leerling van " + user.height + " cm. Hij zit in klas " + user.class + " en behoort tot het geslacht " + user.gender + ".<br>Zijn ogen zijn " + user.eyecolor + "." ;

        var text = "";

        for (var i = 0; i < 5; i++) {
            text += "<tr> <td>John</td> <td>Doe</td> <td>80</td> </tr>";
        }
        forloopTable.innerHTML = text;
    },
    loadStudents: function() {
        //document.querySelector()
        
    },
    loadStudentByID: function() {

    },
    loadStudentsByTop3: function() {

    },
    refreshStudents: function(){
        app.httpModel.loadJSON("json.php", app.studentModel.loadStudent);
    }
};