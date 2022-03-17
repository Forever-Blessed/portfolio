var totalvalue;
var totalvalue1;
var totalvalue2;
var totalvalue3;
var totalvalue4;
var totalvalue5;
let twocardvalue;
let threecardvalue;
let fourcardvalue;
let fivecardvalue;
var hitexecuted;
var oneexecuted = false;
var twoexecuted = false;
var threeexecuted = false;
let playerlost = false;
// this is a function to create the deck 
function createDeck() {
  let cardsuits = ['H','C','D','S'];
  let cardlevel = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
  let deck = [];

  // Then we make a for Loop, which defines a variable CardS (suits)
  for (var cardS = 0; cardS < 4; cardS++) {
    // inside the for loop we use a Nested for loop for cardL (level)
    for (var cardL = 0; cardL < 13; cardL++) {
      // Then we push to deck Cardsuits + card level after each loop 
      //has run
      deck.push(cardsuits[cardS] + cardlevel[cardL]);
    }
  }
  // WE reutrn the result of the loop to "deck"
  return deck;
  console.log(deck)
}

// Then this is a function too shuffle the cards called ShuffleFunc
function shuffleFunc (deck) {
  for(var i = 0; i < 52; i++) {
    // declaring a variable called tempcard and setting it the [i] of deck
    var tempCard = deck[i];
    var randomIndex = Math.floor(Math.random() * 52);
    //then we take the temp card and swap it with the 
    //random index variable and 
    deck[i] = deck[randomIndex];
    deck[randomIndex] = tempCard;
  }
}


//let gameDeck = createDeck();
function startgame() {
  var gameDeck = createDeck();
  shuffleFunc(gameDeck);
  console.log(gameDeck);
  // splicing by 5 for 5 cards just to note
  var twoCardHand = gameDeck.splice(0,5);
  console.log('Your hand is a '+twoCardHand[0]+' and a '+twoCardHand[1])
  let card1value = twoCardHand[0];
  let card2value = twoCardHand[1];
  let card3value = twoCardHand[2];
  let card4value = twoCardHand[3];
  let card5value = twoCardHand[4];
  document.querySelector("#topnumbercard1").innerHTML = card1value[1]
  document.querySelector("#topnumbercard2").innerHTML = card2value[1]
  document.querySelector("#topnumbercard3").innerHTML = card3value[1]
  document.querySelector("#topnumbercard4").innerHTML = card4value[1]
  document.querySelector("#topnumbercard5").innerHTML = card5value[1]
  
  // THIS IF STATEMENT IS FOR THE IMAGE ON CARD 1
  //================================================
  if (card1value[0] === "C") {
    document.querySelector("#img1").src = "clubs.png"
  }
    else if (card1value[0] === "D") {
      document.querySelector("#img1").src = "diamonds.png"
    }

    else if (card1value[0] === "H") {
      document.querySelector("#img1").src = "hearts.png"
    }
    
    else if (card1value[0] === "S") {
      document.querySelector("#img1").src = "spades.png"
    }
//===================================================
    // THIS IF STATEMENT IS FOR THE IMAGE ON CARD 2
    if (card2value[0] === "C") {
      document.querySelector("#img2").src = "clubs.png"
    }
      else if (card2value[0] === "D") {
        document.querySelector("#img2").src = "diamonds.png"
      }
  
      else if (card2value[0] === "H") {
        document.querySelector("#img2").src = "hearts.png"
      }
      
      else if (card2value[0] === "S") {
        document.querySelector("#img2").src = "spades.png"
      }
//=====================================================
   // THIS IF STATEMENT IS FOR THE IMAGE ON CARD 3
if (card3value[0] === "C") {
    document.querySelector("#img3").src = "clubs.png"
  }
    else if (card3value[0] === "D") {
      document.querySelector("#img3").src = "diamonds.png"
    }

    else if (card3value[0] === "H") {
      document.querySelector("#img3").src = "hearts.png"
    }
    
    else if (card3value[0] === "S") {
      document.querySelector("#img3").src = "spades.png"
    }
//=====================================================
   // THIS IF STATEMENT IS FOR THE IMAGE ON CARD 4
if (card4value[0] === "C") {
    document.querySelector("#img4").src = "clubs.png"
  }
    else if (card4value[0] === "D") {
      document.querySelector("#img4").src = "diamonds.png"
    }

    else if (card4value[0] === "H") {
      document.querySelector("#img4").src = "hearts.png"
    }
    
    else if (card4value[0] === "S") {
      document.querySelector("#img4").src = "spades.png"
    }
//=====================================================
   // THIS IF STATEMENT IS FOR THE IMAGE ON CARD 5
if (card5value[0] === "C") {
    document.querySelector("#img5").src = "clubs.png"
  }
    else if (card5value[0] === "D") {
      document.querySelector("#img5").src = "diamonds.png"
    }

    else if (card5value[0] === "H") {
      document.querySelector("#img5").src = "hearts.png"
    }
    
    else if (card5value[0] === "S") {
      document.querySelector("#img5").src = "spades.png"
    }
//=====================================================
// These convert the 1 from cardvalue[1] to "10"
if (card1value[1] === "1") {
  document.querySelector("#topnumbercard1").innerHTML = ("10")
}
if (card2value[1] === "1") {
  document.querySelector("#topnumbercard2").innerHTML = ("10")
}
if (card3value[1] === "1") {
  document.querySelector("#topnumbercard3").innerHTML = ("10")
}
if (card4value[1] === "1") {
  document.querySelector("#topnumbercard4").innerHTML = ("10")
}
if (card5value[1] === "1") {
  document.querySelector("#topnumbercard5").innerHTML = ("10")
}
// This is for working out the "value" of card 1.
//=================================
if (card1value[1] === "A") {
totalvalue1 = 11;}
else if (card1value[1] === "K") {
  totalvalue1 = 10;}
else if (card1value[1] === "Q") {
    totalvalue1 = 10;}
else if (card1value[1] === "J") {
    totalvalue1 = 10;}
else if (card1value[1] === "1") {
    totalvalue1 = 10;}
else if (card1value[1] === "9") {
    totalvalue1 = 9;}
else if (card1value[1] === "8") {
    totalvalue1 = 8;}
else if (card1value[1] === "7") {
    totalvalue1 = 7;}
else if (card1value[1] === "6") {
    totalvalue1 = 6;}
else if (card1value[1] === "5") {
    totalvalue1 = 5;}
else if (card1value[1] === "4") {
    totalvalue1 = 4;}
else if (card1value[1] === "3") {
    totalvalue1 = 3;}
else if (card1value[1] === "2") {
    totalvalue1 = 2;}
//===================================

//This is for working out the value of card 2

if (card2value[1] === "A") {
  totalvalue2 = 11;}
  else if (card2value[1] === "K") {
            totalvalue2 = 10;}
  else if (card2value[1] === "Q") {
            totalvalue2 = 10;}
  else if (card2value[1] === "J") {
            totalvalue2 = 10;}
  else if (card2value[1] === "1") {
            totalvalue2 = 10;}
  else if (card2value[1] === "9") {
            totalvalue2 = 9;}
  else if (card2value[1] === "8") {
            totalvalue2 = 8;}
  else if (card2value[1] === "7") {
            totalvalue2 = 7;}
  else if (card2value[1] === "6") {
            totalvalue2 = 6;}
  else if (card2value[1] === "5") {
            totalvalue2 = 5;}
  else if (card2value[1] === "4") {
      totalvalue2 = 4;}
  else if (card2value[1] === "3") {
      totalvalue2 = 3;}
  else if (card2value[1] === "2") {
      totalvalue2 = 2;}
//==============================================
// card 3  
if (card3value[1] === "A") {
totalvalue3 = 11;}
else if (card3value[1] === "K") {
  totalvalue3 = 10;}
else if (card3value[1] === "Q") {
    totalvalue3 = 10;}
else if (card3value[1] === "J") {
    totalvalue3 = 10;}
else if (card3value[1] === "1") {
    totalvalue3 = 10;}
else if (card3value[1] === "9") {
    totalvalue3 = 9;}
else if (card3value[1] === "8") {
    totalvalue3 = 8;}
else if (card3value[1] === "7") {
    totalvalue3 = 7;}
else if (card3value[1] === "6") {
    totalvalue3 = 6;}
else if (card3value[1] === "5") {
    totalvalue3 = 5;}
else if (card3value[1] === "4") {
    totalvalue3 = 4;}
else if (card3value[1] === "3") {
    totalvalue3 = 3;}
else if (card3value[1] === "2") {
    totalvalue3 = 2;}
//=====================================================
//card 4 
if (card4value[1] === "A") {
totalvalue4 = 11;}
else if (card4value[1] === "K") {
  totalvalue4 = 10;}
else if (card4value[1] === "Q") {
    totalvalue4 = 10;}
else if (card4value[1] === "J") {
    totalvalue4 = 10;}
else if (card4value[1] === "1") {
    totalvalue4 = 10;}
else if (card4value[1] === "9") {
    totalvalue4 = 9;}
else if (card4value[1] === "8") {
    totalvalue4 = 8;}
else if (card4value[1] === "7") {
    totalvalue4 = 7;}
else if (card4value[1] === "6") {
    totalvalue4 = 6;}
else if (card4value[1] === "5") {
    totalvalue4 = 5;}
else if (card4value[1] === "4") {
    totalvalue4 = 4;}
else if (card4value[1] === "3") {
    totalvalue4 = 3;}
else if (card4value[1] === "2") {
    totalvalue4 = 2;}
//========================================================
//card 5 
if (card5value[1] === "A") {
totalvalue5 = 11;}
else if (card5value[1] === "K") {
  totalvalue5 = 10;}
else if (card5value[1] === "Q") {
    totalvalue5 = 10;}
else if (card5value[1] === "J") {
    totalvalue5 = 10;}
else if (card5value[1] === "1") {
    totalvalue5 = 10;}
else if (card5value[1] === "9") {
    totalvalue5 = 9;}
else if (card5value[1] === "8") {
    totalvalue5 = 8;}
else if (card5value[1] === "7") {
    totalvalue5 = 7;}
else if (card5value[1] === "6") {
    totalvalue5 = 6;}
else if (card5value[1] === "5") {
    totalvalue5 = 5;}
else if (card5value[1] === "4") {
    totalvalue5 = 4;}
else if (card5value[1] === "3") {
    totalvalue5 = 3;}
else if (card5value[1] === "2") {
    totalvalue5 = 2;}
    
    
totalvalue = (totalvalue1+totalvalue2)
twocardvalue = (totalvalue)
console.log(totalvalue1 + "+" + totalvalue2 + "=" + totalvalue )


  if (totalvalue >= 22) {
    alert("you Loose!")
  }
      // Here as an example of much more elegant If statement using truthy falsy 
  if (totalvalue) {
    document.querySelector("#showvalue").innerHTML = (totalvalue)
  }
  return totalvalue
}

function cleartable () {
  document.getElementById("card3bj").style.display = "none";
  document.getElementById("card4bj").style.display = "none";
  document.getElementById("card5bj").style.display = "none";
  document.getElementById("hit").style.display = "block";
  document.getElementById("stick").style.display = "block";
  hitexecuted = false;
  hitcomplete = false;
  oneexecuted = false;
  twoexecuted = false;
  threeexecuted = false;
  playerlost = false;
}

  startgame();

  
  window.setInterval (function checkwin () {
  if (!playerlost) {
  if (totalvalue >= 22) {
    alert("you Loose!")
    document.getElementById("hit").style.display = "none";
    document.getElementById("stick").style.display = "none";
    playerlost = true;
  }}
},1000)

  function hit () {

    if (!oneexecuted) {
      totalvalue === twocardvalue 
      totalvalue = (twocardvalue + totalvalue3);
      threecardvalue = totalvalue;
      console.log("1you now have " + totalvalue)
      document.getElementById("card3bj").style.display = "flex";
      document.querySelector("#showvalue").innerHTML = (totalvalue)
      oneexecuted = true;
      hitexecuted = true;
      return totalvalue, oneexecuted;
      }
    

    if (!twoexecuted) {
    if (totalvalue === threecardvalue) {
      totalvalue = (threecardvalue+totalvalue4);
      fourcardvalue = totalvalue;
      console.log("2you now have " + totalvalue)
      document.getElementById("card4bj").style.display = "flex";
      document.querySelector("#showvalue").innerHTML = (totalvalue)
      twoexecuted = true;
      return totalvalue, twoexecuted;
      }}
    
    if (!threeexecuted) {
    if (totalvalue === fourcardvalue) {
      totalvalue = (fourcardvalue+totalvalue5);
      fivecardvalue = totalvalue;
      console.log("3you now have " + totalvalue)
      document.getElementById("card5bj").style.display = "flex";
      document.querySelector("#showvalue").innerHTML = (totalvalue)
      threeexecuted = true;
      return totalvalue, threeexecuted;
      }}
    //console.log("Hit"+ "+" + totalvalue3)
  }

  function stick () {
    var dealerscore = Math.floor(Math.random() * 21)
    if (dealerscore === 1,2,3,4,5,6,7,8) {dealerscore = (dealerscore*2)}
    else if (dealerscore === 9,10,12,14) {dealerscore = (dealerscore*1.5)}
    else if (dealerscore === 11) {dealerscore = (dealerscore + 7)}
    
    if (totalvalue > 21) {alert('Bust!')}
    else if (!(dealerscore < 21)) {
      alert('Dealer is bust you win!' + dealerscore);
    }

    if (totalvalue > dealerscore & totalvalue < 22) {
      alert("you got " + totalvalue + "! Dealer got: " + dealerscore + " you win :)")
      }
    else if (totalvalue === dealerscore) {
      alert("Draw!")
    }
    else if (!(totalvalue < 22)) {
      alert("you got " + totalvalue + "! Dealer got: " + dealerscore + " you loose :(")
      }
}



document.getElementById("shufbut").addEventListener("click", startgame);
document.getElementById("shufbut").addEventListener("click", cleartable);
document.getElementById("hit").addEventListener("click", hit);
document.getElementById("stick").addEventListener("click", stick);



  
  
  
  
  
  // if (document.getElementById("card3").style.display = "flex") {
  // if (document.getElementById("hit").addEventListener("click", hit))
  // document.getElementById("card4").style.display = "flex";
  

// these give me the value of the next cards 
//var twist = gameDeck.splice(0,1);
//console.log('Twist! - you got a '+twist[0])

//var twist2 = gameDeck.splice(0,1);
//console.log('Twist Again! - you got a '+twist2[0])

//var twist3 = gameDeck.splice(0,1);
//console.log('Twist Again! - you got a '+twist3[0])
