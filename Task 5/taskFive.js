$(document).ready(function(){

//Clear submission form on page load
$clearForm = function(){
  $('#submission-form').trigger('reset');
}

//Correctly labels theme button based on startup theme
$themeSet = function(){
  if($('html').attr('data-theme') == 'dark') {
    $('#theme-change').html('LIGHTER');
  } else {
    $('#theme-change').html('DARKER');
  }
}

//Calls changeTheme function on button click
$("#theme-change").click(function(){
  $changeTheme();
})

//Function changes data-theme attribute
$changeTheme = function(){
  if($('html').attr('data-theme') == 'dark') {
    ($('html').attr('data-theme', 'light'));
    $('#theme-change').html('DARKER');    
  } else {
    ($('html').attr('data-theme', 'dark'));
    $('#theme-change').html('LIGHTER');
  }
}

//Calls submitArticle function on button click
$("#article-submit").click(function(){
  $submitArticle();
})

$submitArticle = function(){
  //Function only runs if both fields contain text
  if($('#new-title').val() && $('#new-article').val() !== ''){

//Creates container for new post elements before previous top article group
$('.article-group:first').before('<div class="article-group"></div>');

//Creates post elements inside newly created container with classes for styling
$('.article-group:first').prepend('<h6 class="article-date"></h6>', '<a class="article-heading"></a>', '<article></article');

//Pass content from input fields to relevant new elements
$('.article-heading:first').prepend($('#new-title').val());
$('article:first').prepend($('#new-article').val());

//Grabs current date for post
const newArticleDate = new Date().toLocaleDateString('en-gb', { 
  weekday:"long", 
  day:"numeric", 
  month:"long", 
  year:"numeric" 
});
$('.article-date:first').html(newArticleDate);

//Scrolls to top of page after submission
$(window).scrollTop(0);

//Clears form on completion
$clearForm();
  }
}

//These functions run when HTML has loaded
$clearForm();
$themeSet(); 

});