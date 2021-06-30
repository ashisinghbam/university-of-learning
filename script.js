const form = document.querySelector('.registration-form')
const nameLabel = document.querySelector('.name-label')
const emailLabel = document.querySelector('.email-label')
const numberLabel = document.querySelector('.number-label')

form.addEventListener('submit', (e) => {
  const name = document.getElementById('name')
  const email = document.getElementById('email')
  const phone = document.getElementById('phone')
  if(!name.value) {
    e.preventDefault()
    nameLabel.textContent = "Please enter your name"
  }
  if(!email.value) {
    e.preventDefault()
    emailLabel.textContent = "Please enter your email"
  }
  if(!phone.value) {
    e.preventDefault()
    numberLabel.textContent = "Please enter your phone number"
  }
})