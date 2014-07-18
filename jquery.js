// Refer to jquery.html to answer these questions (but do not modify it).

///// Question 1
// Make the "Highlight Quotes" link add the class "highlighted" to all quotes
// within articles (the <q> elements).

$(document).ready(function(){
  $('#highlight-quotes').click(function(){
    $('#aricles q').attr('class', 'highlighted');
  });



///// Question 2
// Make the "Toggle Articles" link hide or show the content, and only the
// content, of all articles.
  $('#toggle-articles').click(function(){
    $('.content').toggle();
  });

///// Question 3
// Make the "Close" link in the alert at the top of the page remove the alert
// from the page entirely (don't just hide it).
  $('.dissmiss-alert').click(function(){
    $('.alert').remove();
  });

///// Question 4
// Make the comment form functional: Typing something into the input and
// pressing Enter or clicking the Comment button should add a new list item to
// the list of comments, containing that text.
  $('.new-comment').submit(function(){
    var newComment = $('.new-comment, .new_comment_text').val();
    $('<li>').text(newComment).append('comments');
  });

///// Question 5
// Make it so clicking on a comment list item toggles the class "favorite" on
// it, including comments that were added after the page loaded.
});
