window.addEventListener("load", function(){

    var imageGallery = new ImageGallery('#imageGallery');

    //imageGallery.setData(imageURLs);

    // wat mogen jullie mogelijk maken:
    imageGallery.loadJSON("data.json");

});