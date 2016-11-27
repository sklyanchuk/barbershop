var loginForm = document.querySelector('.modal-login');
var loginFormOpenBtn = document.querySelector('.login');
var loginFormCloseBtn = document.querySelector('.modal-login-close');
var inputLogin = loginForm.querySelector('[name=login]');
var inputPassword = loginForm.querySelector('[name=password]');
var form = loginForm.querySelector('form');
var storageLogin = localStorage.getItem('login');

function saveLogin(event) {
  if (!(inputLogin.value && inputPassword.value)) {
    event.preventDefault();
    loginForm.classList.add('modal-error');
  } else {
    localStorage.setItem('login', inputLogin.value);
  }
}
function showLoginForm(event) {
  event.preventDefault();
  loginForm.classList.add('modal-login-visible');
  if (storageLogin) {
    inputLogin.value = storageLogin;
    inputPassword.focus();
  } else {
    inputLogin.focus();
  }
}
function closeLoginForm(event) {
  event.preventDefault();
  loginForm.classList.remove('modal-login-visible');
}
function closeLoginFormEsc(event) {
  if (event.keyCode == 27) {
    if (loginForm.classList.contains('modal-login-visible')) {
      loginForm.classList.remove('modal-login-visible');
    }
  }
}

form.addEventListener('submit', saveLogin);
loginFormOpenBtn.addEventListener('click', showLoginForm);
loginFormCloseBtn.addEventListener('click', closeLoginForm);
window.addEventListener('keydown', closeLoginFormEsc);
