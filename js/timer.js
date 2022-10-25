
import Sounds from "./sounds.js"


 export default function Timer ({secondsDisplay,minutesDisplay,resetControls}){
  
  let timeTimeOut
  let minutes = Number(minutesDisplay.textContent)

/*============= Atualizar Display==========================*/ 
function updateDisplay(newMinutes,seconds) {
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  minutesDisplay.textContent = String(newMinutes).padStart (2,"0")
  secondsDisplay.textContent = String(seconds).padStart(2,"0")
} 
/*============= Resetar Display==========================*/ 
function reset(){
  updateDisplay(minutes,0)
  clearTimeout(timeTimeOut)
  
}

/*============= Contagem do Timer ==========================*/ 
function countdown() {
  timeTimeOut = setTimeout(function(){
   let seconds = Number(secondsDisplay.textContent)
   let minutes = Number(minutesDisplay.textContent)
   let isFinished = minutes <=0 && seconds <=0
  
  updateDisplay(minutes,0)

   if (isFinished) {
     resetControls()
     updateDisplay()
     Sounds().kitchenTimer.play()
     return
   }

   if (seconds <=0) {
     seconds = 60
     --minutes
   }
    updateDisplay(minutes,String(seconds-1))
 
   countdown()
 }, 1000)
}

/*============= Pausar Timer ==========================*/ 
function hold() { 
  clearTimeout(timeTimeOut)
}
/*==================Adicionar e Remover Minutos==============*/ 

function addTime(){
updateDisplay(Number(minutesDisplay.textContent) + 5 ) 
}

function timeSubtract(){

let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)

   if (minutes> 5) {

    updateDisplay(minutes- 5,seconds)
   }
   else {
     updateDisplay(0,seconds)
   }
}

  return {countdown,updateDisplay,hold,reset,addTime,timeSubtract}
  
}