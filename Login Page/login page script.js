  const tabs = document.getElementById('tabs');
  const tabButtons = tabs.querySelectorAll('button');
  const panels = {
    login: document.getElementById('panel-login'),
    signup: document.getElementById('panel-signup')
  };

  function switchTo(target){
    tabButtons.forEach(b => b.classList.toggle('active', b.dataset.tab === target));
    tabs.classList.toggle('signup', target === 'signup');
    Object.entries(panels).forEach(([key, el]) => el.classList.toggle('active', key === target));
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => switchTo(btn.dataset.tab));
  });

  document.querySelectorAll('[data-switch]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      switchTo(link.dataset.switch);
    });
  });

  document.getElementById('form-login').addEventListener('submit', function(e){
    e.preventDefault();
    const email = document.getElementById('login-email');
    const pass = document.getElementById('login-password');
    const err = document.getElementById('login-error');
    if(!email.value || !pass.value){
      err.textContent = 'Enter your email and password.';
      return;
    }
    err.textContent = '';
    alert('Logged in (demo only — no backend connected).');
  });

  document.getElementById('form-signup').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('signup-name');
    const email = document.getElementById('signup-email');
    const pass = document.getElementById('signup-password');
    const err = document.getElementById('signup-error');
    if(!name.value || !email.value || pass.value.length < 8){
      err.textContent = 'Fill in all fields — password needs 8+ characters.';
      return;
    }
    err.textContent = '';
    alert('Account created (demo only — no backend connected).');
  });