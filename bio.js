
/* Nav button hover effects
--------------------------------*/
const buttons = document.getElementsByClassName("navButtons")
console.log(buttons)

for(button of buttons) {
    button.addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = "rgba(114, 20, 20, .9)"
    })
}

for(button of buttons) {
    button.addEventListener('mouseout', function(e){
        e.target.style.backgroundColor = "rgba(114, 20, 20, .5)"
    })
}

const logo = document.getElementById('pageLogo')

function grow() {
    logo.style.animation = "grow 6s"
}

function shrink() {
    logo.style.animation = "shrink 1s"
}

logo.addEventListener('mouseover', grow)
logo.addEventListener('mouseout', shrink)