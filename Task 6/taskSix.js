$(document).ready(function(){

//Object for methods to run on page load
const $pageLoad = {
  $clearForm(){
  $('#submission-form').trigger('reset')
  },

  $themeSet(){
    if($('html').attr('data-theme') == 'dark') {
      $('#theme-change').html('LIGHTER');
    } else {
      $('#theme-change').html('DARKER');
    }
  }
}

const $userInteraction = {
//Theme change method
  $changeTheme(){
  if($('html').attr('data-theme') == 'dark') {
    ($('html').attr('data-theme', 'light'));
    $('#theme-change').html('DARKER');
  } else {
    ($('html').attr('data-theme', 'dark'));
    $('#theme-change').html('LIGHTER');
  }
},
//Content creation method
  $createNode(){  
  $newTitle = $('#new-title').val();
  $newContent = $('#new-article').val();
  $newDate = new Date().toLocaleDateString('en-gb', { 
    weekday:"long", 
    day:"numeric", 
    month:"long", 
    year:"numeric",
  });

$newNode = 
$( "<div>", { class: "article-group", html:
([
  $('<h6>',{ class: "article-date", text: $newDate }),
  $('<a>',{ class: "article-heading", text: $newTitle }),
  $('<article>',{ text: $newContent })
])
});
//New node only inserted if both content fields are populated
 if ($newTitle && $newContent != ''){
$('.article-group:first').before($newNode);
  $(window).scrollTop(0);
  $pageLoad.$clearForm();
 }
} 
} 

//User controlled method calls
$('#article-submit').click($userInteraction.$createNode);
$("#theme-change").click($userInteraction.$changeTheme);

//Methods run on page load
$pageLoad.$clearForm();
$pageLoad.$themeSet(); 

//End of document ready
})