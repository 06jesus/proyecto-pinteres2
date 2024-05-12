const divApp = document.querySelector('#app')
const input = document.querySelector('.input-buscador-t1')
const textdic = document.querySelector('.textDinamico')
const textdic2 = document.querySelector('.textDinamico2')

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
  if (images.length === 0) {
    textdic.style.display = 'none'
    textdic2.style.display = 'none'
    divApp.innerHTML =
      'Actualmente no tenemos ese contenido. Prueba a escribir algo diferente o con nuestras recomendaciones 🔼'
    return
  }
  textdic.style.display = 'flex'
  textdic2.style.display = 'flex'
  divApp.innerHTML = ''
  images.forEach((image) => {
    const imgElement = document.createElement('img')
    imgElement.src = image.src.medium
    imgElement.alt = image.photographer
    divApp.appendChild(imgElement)
  })
}
async function initializePage() {
  const defaultQuery = 'paisaje' // Cambia aquí la palabra clave de búsqueda predeterminada
  const data = await searchImages(defaultQuery)
  if (data) {
    updateImages(data.photos)
  } else {
    divApp.innerHTML = 'No hay resultados para mostrar.'
  }
}

window.addEventListener('load', initializePage)
