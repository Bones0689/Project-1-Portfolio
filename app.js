console.log('Javascript is hardly working')

/* Cancle fade on resume page
-------------*/
let resume = document.getElementById('resumeIMG');



function stopFade() {
    return resume.style.animation = none
}

document.getElementById("resumeIMG").addEventListener('click', stopFade);
