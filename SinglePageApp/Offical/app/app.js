var app = app || {};

var id, user, refreshButton, naam, texttop, forloopTable;

function initApp()
{
    app.htmlView.getHTMLObjects();
    app.htmlView.triggerHTMLListeners();

    app.httpModel.loadJSON("json.php", app.studentModel.loadStudent);
}

window.addEventListener("load", initApp);