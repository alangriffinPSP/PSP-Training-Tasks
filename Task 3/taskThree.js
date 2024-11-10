function changeTheme() {
  const element = document.querySelector('html');
  const buttonMode = document.getElementById('theme-change');
  const dataTheme = element.getAttribute('data-theme');

  if(dataTheme === 'dark') {
    element.setAttribute('data-theme', 'light');
    buttonMode.innerHTML = 'DARKER';
  } 
  else {
    element.setAttribute('data-theme', 'dark');
    buttonMode.innerHTML = 'LIGHTER';
  }
}