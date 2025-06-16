
 (() => {
  const dropdown = document.getElementById('dropdown');
  if (!dropdown) return;
  
  // Fail gracefully
  const header = dropdown.querySelector('.dropdown-header');
  if (!header) return;

  header.addEventListener('click', () => {
    dropdown.classList.toggle('open');
  });
})();
