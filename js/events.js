
 import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonDecrease,
  buttonIncrease,
  buttonForest,
  buttonCoffe,
  buttonFirePit,
  buttonRain,
  buttonLightMode,
  buttonDarkMode,
  volumeForest,
  volumeRain,
  volumeCoffe,
  volumeFire
 } from "./index.js"
 

export default function Events ({controls,timer,sounds}){

 buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countdown()
  sounds.pressButton()
})
buttonPause.addEventListener('click', function() {
 controls.pause()
 timer.hold()
 sounds.pressButton()
})
 
buttonStop.addEventListener('click', function() {
  timer.reset()
  controls.stop()
  sounds.pressButton()
  sounds.soundEnd()
})

buttonIncrease.addEventListener('click',function(){
  timer.addTime()
  sounds.pressButton()
})

buttonDecrease.addEventListener('click', function() {
  timer.timeSubtract()
  sounds.pressButton()
})

buttonForest.addEventListener('click', function(){
  controls.audioStatus(sounds.soundForest)
  sounds.soundRain.pause()
  sounds.soundCoffe.pause()
  sounds.soundFirePit.pause()
  controls.colorButtonForest()
  
})

volumeForest.addEventListener('change',function(){
  sounds.adjustVolume(sounds.soundForest, volumeForest.value )
})

buttonRain.addEventListener('click',function(){
  controls.audioStatus(sounds.soundRain)
  sounds.soundForest.pause()
  sounds.soundCoffe.pause()
  sounds.soundFirePit.pause()
  controls.colorButtonRain()
})

volumeRain.addEventListener('input',function(){
  sounds.adjustVolume(sounds.soundRain, volumeRain.value )
})

buttonCoffe.addEventListener('click',function(){
  controls.audioStatus(sounds.soundCoffe)
  sounds.soundForest.pause()
  sounds.soundFirePit.pause()
  sounds.soundRain.pause()
  controls.colorButtonCoffe()
})

volumeCoffe.addEventListener('input',function(){
  sounds.adjustVolume(sounds.soundCoffe, volumeCoffe.value )
})

buttonFirePit.addEventListener('click',function(){
  controls.audioStatus(sounds.soundFirePit)
  sounds.soundCoffe.pause()
  sounds.soundForest.pause()
  sounds.soundRain.pause()
  controls.colorButtonFirePit()
})

volumeFire.addEventListener('input',function(){
  sounds.adjustVolume(sounds.soundFirePit, volumeFire.value )
})

buttonLightMode.addEventListener('click', function(){
 controls.lightMode()
 controls.darkMode()

})

buttonDarkMode.addEventListener('click', function(){
  controls.dark()
  controls.darkMode()
 })

}