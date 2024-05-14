const scriptURL = 'https://script.google.com/macros/s/AKfycbz0NG7e5qzOHzsTfjOZYYRSyKqrKu8G7uzWQnBa11jY5c1gLuteSUBaATDjrtTGikoN3A/exec'
const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        alert("Booking Successful!!")
      })
      .catch(error => console.error('Error!', error.message))
})