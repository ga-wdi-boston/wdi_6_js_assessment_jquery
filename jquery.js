// Refer to jquery.html to answer these questions (but do not modify it).

///// Question 1
// Make the "Highlight Quotes" link add the class "highlighted" to all quotes
// within articles (the <q> elements).
$('#highlighted-quotes').addClass(this.q);

///// Question 2
// Make the "Toggle Articles" link hide or show the content, and only the
// content, of all articles.
$('#toggle-articles').toggleClass(this.content);

///// Question 3
// Make the "Close" link in the alert at the top of the page remove the alert
// from the page entirely (don't just hide it).
$('#dismiss-alert').remove();

///// Question 4
// Make the comment form functional: Typing something into the input and
// pressing Enter or clicking the Comment button should add a new list item to
// the list of comments, containing that text.
   addWord: function(event) {
    var newWord =  $('<li>');
    var entry = $('.new-comment-text').val();

      newWord.text(entry);
      $('.new-comment').append(newWord);
      }
///// Question 5
// Make it so clicking on a comment list item toggles the class "favorite" on
// it, including comments that were added after the page loaded.
 $('.comments li').each(function(index, element){
      element.toggleClass('selector')('favorite');
  });
