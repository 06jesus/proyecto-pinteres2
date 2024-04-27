const divApp = document.querySelector('#app')
const input = document.querySelector('.input-buscador-t1')

import { searchImages, updateImages } from './input.js'

input.addEventListener('keydown', async () => {
  if (event.key === 'Enter') {
    buttonsDinamics.classList.remove('buttonsDinamics')
    textDinamico.textContent = input.value.trim()
    textDinamico2.textContent =
      'Descubre las mejores ideas de ' +
      input.value.trim() +
      '. Inspírate y crea tu propio estilo.'
    const query = input.value.trim()
    if (query) {
      const data = await searchImages(query)
      if (data) {
        updateImages(data.photos)
      } else {
        divApp.innerHTML = 'No hay resultados para mostrar.'
      }
    }
  }
})
input.addEventListener('click', () => {
  input.value = ' '
})

const textDinamico = document.querySelector('.textDinamico')
const textDinamico2 = document.querySelector('.textDinamico2')
const buttonsDinamics = document.querySelector('.buttonsDinamics')
const buttonDinamic = document.querySelector('.buttonDinamic')
const buttonDinamic2 = document.querySelector('.buttonDinamic2')

function handleButtonClick(button) {
  return async () => {
    const query = button.textContent.trim()
    if (query) {
      const data = await searchImages(query)
      if (data) {
        updateImages(data.photos)
      } else {
        divApp.innerHTML = 'No hay resultados para mostrar.'
      }
    }
  }
}

buttonDinamic.addEventListener('click', handleButtonClick(buttonDinamic))
buttonDinamic2.addEventListener('click', handleButtonClick(buttonDinamic2))
