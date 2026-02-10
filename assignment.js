const form = document.querySelector('.form')
const eventCards = document.querySelector('.cards')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const title = document.querySelector('#eventTitle').value
  const date = document.querySelector('#eventDate').value
  const cat = document.querySelector('#category').value
  const desc = document.querySelector('#description').value

  const card = document.createElement('div')
  card.classList.add('card')

  card.innerHTML = `
    <div class="dlt">×</div>
    <h3>${title}</h3>
    <p>${date}</p>
    <button>${cat}</button>
    <p>${desc}</p>
  `

  eventCards.appendChild(card)

  // delete single card
  card.querySelector('.dlt').addEventListener('click', () => {
    card.remove()
  })

  form.reset()
})

// clear all
document.querySelector('#clearAll').addEventListener('click', () => {
  eventCards.innerHTML = ''
})