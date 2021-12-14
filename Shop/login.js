const Button = document.getElementById('loginbutton');

 Button.addEventListener('click', () =>  {
    var ValidUsername = document.getElementById('username').value;
    var ValidPassword = document.getElementById('password').value;

      if (ValidUsername === 'admin' && ValidPassword === '123') {
          window.location = "/Shop/shop.html";
          return
      }
      else {
          document.querySelector('.error').style.display="block";
      }
  });
