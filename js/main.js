document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('keydown', function (e) {
        const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
        if (!audio) return; // stop function while another key is down
        audio.currentTime = 0;
        audio.play();
        key.classList.add('play');
        console.log(key);
    });
});