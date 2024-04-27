const divApp = document.querySelector('#app')
const input = document.querySelector('.input-buscador-t1')

export async function searchImages(query) {
  const apiKey = 'IZdzCsIDxHYgpUseSbm9e9rqvAy79aKhZoFxLwiYh1oDoR9NleAhtGzZ'
  const apiUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=10`
  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: apiKey
      }
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error al buscar imágenes:', error)
    return null
  }
}

export function updateImages(images) {
  divApp.innerHTML = ''
  images.forEach((image) => {
    const imgElement = document.createElement('img')
    imgElement.src = image.src.medium
    imgElement.alt = image.photographer
    divApp.appendChild(imgElement)
  })
}
