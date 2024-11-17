import { randMinMax } from "./utils.js"

const imageWidth = 200
const imageHeight = 312
const moveMultiplier = -0.005
const animationChangeIntervalMultiplier = 3000
const animationFramesCount = 10
const yOffset = 50
const speedOffset = 30
const sizeOffset = 0.3

export default class Zombie {

  static images = (() => {
    const img = new Image()
    img.src = `./assets/walkingdead.png`
    return img
  })()
  speed
  size
  x
  y
  animationPhase = 0
  lastUpdateTimestamp
  lastAnimationChangeTimestamp

  constructor() {
    this.x = 1700
    this.y = 650 + randMinMax(-yOffset, yOffset)
    this.speed = 60 + randMinMax(-speedOffset, speedOffset)
    this.size = 1 + randMinMax(-sizeOffset, sizeOffset)
    this.lastUpdateTimestamp = Date.now()
    this.lastAnimationChangeTimestamp = Date.now()
  }

  /**
   * @param {CanvasRenderingContext2D} ctx 
   */
  draw(ctx) {
    ctx.drawImage(Zombie.images, this.animationPhase * imageWidth, 0,
      imageWidth, imageHeight, this.x, this.y, this.getWidth(), this.getHeight())
  }

  update() {
    const timestamp = Date.now()
    this.move(timestamp)
    this.updateAnimationPhase(timestamp)
    this.lastUpdateTimestamp = timestamp
  }

  move(timestamp) {
    const dt = timestamp - this.lastUpdateTimestamp
    this.x += dt * this.speed * moveMultiplier
  }

  updateAnimationPhase(timestamp) {
    if (timestamp - this.lastAnimationChangeTimestamp < animationChangeIntervalMultiplier / this.speed) {
      return
    }
    this.animationPhase = (this.animationPhase + 1) % animationFramesCount
    this.lastAnimationChangeTimestamp = timestamp
  }

  getHeight() {
    return imageHeight * this.size
  }

  getWidth() {
    return imageWidth * this.size
  }

  checkIfHit(x, y) {
    const minX = this.x + this.getWidth() * 0.2
    const maxX = this.x + this.getWidth()
    const minY = this.y
    const maxY = this.y + this.getHeight()
    return minX < x && x < maxX && minY < y && y < maxY
  }

  checkIfInBounds() {
    return this.x + this.getWidth() > 0
  }

}
