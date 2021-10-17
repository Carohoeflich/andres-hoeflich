const pagesSections = new fullpage('#fullpage', {
    autoScrolling: true,
    scrollingSpeed: 700,
    fitToSection: false,
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


/* I tried to only execute css animation when either on click about or BE in about page */

/* document.getElementById('#about').PageTransitionEvent(start) */

/* function start() {
    document.getElementsById('.#imgan').classList.add("about-img");
}

document.getElementById('#about').click(function () {
    document.getElementById('#imgan').show("slow", start)
}); */



/* const isAbout = true;
do {
   KeyframeEffect(about-img)
} while (test)

function test(){
    if(isAbout === true){
       to == document.getElementById('#about')
    }
}; */