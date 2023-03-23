function playAudioClick(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return; //stops function because audio doesn't exist of the key that was pressed
    audio.currentTime = 0;
    audio.play();
}

// function playAudioTouch(e) {
//     const button = document.getElementById(`button["$]`)
// }

window.addEventListener('keydown', playAudioClick);
// window.addEventListener('click', playAudioTouch);
