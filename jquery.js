// Refer to jquery.html to answer these questions (but do not modify it).

///// Question 1
// Make the "Highlight Quotes" link add the class "highlighted" to all quotes
// within articles (the <q> elements).
$('#highlight-quotes').click(function(event){
  $('article q').addClass('highlighted');
  event.preventDefault();
});
// score 1 of 1


///// Question 2
// Make the "Toggle Articles" link hide or show the content, and only the
// content, of all articles.
$('#toggle-articles').click(function(event){
  $('article .content').toggle();
  event.preventDefault();
});
// score 2 of 2


///// Question 3
// Make the "Close" link in the alert at the top of the page remove the alert
// from the page entirely (don't just hide it).
$('#dismiss-alert').click(function(event){
  $('.alert').attr('display', 'none');
  event.preventDefault();
});
// score 2 of 3 - should have used .remove().


///// Question 4
// Make the comment form functional: Typing something into the input and
// pressing Enter or clicking the Comment button should add a new list item to
// the list of comments, containing that text.
$('form.new-comment').submit(function(event){
  var text = $(this).children('new-comment-text')[0].val();
  var html = '<li class=comment"">' + text + '</li>';
  $(this).prev().append(html);
});
// score 3 of 4. Not as thorough as the instructor version.



///// Question 5
// Make it so clicking on a comment list item toggles the class "favorite" on
// it, including comments that were added after the page loaded.
$('ul.comments li').click(function(){
    $(this).toggleClass('favorite');
    $(this).nextAll().toggleClass('favorite');
});
