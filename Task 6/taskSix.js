//Object for methods to run on page load
class PageLoad {
  constructor() { }
  clearForm() {
    $('#submission-form').trigger('reset')
  }

  themeSet() {
    if ($('html').attr('data-theme') == 'dark') {
      $('#theme-change').html('LIGHTER');
    } else {
      $('#theme-change').html('DARKER');
    }
  }
}
//New object created from PageLoad class
const freshPage = new PageLoad();

class UserInteraction {
  constructor() { }
  //Theme change method
  changeTheme() {
    if ($('html').attr('data-theme') == 'dark') {
      ($('html').attr('data-theme', 'light'));
      $('#theme-change').html('DARKER');
    } else {
      ($('html').attr('data-theme', 'dark'));
      $('#theme-change').html('LIGHTER');
    }
  }
  //Content creation method
  createNode() {
    const $newTitle = $('#new-title').val();
    const $newContent = $('#new-article').val();
    const $newDate = new Date().toLocaleDateString('en-gb', {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    if (!$newTitle || !$newContent) {
      return;
    }

    const $newNode =
      $("<div>", {
        class: "article-group", html:
          ([
            $('<h6>', { class: "article-date", text: $newDate }),
            $('<a>', { class: "article-heading", text: $newTitle }),
            $('<article>', { text: $newContent })
          ])
      });

    $('.article-group:first').before($newNode);
    $(window).scrollTop(0);
    freshPage.clearForm();
  }
  
  formClickListener() {
    $('#article-submit').click(this.createNode);
  }
}

//New object created from UserInteraction class
const interact = new UserInteraction();
interact.formClickListener();

//User controlled method calls

$("#theme-change").click(interact.changeTheme);

//Methods run on page load
freshPage.clearForm();
freshPage.themeSet();