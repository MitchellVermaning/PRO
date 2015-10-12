// we maken een xmlHTTPRequest aan
var req = new XMLHttpRequest();
// welke url moet er worden opgehaald?
req.open('GET', 'image.json', true);

// we voegen een 'listener' toe om te kijken of de pagina geladen is
req.addEventListener('readystatechange', function () {
    if (req.readyState == 4) {
        if(req.status == 200){
            var inn = req.responseText;
            var uit = JSON.parse(inn);
            var link = uit.image;
            document.getElementById("image").src = link;

        } else {
            console.log("Error loading page\n");
        }
    }
});
// we starten het laden van de pagina
req.send();