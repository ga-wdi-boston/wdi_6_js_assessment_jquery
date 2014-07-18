// Refer to jquery.html to answer these questions (but do not modify it).

///// Question 1
// Make the "Highlight Quotes" link add the class "highlighted" to all quotes
// within articles (the <q> elements).
$(document).ready(function() {
  $('#highlight-quotes').click(function(event){

    event.preventDefault();
    $('q').addClass('highlighted');
  });


///// Question 2
// Make the "Toggle Articles" link hide or show the content, and only the
// content, of all articles.
  $('#toggle-articles').click(function() {
    $('.content').toggle();
  });

///// Question 3
// Make the "Close" link in the alert at the top of the page remove the alert
// from the page entirely (don't just hide it).
  $('.dismiss-alert').click(function() {
    $('.alert').remove();
  });
///// Question 4
// Make the comment form functional: Typing something into the input and
// pressing Enter or clicking the Comment button should add a new list item to
// the list of comments, containing that text.
  $('.new-comment').submit(function(event) {
    event.preventDefault();
    var newComment = $('<li>');
    var content = $('.new-comment-text').val();
    $('.new-comment-text').val('');
    newComment.text(content);
    $('.comments').append(newComment);
  });

///// Question 5
// Make it so clicking on a comment list item toggles the class "favorite" on
// it, including comments that were added after the page loaded.

   $('.comments').on('click', 'li', function() {
    $(this).addClass('favorite');
   });
});
