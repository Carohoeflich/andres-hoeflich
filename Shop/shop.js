const slideAnimation = document.querySelector('.slide');
slideAnimation.classList.add('animate__fadeOutUpBig');

slideAnimation.addEventListener('animationend', () => {
  slideAnimation.classList.remove('animate__fadeOutUpBig')
  slideAnimation.style.visibility = "hidden";
  slideAnimation.style.width = "0vw";
  slideAnimation.style.height = "0vh";
});


const Button = document.getElementById('loginbutton');

 Button.addEventListener('click', () =>  {
    var ValidUsername = document.getElementById('username').value;
    var ValidPassword = document.getElementById('password').value;

      if (ValidUsername === 'admin' && ValidPassword === '123') {
          document.querySelector('.valid').css('display', 'block');
          window.location = "/Shop/shop.html";
      }
      else {
          document.querySelector('.error').css('display', 'block');
      }
  });
