const toggleBtn = document.querySelector('.header__toggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

sidebar.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
  });
});
