let panel = document.querySelector('.panel')
//btn.style.width = "1200px"
for(a=1; a<10; a++) {
let btn = document.createElement('input')
btn.type = "button"
btn.value = a
btn.classList.add('button')
panel.appendChild(btn)
}