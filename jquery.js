// Refer to jquery.html to answer these questions (but do not modify it).

///// Question 1
// Make the "Highlight Quotes" link add the class "highlighted" to all quotes
// within articles (the <q> elements).

$('#highlight-quotes q').addClass('highlighted');

///// Question 2
// Make the "Toggle Articles" link hide or show the content, and only the
// content, of all articles.

$('#articles').toggleClass('.content');

///// Question 3
// Make the "Close" link in the alert at the top of the page remove the alert
// from the page entirely (don't just hide it).

$('.dismiss-alert').remove();

///// Question 4
// Make the comment form functional: Typing something into the input and
// pressing Enter or clicking the Comment button should add a new list item to
// the list of comments, containing that text.

$(document).ready(function(){ commentThis.initialize(); });

var commentThis = {
  initialize: function() {
    var _this = this;
    $('.new-comment').on('click', function() {
      event.preventDefault();

      _this.addComment();
    });

  },

  addComment: function() {
    var newComment = $('#comments').val();
    if(newComment !== '') {
      console.log('it works!');
      var newComm = $('<li>').text(newComment);
      $('.comment').append(newComm);
      $('#comments').val('');
    }

  }

};


///// Question 5
// Make it so clicking on a comment list item toggles the class "favorite" on
// it, including comments that were added after the page loaded.

var commentForm = {
  initialize: function() {
    var _this = this;
    $('.comment').on('click', function() {
      event.preventDefault();

      _this.favoriteComment();
    });

  },

  favoriteComment: function(event) {
    (this).closest('.comment')
    .toggleClass('favorite');
    }

};







