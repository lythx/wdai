const pageUrls = {
  'Home': 'index.html',
  'Gallery': 'gallery.html',
  'Contact': 'contact.html'
}

const galleryVideos = ['Mercedes_300_SLR', 'Ford_Fiesta_RS_WRC']
const galleryImages = ['Devel_Sixteen', 'Porshe_911', 'Aston_Martin_Vanquish', 'McLaren_F1_GTR',
  'Chevrolet_Chevelle', 'Lotus_3-Eleven', 'Ford_Mustang_SVT', 'Pontiac_Firebird', 'Mercedes_Stirling_Moss',
  'Ford_Mustang', 'Honda_S2000', 'Ford_GT40', 'Lincoln_Continental',
  'Rolls-Royce_Phantom', 'Audi_RS6', 'Chevrolet_Camaro'
]

function validateForm() {
  const email = document.getElementsByClassName('form-email')?.[0]
  if (email == undefined) {
    console.log("Form email element undefined")
    return
  }
  const subject = document.getElementsByClassName('form-subject')?.[0]
  if (email == undefined) {
    console.log("Form subject element undefined")
    return
  }
  const message = document.getElementsByClassName('form-message')?.[0]
  if (message == undefined) {
    console.log("Form message element undefined")
    return
  }

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  email.style.border = !emailRegex.test(email.value) ? `2px solid red` : ''
  subject.style.border = (subject.value === 'none') ? `2px solid red` : ''
  message.style.border = (message.value.length === 0) ? `2px solid red` : ''
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
  for (const video of galleryVideos) {
    const name = video.replaceAll("_", " ")
    const wrapper = document.createElement("div")
    wrapper.className = "gallery-video-wrapper"
    const videoEl = document.createElement("video")
    const description = document.createElement("div")
    videoEl.src = `assets/${video}.mp4`
    videoEl.alt = name
    videoEl.autoplay = true
    videoEl.muted = true
    videoEl.loop = true
    videoEl.controls = true
    description.innerText = name
    wrapper.append(videoEl, description)
    galleryDiv.append(wrapper)
  }
  for (const image of galleryImages) {
    const name = image.replaceAll("_", " ")
    const img = document.createElement("div")
    const description = document.createElement("div")
    img.className = "gallery-image"
    img.style.backgroundImage = `url("assets/${image}.png")`
    img.alt = name
    description.innerText = name
    img.append(description)
    galleryDiv.append(img)
  }
}