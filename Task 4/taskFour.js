function clearForm() {
  document.getElementById('submission-form').reset();
}

function themeSet() {
  const checkTheme = document.querySelector('html');
  const currentTheme = checkTheme.getAttribute('data-theme')
  const buttonMode = document.getElementById('theme-change');

  if(currentTheme === 'dark') {
    buttonMode.innerHTML = 'LIGHTER';
  } 
  else {
    buttonMode.innerHTML = 'DARKER';
  }  
}

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

function submitArticle() {
  const newTitle = document.getElementById('new-title').value;
  const newArticleContent = document.getElementById('new-article').value;
  
  //Article is only created if both text fields are populated
  if (newTitle && newArticleContent != '') {
  //Grabs date in desired format
  const newArticleDate = new Date().toLocaleDateString('en-gb', { 
    weekday:"long", 
    day:"numeric", 
    month:"long", 
    year:"numeric" 
  });
  
  //Create new article group container, set class for styling
  const newGroup = document.createElement('div'); 
  newGroup.setAttribute('class', 'article-group');

  //Creates points for new element insertion
  const parent = document.getElementById('main');
  const child = document.getElementsByClassName('article-group')[0];
  
  //Inserts new empty div before first article
  parent.insertBefore(newGroup, child);

  //Prepares empty HTML elements for new group, set classes for styling
  const emptyDate = document.createElement('h6'); 
  emptyDate.setAttribute('class', 'article-date');
  const emptyHeading = document.createElement('a'); 
  emptyHeading.setAttribute('class', 'article-heading');
  const emptyArticle = document.createElement('article'); 
      
  //Populates new elements
  emptyDate.textContent = newArticleDate;
  emptyHeading.textContent = newTitle;
  emptyArticle.textContent = newArticleContent;
  
  //Insert new elements inside new group container in desired order
  newGroup.appendChild(emptyArticle);
  newGroup.insertBefore(emptyHeading, emptyArticle);
  newGroup.insertBefore(emptyDate, emptyHeading);

  clearForm();
}
} 