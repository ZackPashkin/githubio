$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '257879401',
        limit: 120,
        resolution: 'standard_resolution',
        accessToken: '257879401.1677ed0.64ef129dd6a7434f9461169596fc3d83',
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