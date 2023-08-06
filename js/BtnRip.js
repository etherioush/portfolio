const btn = document.getElementById('btn1')

const onClick = e => {
  const { x, y, width, height} = btn.getBoundingClientRect()
  const radius = Math.sqrt(width * width + height * height)
  btn.style.setProperty('--diameter', radius * 2 + 'px')
  const { clientX, clientY } = e
  const left = (clientX - x - radius) / width * 100 + '%'
  const top = (clientY - y - radius) / height * 100 + '%'

  btn.style.setProperty('--left', left)
  btn.style.setProperty('--top', top)
  btn.style.setProperty('--a', '')
  setTimeout(() => {
    btn.style.setProperty('--a', 'ripple-effect 500ms linear')
  }, 5)
}

btn.addEventListener('click', onClick)


const btn2 = document.getElementById('btn2')

const onClick1 = e => {
  const { x, y, width, height} = btn2.getBoundingClientRect()
  const radius = Math.sqrt(width * width + height * height)
  btn2.style.setProperty('--diameter', radius * 2 + 'px')
  const { clientX, clientY } = e
  const left = (clientX - x - radius) / width * 100 + '%'
  const top = (clientY - y - radius) / height * 100 + '%'

  btn2.style.setProperty('--left', left)
  btn2.style.setProperty('--top', top)
  btn2.style.setProperty('--a', '')
  setTimeout(() => {
    btn2.style.setProperty('--a', 'ripple-effect 500ms linear')
  }, 5)
}

btn2.addEventListener('click', onClick1)