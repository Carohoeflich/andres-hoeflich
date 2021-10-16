const pagesSections = new fullpage('#fullpage', {
autoScrolling: true,
scrollingSpeed:700,
fitToSection: false,
easing: 'easeInOutCubic',
css3: true,
easingcss3: 'ease-out',
loopBottom: true,
navigation: true,
menu: '#menu',
anchors: ['home', 'about', 'shop', 'contact'],
navigationTooltips:['Home', 'About', 'Shop', 'Contact'],
showActiveTooltip: false,
});