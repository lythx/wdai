const gridEl = document.getElementsByClassName('grid')?.[0]
const filterEl = document.getElementsByClassName('filter')?.[0]
let data

async function fetchAndDisplayData() {
  data = await fetchData()
  displayData()
}

async function fetchData() {
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json()
  return data.products
}

function displayData() {
  for (const {title, description, images} of data) {
    const image = images[0]
    const titleEl = document.createElement('div')
    const descriptionEl = document.createElement('div')
    const imageWrapper = document.createElement('div')
    const imageEl = document.createElement('img')

    titleEl.innerText = title 
    descriptionEl.innerText = description
    imageEl.src = image
    imageWrapper.append(imageEl)

    gridEl.append(titleEl, descriptionEl, imageWrapper)
  }
}

fetchAndDisplayData()

filterEl.oninput = (event) => {
  console.log(event.target.value)
}

