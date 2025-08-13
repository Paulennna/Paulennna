document.addEventListener('DOMContentLoaded', () => {
  const loginScreen = document.getElementById('login-screen');
  const dashboard = document.getElementById('dashboard');

  if (loginScreen) {
    loginScreen.style.display = 'none';
  }
  if (dashboard) {
    dashboard.style.display = 'block';
  }
});
