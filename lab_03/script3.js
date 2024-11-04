async function fetchAndDisplayData() {
  const data = await fetchData()
  displayData(data)
}

async function fetchData() {
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json()
  return data.products
}

function displayData(data) {
  for (const {title, description, images} of data) {
    const image = images[0]

    const titleEl = document.createElement('div')
    const descriptionEl = document.createElement('div')
    const imageEl = document.createElement('img')
  }
}

foo()