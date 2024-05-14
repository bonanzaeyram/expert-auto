const navbar = document.querySelector(".navbar")
fetch('/Components/Nav/nav.html')
.then(res=>res.text())
.then(data=>{
    navbar.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
})

const footer = document.getElementById("footer")
fetch('/Components/Footer/footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
})



