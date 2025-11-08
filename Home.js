  const loginBtn = document.querySelector('a[href="Login.html"]');
  const signupBtn = document.querySelector('a[href="Sign up.html"]');
  const popupLogin = document.getElementById('popup-login');
  const popupSignup = document.getElementById('popup-signup');
  const closeBtns = document.querySelectorAll('.close-popup');

// elemen yang mau diblur (bukan seluruh body)
const blurArea = document.querySelector('main, nav, footer');

  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popupLogin.style.display = 'flex';
    document.classList.add('blur');
  });

  signupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popupSignup.style.display = 'flex';
    document.classList.add('blur');
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      popupLogin.style.display = 'none';
      popupSignup.style.display = 'none';
      document.classList.remove('blur');
    });
  });
