import { randMinMax } from "./utils.js"
import Zombie from "./Zombie.js"

const spawnChance = 0.01
const pointsAddedOnShot = 20
const pointsSubtractedOnMiss = 5

/**
 * @param {Zombie[]} zombies 
 */
function update(zombies, stats) {
  if (randMinMax(0, 1) < spawnChance) {
    zombies.push(new Zombie())
  }
  for (const zombie of zombies) {
    zombie.update()
  }
  const remainingZombies = zombies.filter(zombie => zombie.checkIfInBounds())
  const livesLost = zombies.length - remainingZombies.length
  stats.lives = Math.max(stats.lives - livesLost, 0)
  zombies.length = 0
  zombies.push(...remainingZombies)
  zombies.sort((a, b) => (a.y + a.getHeight()) - (b.y + b.getHeight()))
}

/**
 * @param {Zombie[]} zombies 
 */
function handleShot(zombies, x, y, stats) {
  zombies.sort((a, b) => (b.y + b.getHeight()) - (a.y + a.getHeight()))
  const index = zombies.findIndex(zombie => zombie.checkIfHit(x, y))
  if (index !== -1) {
    stats.score += pointsAddedOnShot
    zombies.splice(index, 1)
  } else {
    stats.score = Math.max(stats.score - pointsSubtractedOnMiss, 0)
  }
}

export { update, handleShot }
