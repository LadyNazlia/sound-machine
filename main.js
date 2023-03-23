

function playAudioClick(e) {
    const audioNum = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audioNum) return; //stops function because audio doesn't exist of the key that was pressed
    audioNum.currentTime = 0;
    audioNum.play();
}
const item1 = document.getElementById("grid-item1")
const item2 = document.getElementById("grid-item2")
const item3 = document.getElementById("grid-item3")
const item4 = document.getElementById("grid-item4")
const item5 = document.getElementById("grid-item5")
const item6 = document.getElementById("grid-item6")
const item7 = document.getElementById("grid-item7")
const item8 = document.getElementById("grid-item8")
const item9 = document.getElementById("grid-item9")

function playBass(e) {
      
    audioClick = document.querySelector(`audio[data-key="97"]`);
    audioClick.currentTime = 0;   
    console.log(audioClick);
    audioClick.play();
}

function playStick(e) {

    audioClick = document.querySelector(`audio[data-key="98"]`)
    audioClick.currentTime = 0;   
    console.log(audioClick)
    audioClick.play()
}

function playBell(e) {

    audioClick = document.querySelector(`audio[data-key="99"]`)
    audioClick.currentTime = 0;   
    console.log(audioClick)
    audioClick.play()
}

function playRack(e) {

    audioClick = document.querySelector(`audio[data-key="100"]`)
    audioClick.currentTime = 0;   
    console.log(audioClick)
    audioClick.play()
}

function playSnare(e) {

    audioClick = document.querySelector(`audio[data-key="101"]`)
    audioClick.currentTime = 0;   
    console.log(audioClick)
    audioClick.play()
}

function playFloor(e) {

    audioClick = document.querySelector(`audio[data-key="102"]`)
    audioClick.currentTime = 0;   
    console.log(audioClick)
    audioClick.play()
}

function playSplash(e) {

    audioClick = document.querySelector(`audio[data-key="103"]`)
    audioClick.currentTime = 0;   
    console.log(audioClick)
    audioClick.play()
}

function playCrash(e) {

    audioClick = document.querySelector(`audio[data-key="104"]`)
    audioClick.currentTime = 0;   
    console.log(audioClick)
    audioClick.play()
}

function playHihat(e) {

    audioClick = document.querySelector(`audio[data-key="105"]`)
    audioClick.currentTime = 0;   
    console.log(audioClick)
    audioClick.play()
}

window.addEventListener('keydown', playAudioClick);
item1.addEventListener('click', playBass);
item2.addEventListener('click', playStick);
item3.addEventListener('click', playBell);
item4.addEventListener('click', playRack);
item5.addEventListener('click', playSnare);
item6.addEventListener('click', playFloor);
item7.addEventListener('click', playSplash);
item8.addEventListener('click', playCrash);
item9.addEventListener('click', playHihat);