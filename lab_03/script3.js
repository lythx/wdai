const gridEl = document.getElementsByClassName('grid')?.[0]
const filterEl = document.getElementsByClassName('filter')?.[0]
const sortEl = document.getElementsByClassName('sort')?.[0]
let fetchedData

async function fetchAndDisplayData() {
  fetchedData = await fetchData()
  displayData()
}

async function fetchData() {
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json()
  console.log(data)
  return data.products
}

function filterData(data) {
  const filterString = filterEl.value
  return data.filter(a => a.title.toLowerCase()
    .startsWith(filterString.toLowerCase()))
}

function sortData(data) {
  const order = sortEl.value
  if (order === 'ascending') {
    return [...data].sort((a, b) => a.title.localeCompare(b.title))
  } else if (order === 'descending') {
    return [...data].sort((a, b) => b.title.localeCompare(a.title))
  } else {
    return data
  }
}

function displayData() {
  const filteredData = filterData(fetchedData)
  const sortedData = sortData(filteredData)
  gridEl.innerHTML = ""
  for (const {title, description, images} of sortedData) {
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

filterEl.oninput = () => {
  displayData()
}

sortEl.onchange = () => {
  displayData()
}

fetchAndDisplayData()
