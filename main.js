const pagesSections = new fullpage('#fullpage', {
    autoScrolling: false,
    scrollingSpeed: 700,
    scrollOverflow: true,
    fitToSection: true,
    fitToSectionDelay: 100,
    easing: 'easeInOutCubic',
    css3: true,
    easingcss3: 'ease-out',
    loopBottom: true,
    navigation: true,
    menu: '#menu',
    anchors: ['home', 'about', 'music', 'contact'],
    navigationTooltips: ['Home', 'About', 'Music', 'Contact'],
    showActiveTooltip: false,
    setResponsive: true,
});

/* ======= GSAP TEXT ANIMATION FOR THE LANDING PAGE ======== */

gsap.defaults({ease: "none"});
const tlTexto = gsap.timeline({
    repeat:Infinity,
    repeatDelay:1,
});
tlTexto.to(".titulo p", {duration: 2, text:"Singer. Songwriter. Producer."})

 /* ======= GSAP ANIMATION FOR THE ABOUT SECTION =========*/

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start: "-50%",
        end: "0%",
        scrub: 1,
    },
});

tl.fromTo(".about-imagen", { x: 600 }, { x: 30 })
tl.fromTo('.about-titulo', {opacity:0}, {opacity:1});

/* ======= GSAP TEXT ANIMATION FOR THE MUSIC PAGE ======= */

gsap.defaults({ease: "none"});
const tlMusic = gsap.timeline({
    repeatDelay:1,
});

tlMusic.to(".music h1", {duration: 2, text: "Check out some of his music!"})

/* ======== CODE FOR THE APLAYER ON MUSIC PAGE ========= */
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    audio: [{
        name: 'La Cura',
        artist: 'Andrés Hoeflich',
        url: '/lacura.mp3',
        cover: '/img/aplayercover.jpg'
    }]
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