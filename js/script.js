var loginForm = document.querySelector('.modal-login');
var loginFormOpenBtn = document.querySelector('.login');
var loginFormCloseBtn = document.querySelector('.modal-login-close');
var inputLogin = loginForm.querySelector('[name=login]');
var inputPassword = loginForm.querySelector('[name=password]');
var form = loginForm.querySelector('form');
var storageLogin = localStorage.getItem('login');

function saveLogin(event) {
  localStorage.setItem('login', inputLogin.value);
}
function showLoginForm(event) {
  event.preventDefault();
  loginForm.classList.add('modal-login-visible', 'modal-login-open-animation');
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
    loginForm.classList.remove('modal-login-visible');
  }
}
function notifyError() {
  loginForm.classList.add('modal-error');
}
function cleanupAnimations() {
  loginForm.classList.remove('modal-login-open-animation', 'modal-error');
}

form.addEventListener('submit', saveLogin);
loginFormOpenBtn.addEventListener('click', showLoginForm);
loginFormCloseBtn.addEventListener('click', closeLoginForm);
window.addEventListener('keydown', closeLoginFormEsc);
inputPassword.addEventListener('invalid', notifyError);
loginForm.addEventListener('animationend', cleanupAnimations);
