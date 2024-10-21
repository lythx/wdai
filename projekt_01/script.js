const pageUrls = {
  'Home': 'index.html',
  'Gallery': 'gallery.html',
  'Contact': 'contact.html'
}

const galleryImages = ['Audi_RS6', 'Ford_Fiesta_RS_WRC', 'Ford_GT40', 'McLaren_F1_GTR', 'Porshe_911']

function onFormChange(input, value) {
  console.log(input, value)
  if(input == 'email') {
    document.cookie = `email=${value}`
  }
}
 
function openPage(page) {
  document.location = pageUrls[page]
}

function displayGallery() {
  const galleryDiv = document.getElementsByClassName("gallery")?.[0]
  if (galleryDiv == undefined) {
    console.log("Gallery element undefined")
    return
  }
  for (const image of [...galleryImages, ...galleryImages, ...galleryImages, ...galleryImages, ...galleryImages]
    .map(a => ({ el: a, rand: Math.random() })).sort((a, b) => a.rand - b.rand).map(a => a.el)
  ) {
    const name = image.replaceAll("_", " ")
    const img = document.createElement("div")
    const description = document.createElement("div")
    img.style.backgroundImage = `url("assets/${image}.png")`
    img.alt = name
    description.innerText = name
    img.append(description)
    galleryDiv.append(img)
  }
}