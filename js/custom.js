$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '1291858806',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '1291858806.1677ed0.fd57ac45145b4c7abe62eaae70fb3d2b',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 gallery instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});