const slideAnimation = document.querySelector('.slide');
slideAnimation.classList.add('animate__fadeOutUpBig');

slideAnimation.addEventListener('animationend', () => {
  slideAnimation.classList.remove('animate__fadeOutUpBig')
  slideAnimation.style.visibility = "hidden";
  slideAnimation.style.width = "0vw";
  slideAnimation.style.height = "0vh";
});
