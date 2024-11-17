import { initializeCanvas, draw } from './draw.js'
import { update, handleShot } from './update.js'
import Zombie from './Zombie.js'

const main = document.getElementsByTagName("main")?.[0]
const canvas = document.getElementsByTagName("canvas")?.[0]
/**
 * @type CanvasRenderingContext2D
 */
const ctx = canvas.getContext("2d")
const sceneWidth = 1680
const sceneHeight = 1050
/**
 * @type Zombie[]
 */
const zombies = []
const stats = {
  score: 0,
  lives: 3
}
const loseAudio = new Audio('./assets/sad-music.mp3');

function gameLoop() {
  update(zombies, stats)
  draw(ctx, zombies, stats)
  if (stats.lives === 0) {
    endGame()
    return
  }
  requestAnimationFrame(gameLoop)
}

function initialize() {
  initializeCanvas(canvas, sceneWidth, sceneHeight)
  gameLoop()
}

function endGame() {
  loseAudio.play()
  const popUp = document.createElement('div')
  popUp.className = "pop-up"
  popUp.innerText = `You Lost!`
  const button = document.createElement('button')
  button.innerText = 'Play Again'
  button.onclick = restartGame
  popUp.append(button)
  main.append(popUp)
}

function restartGame() {
  loseAudio.currentTime = 0
  loseAudio.pause()
  zombies.length = 0
  stats.lives = 3
  stats.score = 0
  const popUp = document.getElementsByClassName("pop-up")?.[0]
  if (popUp != null) {
    popUp.remove()
  }
  gameLoop()
}

canvas.onclick = (event) => {
  const rect = event.target.getBoundingClientRect()
  const x = event.pageX - rect.x
  const y = event.pageY - rect.y
  handleShot(zombies, x, y, stats)
}

initialize()

