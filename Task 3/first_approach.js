var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var bgcolor = rootStyles.getPropertyValue('--bgcolor');
var textcolor = rootStyles.getPropertyValue('--textcolor');
var linkcolor = rootStyles.getPropertyValue('--linkcolor');
var linkhover = rootStyles.getPropertyValue('--linkhover');
var datecolor = rootStyles.getPropertyValue('--datecolor');
var theme = 0;


 function myFunction() {

    if (theme == 0) {
        root.style.setProperty('--bgcolor', '#d6d6c2');
        root.style.setProperty('--textcolor', '#000000');
        root.style.setProperty('--linkcolor', '#000000');
        root.style.setProperty('--linkhover', '#b3b3b3');
        root.style.setProperty('--datecolor', '#000000');
        theme += 1;
      } 
    else {
        root.style.setProperty('--bgcolor', '#4a525a');
        root.style.setProperty('--textcolor', '#d8d6d6');
        root.style.setProperty('--linkcolor', '#acacac');
        root.style.setProperty('--linkhover', '#606870');
        root.style.setProperty('--datecolor', '#acacac');
        theme -= 1;
      }
}