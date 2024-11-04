function generatePassword() {
  const {minLength, maxLength, useBigLetters, useSpecialChars} = getParameters()
  const length = randInt(minLength, maxLength)
  const chars = getChars(useBigLetters, useSpecialChars)
  let password = ''
  for (let i = 0; i < length; i++) {
    password += chars[randInt(0, chars.length - 1)]
  }
  alert(password) 
}

function getChars(useBigLetters, useSpecialChars) {
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  const bigLetters = letters.toUpperCase()
  const specialChars = '!@#$%^&*()'
  let chars = letters
  if (useBigLetters) {
    chars += bigLetters
  } 
  if (useSpecialChars) {
    chars += specialChars
  }
  return chars
}

function getParameters() {
  return {
    minLength: Number(document.getElementsByClassName('min-pw')?.[0]?.value),
    maxLength: Number(document.getElementsByClassName('max-pw')?.[0]?.value),
    useBigLetters: document.getElementsByClassName('big-letters')?.[0]?.checked,
    useSpecialChars: document.getElementsByClassName('special-chars')?.[0]?.checked 
  }
}

// [min, max]
function randInt(min, max) {
  return Math.floor(min + (max + 1 - min) * Math.random())
}
