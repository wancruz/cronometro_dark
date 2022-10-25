
export default function(){

const soundForest = new Audio ("https://github.com/Paru369/focus-timer/blob/main/sounds/Floresta.wav?raw=true")

const soundRain = new Audio ("https://github.com/Paru369/focus-timer/blob/main/sounds/Chuva.wav?raw=true")

const soundCoffe = new Audio ("https://github.com/Paru369/focus-timer/blob/main/sounds/Cafeteria.wav?raw=true")

const soundFirePit = new Audio ("https://github.com/Paru369/focus-timer/blob/main/sounds/Lareira.wav?raw=true")

const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

 soundForest.loop = true
 soundCoffe.loop = true
 soundRain.loop = true
 soundFirePit.loop = true


function pressButton (){
  buttonPressAudio.play()
}

function soundEnd(){
  soundForest.pause()
  soundRain.pause()
  soundCoffe.pause()
  soundFirePit.pause()
}

function adjustVolume(sound,volume){
  sound.volume = volume
}

return {
  soundForest,
  soundRain,
  soundCoffe,
  soundFirePit,
  pressButton,
  kitchenTimer,
  soundEnd,
  adjustVolume
}

}