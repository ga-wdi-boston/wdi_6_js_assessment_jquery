// Refer to jquery.html to answer these questions (but do not modify it).

///// Question 1
// Make the "Highlight Quotes" link add the class "highlighted" to all quotes
// within articles (the <q> elements).

$('#highlight-quotes').click(function(event) {
  $('q').addclass("highlighted");
});



///// Question 2
// Make the "Toggle Articles" link hide or show the content, and only the
// content, of all articles.
$('#toggle-articles').click(function(event) {
  $('p.content').slideToggle();
});

///// Question 3
// Make the "Close" link in the alert at the top of the page remove the alert
// from the page entirely (don't just hide it).
$('a.dismiss-alert').click(function(event) {
  $('.alert').remove();
});
///// Question 4
// Make the comment form functional: Typing something into the input and
// pressing Enter or clicking the Comment button should add a new list item to
// the list of comments, containing that text.
$('#add-todo-form').submit(this.addComment);

addComment: function(event) {
    var newComment = $('#word-field').val();

    if(newComment !== '') {
      var newItem = $('<li>').text(newComment);
      $('#comment').append(newItem);
      $('#word-field').val('');
    }

///// Question 5
// Make it so clicking on a comment list item toggles the class "favorite" on
// it, including comments that were added after the page loaded.
