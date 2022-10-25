
 import {
  buttonForest,
  buttonCoffe,
  buttonFirePit,
  buttonRain,
  buttonLightMode,
  buttonDarkMode,
  buttonStop,
  buttonDecrease,
  buttonIncrease
 } from "./index.js"


 export default function Controls ({buttonPlay,buttonPause}) {


function play() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
}

function pause(){
 buttonPause.classList.add('hide')
 buttonPlay.classList.remove('hide')
}

function reset(){
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

function stop(){
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

function lightMode(){
  buttonLightMode.classList.toggle('hide')
  buttonDarkMode.classList.toggle('hide')
}

function dark(){
  buttonLightMode.classList.toggle('hide')
  buttonDarkMode.classList.toggle('hide')
  
}

function darkMode(){
  document.body.classList.toggle('dark')
  buttonPlay.classList.toggle('colorSettings')
  buttonPause.classList.toggle('colorSettings')
  buttonStop.classList.toggle('colorSettings')
  buttonDecrease.classList.toggle('colorSettings')
  buttonIncrease.classList.toggle('colorSettings')
}

function colorButtonForest(){
  buttonForest.classList.toggle('onFocus')
  buttonRain.classList.remove('onFocus')
  buttonFirePit.classList.remove('onFocus')
  buttonCoffe.classList.remove('onFocus')
}
function colorButtonRain(){
  buttonRain.classList.toggle('onFocus')
  buttonForest.classList.remove('onFocus')
  buttonFirePit.classList.remove('onFocus')
  buttonCoffe.classList.remove('onFocus')
}
function colorButtonCoffe(){
  buttonCoffe.classList.toggle('onFocus')
  buttonForest.classList.remove('onFocus')
  buttonRain.classList.remove('onFocus')
  buttonFirePit.classList.remove('onFocus')
}
function colorButtonFirePit(){
  buttonFirePit.classList.toggle('onFocus')
  buttonForest.classList.remove('onFocus')
  buttonRain.classList.remove('onFocus')
  buttonCoffe.classList.remove('onFocus')
}

function audioStatus(sound){
  let audioPaused = sound.paused
  if (audioPaused) {
    sound.play()
  } else {
    sound.pause()
  }
}



  return {play,pause,reset,stop,colorButtonForest,colorButtonFirePit,colorButtonRain,colorButtonCoffe,audioStatus,lightMode,dark,darkMode}
}