/**
 * Smooth Scrolling when anchor links
 */
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/**
 * Set active class for bottom border when viewport is visible
 */
let isInViewport = function(elem){
    let distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

let whereTo = document.querySelectorAll(".navTest");

window.addEventListener('scroll', function(event){
    whereTo.forEach(element => {
        if (isInViewport(element)){
            element.classList.add('.active');
        }
    });
});

/* ======== MY MUSIC PLAYER ========= */

window.onload = function () {
    const musicContainer = document.querySelector(".music-container")
    const playBtn = document.getElementById("play")
    const progress = document.querySelector(".progress")
    const progressContainer = document.querySelector(".progress-container")
    const volumenProgress = document.querySelector('.volume-progress')
    const volumenBtn = document.getElementById('volume')
    const audio = new Audio('/Main/media/lacura.mp3');
    const volumenInput = document.getElementById('volumeInput')
    const navigation = document.querySelector('.navigation')



    function playSong() {
        musicContainer.classList.add('play')
        playBtn.querySelector('i.fas').classList.remove('fa-play')
        playBtn.querySelector('i.fas').classList.add('fa-pause')
        audio.play()
    }

    function pauseSong() {
        musicContainer.classList.remove('play')
        playBtn.querySelector('i.fas').classList.remove('fa-pause')
        playBtn.querySelector('i.fas').classList.add('fa-play')
        audio.pause()
    }

    function updateProgress(e) {
        /* console.log(e.srcElement.currentTime) */ //console logs current time of the song
        /* console.log(e.srcElement.duration) */ // console logs the duration of the whole song
        const {
            duration,
            currentTime
        } = e.srcElement
        const progressPercent = (currentTime / duration) * 100
        progress.style.width = `${progressPercent}%`
    }


    function setProgress(e) {
        const width = this.clientWidth
        /* console.log(width) */ //this gives me the total width of the song
        const clickX = e.offsetX
        /* console.log(clickX)  */ // this gives me the width of the part in the progress bar i clicked on
        const duration = audio.duration

        audio.currentTime = (clickX / width) * duration // this makes it so the song changes to the part you click on in real time
    }


    if (playBtn) {
        playBtn.addEventListener('click', () => {
            const isPlaying = musicContainer.classList.contains('play')

            if (isPlaying) {
                pauseSong()
            } else {
                playSong()
            }
        })

    }


    volumenInput.addEventListener('change', function (e) {
        audio.volume = e.currentTarget.value / 100;
    })

    volumenBtn.addEventListener('click', () => {
        const isVolumen = navigation.classList.contains('volumen')
        if (isVolumen) {
            navigation.classList.remove('volumen')
        } else {
            navigation.classList.add('volumen')
        }
    })


    audio.addEventListener('timeupdate', updateProgress)
    progressContainer.addEventListener('click', setProgress)

}

/* ======= GSAP TEXT ANIMATION FOR THE LANDING PAGE ======== */

gsap.defaults({ease: "none"});
const tlText = gsap.timeline({
    repeat:Infinity,
    repeatDelay:1,
});
tlText.to(".title p", {duration: 2, text:"Singer. Songwriter. Producer."})

const tlMusic = gsap.timeline({
    repeatDelay: 1,
});

tlMusic.to(".music h1", {
    duration: 2,
    text: "Check out some of his music!"
});




/* I tried to only execute css animation when either on click about or BE in about page */

/* const about = document.getElementsById('#about');

about.addEventListener("click", function(){
    about.style.animation = "about-img 2s ease-in";
});

 */
/* const animation = document.getElementById('about');

function () {
animation.onclick('.style.animation=start')
};
 */

/* document.getElementById('#about').PageTransitionEvent(start) */

/* function start() {
    document.getElementsById('.#imgan').classList.add("about-img");
} */

/*
document.getElementById('#about').click(function () {
    document.getElementById('#imgan').show("slow", start)
}); */


/* const about = document.getElementById('#about')
const anim = document.getElementsById('#imgan').style.animation = "about-img 2s ease-in"; */
/* document.styleSheets[0].insertRule("@keyframes about-img {\
    from {transform: translateX(100%);}\
    to {transform: translateX(0%);}\
}"
); */

/* do {
   anim
} while (test)

function test(){
    if(window.location === about){
       about.addEventListener.anchors['about']
    }
};

 */