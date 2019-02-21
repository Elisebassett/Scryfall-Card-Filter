$(document).ready(function() {
	$.getJSON("https://archive.scryfall.com/json/scryfall-default-cards.json", function(json) {
    console.log(json[0]);
    var cards = [];
    for (var i = 0; i < json.length; i++) {
    	var card = json[i];
    	if (card.lang == "en" && 
    		  card.legalities.commander == "legal" && 
    		  card.nonfoil == true && 
    		  card.object == "card" &&
    		  card.oversized == false &&
    		  card.promo == false &&
    		  !card.type_line.includes("Basic Land")) {
    
    			cards.push(json[i].name);
    	}
    }
    var uniqueCards = uniqueCards(cards);
    console.log(uniqueCards);
    console.log(uniqueCards.length);

    function uniqueCards(cardNames) {

  	  var uniqueCards = cardNames.filter(function(item, index) {
  	  	return cardNames.indexOf(item) >= index;
     	});
  	return uniqueCards;
  }
  });

});

