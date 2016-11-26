var loginForm = document.querySelector('.modal-login');
var loginOpenBtn = document.querySelector('.login');
function showLoginForm() {
  loginForm.style.display = 'block';
}
loginOpenBtn.addEventListener('click', showLoginForm);

var loginCloseBtn = document.querySelector('.modal-login-close');
function closeLoginForm() {
  loginForm.style.display = 'none';
}
loginCloseBtn.addEventListener('click', closeLoginForm);
