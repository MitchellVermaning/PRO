var HTTP = {
    loadJSON: function(url, callback) {
        var req = new XMLHttpRequest();
        req.open('GET', url, true);

        req.addEventListener('readystatechange', function () {
            if (req.readyState == 4) {
                if(req.status == 200){
                    var response = req.responseText;
                    callback(response);

                } else {
                    console.log("Error loading page\n");
                }
            }
        });
        req.send();
    }
};

function getData(response){
    console.log("RESULT: " + response);
}
HTTP.loadJSON("file.json", getData);