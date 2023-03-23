function playAudio(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio) return; //stops function because audio doesn't exist of the key that was pressed
    audio.currentTime = 0;
    audio.play();
}

window.addEventListener('keydown', playAudio);