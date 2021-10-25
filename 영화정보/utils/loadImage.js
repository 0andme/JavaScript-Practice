export default function (url) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.src = url
    img.addEventListener('load', () => {
      resolve()
    })
  })
}