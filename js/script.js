var loginForm = document.querySelector('.login-form');
var loginOpenBtn = document.querySelector('.login');
function showLoginForm() {
  loginForm.style.display = 'block';
}
loginOpenBtn.addEventListener('click', showLoginForm);

var loginCloseBtn = document.querySelector('.login-form-close');
function closeLoginForm() {
  loginForm.style.display = 'none';
}
loginCloseBtn.addEventListener('click', closeLoginForm);
