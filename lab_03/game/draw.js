import Zombie from "./Zombie.js"


const images = initializeImages()
const heartsX = 50
const heartsY = 50
const heartWidth = 120
const heartHeight = 120
const scoreX = 1300
const scoreY = 145

/**
 * @param {HTMLCanvasElement} canvas 
 */
function initializeCanvas(canvas, canvasWidth, canvasHeight) {
  if (canvas == null) {
    console.log('canvas is null')
    return
  }
  canvas.width = canvasWidth
  canvas.height = canvasHeight
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {Zombie[]} zombies 
 */
function draw(ctx, zombies, stats) {
  ctx.drawImage(images.background, 0, 0)
  for (const zombie of zombies) {
    zombie.draw(ctx)
  }
  for (let i = 0; i < 3; i++) {
    const heart = i < stats.lives ? images.fullHeart : images.emptyHeart
    ctx.drawImage(heart, heartsX + heartWidth * i, heartsY, heartWidth, heartHeight)
  }
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.font = "bold 120px Arial"
  ctx.fillText(stats.score.toString().padStart(5, "0"), scoreX, scoreY)
}

function initializeImages() {
  const background = new Image()
  background.src = './assets/board-bg.jpg'
  const fullHeart = new Image()
  fullHeart.src = './assets/full_heart.png'
  const emptyHeart = new Image()
  emptyHeart.src = './assets/empty_heart.png'
  return { background, fullHeart, emptyHeart }
}

export { initializeCanvas, draw }
