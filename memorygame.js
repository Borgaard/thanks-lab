// cards: 
//brazil, mali, kampuchea, taiwan, iceland, haiti, mongolia, kanukistan
var countries = ["Brazil","Mali","Kampuchea","Taiwan","Iceland","Haiti","Mongolia","Kanukistan"];
var board = [];
var lastClickedIndex = null;


for(var i = 0; i < countries.length; i++) {//fill board with countries
	board.push(countries[i]); //do it once!
	board.push(countries[i]); //do it twice!
}
//this function is the fisher yates shuffle from http://bost.ocks.org/mike/shuffle/
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
shuffle(board);
//end fisher yates

var selectCard = document.querySelectorAll(".box");
for(var i = 0; i < selectCard.length; i++) {
	selectCard[i].addEventListener("click", function() {
		var cardIdentifier = this.getAttribute("name");
		console.log(cardIdentifier, lastClickedIndex, board[cardIdentifier], board[lastClickedIndex]);
		if (lastClickedIndex === null) {//first card clicked
			lastClickedIndex = cardIdentifier;
			this.textContent = board[cardIdentifier];
		} else {//click second card, compare to first
			this.textContent = board[cardIdentifier];
			if (board[cardIdentifier] === board[lastClickedIndex]) {
				//cards left on board if equal
			} else {
				//this.textContent = "";
				var selectCard1 = this;
				var selectCard2 = document.querySelector('div[name="'+lastClickedIndex+'"]')
				console.log('div[name="'+lastClickedIndex+'"]');
				setTimeout(function() {
					selectCard1.textContent = "";
					selectCard2.textContent = "";
				}, 1000)
			}	
			lastClickedIndex = null;
		}
	});
}
//reset button! instead of start button :\ 
var resetB = document.querySelector("#resetButton")
resetB.addEventListener("click", function() { 
	shuffle(board);
	for(var i =0; i < selectCard.length; i++) {
		selectCard[i].textContent = "";
	}
})

//next steps!
//1. identify when two cards are matched,
//2. keep two ID'd cards on the board, else turn back over
//3. when two matching cards ID'd, allow next click afterward to ID more cards
//4. reset button










