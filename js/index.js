import Events from './events.js'
import Controls from './controls.js'
import Timer from './timer.js'
import Sounds from './sounds.js'

export {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  minutesDisplay,
  secondsDisplay,
  buttonForest,
  buttonRain,
  buttonCoffe,
  buttonFirePit,
  buttonLightMode,
  buttonDarkMode,
  volumeForest,
  volumeRain,
  volumeCoffe,
  volumeFire
}

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrease = document.querySelector('.decrease')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffe = document.querySelector('.coffeeShop')
const buttonFirePit = document.querySelector('.firePit')
const buttonLightMode = document.querySelector('.lightMode')
const buttonDarkMode = document.querySelector('.darkMode')
const volumeForest = document.querySelector('.volumeForest')
const volumeRain = document.querySelector('.volumeRain')
const volumeCoffe = document.querySelector('.volumeCoffe')
const volumeFire = document.querySelector('.volumeFire')



const controls = Controls({ buttonPlay, buttonPause })

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sounds = Sounds()

Events({ controls, timer, sounds })
