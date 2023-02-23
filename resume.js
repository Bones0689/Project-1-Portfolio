/* Cancel fade
--------------------------------*/


function stopFade() {
    return document.getElementById("resumeIMG").style.animation = 'none'
}

document.getElementById("resumeIMG").addEventListener('click', stopFade);
///////////////////////////////////////////////////////////////////////////

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