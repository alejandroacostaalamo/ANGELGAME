    $(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'sounds/intro.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load()
        // audioElement('sounds/intro.mp3');
        $.get();

        audioElement.addEventListener("ended", function() {
            this.currentTime = 0;
            this.play();
           // audioElement.play();
        }, false);

        $('.play').click(function() {
            audioElement.play();
        });

        $('.stop').click(function() {
            audioElement.pause();
        });
    });