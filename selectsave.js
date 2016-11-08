    var clipboard = new Clipboard('.logoImage', {
        text : function(trigger){
        return trigger.getAttribute('src');
    }
    });

    clipboard.on('success', function(e) {
        console.log(e);
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });