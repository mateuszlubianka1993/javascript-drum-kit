document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('keydown', playSound)
    
    function removeTransition(e) {
        if(e.propertyName !== 'transform') return; //when it's not a transform
        this.classList.remove('play');
    }
    
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
});

const playSound = (e) => {
        const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
        if (!audio) return; // stop function while another key is down
        audio.currentTime = 0;
        audio.play();
        key.classList.add('play');
    };