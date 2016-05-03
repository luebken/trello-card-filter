'use strict';

var $filter = $('<div id="evil-list-filter">' +
                '<input class="header-search-input" type="text" placeholder="Filter Cards"/></div>');
$filter.find('input').on('keyup', function() {
  var $input = $(this);
  //var query = new RegExp($input.val(), 'i');
   $('.list-card').each(function(el, i) {
    var $card = $(this);
    var cardTitle = $card.find('.list-card-title').text().trim();
    //console.log('\n\n')
    //console.log('$input.val() ', $input.val())
    //console.log('query ', query)
    //console.log('cardTitle: ', cardTitle)
    if(cardTitle.indexOf($input.val()) > -1){ 
    //if (query.test(cardTitle)) {
      $card.show();
    } else {
      $card.hide();
    }
  });
});

var domObserver = new MutationObserver(function(mutations) {
  if (!$('#header').find($filter).length) {
    $filter.insertAfter('#header .header-search');
  }
});

domObserver.observe(document.querySelector('#header'), { childList: true });
