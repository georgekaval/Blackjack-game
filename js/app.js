//https://georgekaval.github.io/Blackjack-game/

//Make an array with all the cards as objects
const defineDeck =[
  {card: 'A', value: 1, suit: 'hearts', img: $('<img src="images/a_heart.png" />').addClass('card')}, {card: 'A', value: 1, suit: 'spades', img: $('<img src="images/A_spade.png" />').addClass('card')}, {card: 'A', value: 1, suit: 'diamonds', img: $('<img src="images/A_diamond.png" />').addClass('card')}, {card: 'A', value: 1, suit: 'clubs', img: $('<img src="images/A_club.png" />').addClass('card')}, {card: 2, value: 2, suit: 'hearts', img: $('<img src="images/two_heart.png" />').addClass('card')}, {card: 2, value: 2, suit: 'spades', img: $('<img src="images/two_spade.png" />').addClass('card')}, {card: 2, value: 2, suit: 'diamonds', img: $('<img src="images/two_diamond.png" />').addClass('card')}, {card: 2, value: 2, suit: 'clubs', img: $('<img src="images/two_club.png" />').addClass('card')}, {card: 3, value: 3, suit: 'hearts', img: $('<img src="images/three_heart.png" />').addClass('card')}, {card: 3, value: 3, suit: 'spades', img: $('<img src="images/three_spade.png" />').addClass('card')}, {card: 3, value: 3, suit: 'diamonds', img: $('<img src="images/three_diamond.png" />').addClass('card')}, {card: 3, value: 3, suit: 'clubs', img: $('<img src="images/three_club.png" />').addClass('card')}, {card: 4, value: 4, suit: 'hearts', img: $('<img src="images/four_heart.png" />').addClass('card')}, {card: 4, value: 4, suit: 'spades', img: $('<img src="images/four_spade.png" />').addClass('card')}, {card: 4, value: 4, suit: 'diamonds', img: $('<img src="images/four_diamond.png" />').addClass('card')}, {card: 4, value: 4, suit: 'clubs', img: $('<img src="images/four_club.png" />').addClass('card')}, {card: 5, value: 5, suit: 'hearts', img: $('<img src="images/five_heart.png" />').addClass('card')}, {card: 5, value: 5, suit: 'spades', img: $('<img src="images/five_spade.png" />').addClass('card')}, {card: 5, value: 5, suit: 'diamonds', img: $('<img src="images/five_diamond.png" />').addClass('card')}, {card: 5, value: 5, suit: 'clubs', img: $('<img src="images/five_club.png" />').addClass('card')}, {card: 6, value: 6, suit: 'hearts', img: $('<img src="images/six_heart.png" />').addClass('card')}, {card: 6, value: 6, suit: 'spades', img: $('<img src="images/six_spade.png" />').addClass('card')}, {card: 6, value: 6, suit: 'diamonds', img: $('<img src="images/six_diamond.png" />').addClass('card')}, {card: 6, value: 6, suit: 'clubs', img: $('<img src="images/six_club.png" />').addClass('card')}, {card: 7, value: 7, suit: 'hearts', img: $('<img src="images/seven_heart.png" />').addClass('card')}, {card: 7, value: 7, suit: 'spades', img: $('<img src="images/seven_spade.png" />').addClass('card')}, {card: 7, value: 7, suit: 'diamonds', img: $('<img src="images/seven_diamond.png" />').addClass('card')}, {card: 7, value: 7, suit: 'clubs', img: $('<img src="images/seven_club.png" />').addClass('card')}, {card: 8, value: 8, suit: 'hearts', img: $('<img src="images/eight_heart.png" />').addClass('card')}, {card: 8, value: 8, suit: 'spades', img: $('<img src="images/eight_spade.png" />').addClass('card')}, {card: 8, value: 8, suit: 'diamonds', img: $('<img src="images/eight_diamond.png" />').addClass('card')}, {card: 8, value: 8, suit: 'clubs', img: $('<img src="images/eight_club.png" />').addClass('card')}, {card: 9, value: 9, suit: 'hearts', img: $('<img src="images/nine_heart.png" />').addClass('card')}, {card: 9, value: 9, suit: 'spades', img: $('<img src="images/nine_spade.png" />').addClass('card')}, {card: 9, value: 9, suit: 'diamonds', img: $('<img src="images/nine_diamond.png" />').addClass('card')}, {card: 9, value: 9, suit: 'clubs', img: $('<img src="images/nine_club.png" />').addClass('card')}, {card: 10, value: 10, suit: 'hearts', img: $('<img src="images/ten_heart.png" />').addClass('card')}, {card: 10, value: 10, suit: 'spades', img: $('<img src="images/ten_spade.png" />').addClass('card')}, {card: 10, value: 10, suit: 'diamonds', img: $('<img src="images/ten_diamond.png" />').addClass('card')}, {card: 10, value: 10, suit: 'clubs', img: $('<img src="images/ten_club.png" />').addClass('card')}, {card: 'J', value: 10, suit: 'hearts', img: $('<img src="images/JH.png" />').addClass('card')}, {card: 'J', value: 10, suit: 'spades', img: $('<img src="images/JS.png" />').addClass('card')}, {card: 'J', value: 10, suit: 'diamonds', img: $('<img src="images/JD.png" />').addClass('card')}, {card: 'J', value: 10, suit: 'clubs', img: $('<img src="images/JC.png" />').addClass('card')}, {card: 'Q', value: 10, suit: 'hearts', img: $('<img src="images/QH.png" />').addClass('card')}, {card: 'Q', value: 10, suit: 'spades', img: $('<img src="images/QS.png" />').addClass('card')}, {card: 'Q', value: 10, suit: 'diamonds', img: $('<img src="images/QD.png" />').addClass('card')}, {card: 'Q', value: 10, suit: 'clubs', img: $('<img src="images/QC.png" />').addClass('card')}, {card: 'K', value: 10, suit: 'hearts', img: $('<img src="images/KH.png" />').addClass('card')}, {card: 'K', value: 10, suit: 'spades', img: $('<img src="images/KS.png" />').addClass('card')}, {card: 'K', value: 10, suit: 'diamonds', img: $('<img src="images/KD.png" />').addClass('card')}, {card: 'K', value: 10, suit: 'clubs', img: $('<img src="images/KC.png" />').addClass('card')}
]
//build the deck with random cards
const randomizeDeck = () => {
  for(let i = defineDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [defineDeck[i],defineDeck[j]] = [defineDeck[j], defineDeck[i]]
  }
}
//Have the computer choose the first 2 cards for itself and the user
let dealerCards = []
let playerCards = []
let usedCards = []
const dealCards = () => {
  dealerCards = defineDeck.splice(0,2)
  playerCards = defineDeck.splice(0,2)
}
//reshuffle deck when low
const reshuffle =() => {
  if(defineDeck.length < 15){
    defineDeck.push(...usedCards.splice(0,usedCards.length))
      console.log('shuffle');

  }
}


//Choose another card, this is called in the hitMeCheckTwentyOne function
const hitMeBasic = (who) => {
  who.push(...defineDeck.splice(0,1))
}
//Have the computer count the cards values in a hand
let sum = 0
const countCardValue = (who) => {
  sum = 0
  for(let i = 0; i < who.length; i ++){
    sum += who[i].value
  }return sum
}
//choose another card into the array, add up the value of total cards in array, then show it on the DOM
const hitMePlayer = () => {
  sum = 0
  hitMeBasic(playerCards)
  countCardValue(playerCards)
  showPlayersCards()
}
const hitMeDealer = () => {
  sum = 0
  hitMeBasic(dealerCards)
  countCardValue(dealerCards)
  showDealersCards()
}
//check Ace for player
const checkPlayerAce = () => {
  for(let i = 0; i < playerCards.length; i ++){
    if(playerCards[i].card === 'A'){
      const playerAnswer = prompt('Would you like your Ace to be counted as 1 or 11?', '1 or 11')
      if(playerAnswer.trim() === '11'){
          playerCards[i].value = 11
      }else if(playerAnswer.trim() === '1'){
          playerCards[i].value = 1
      }else if(playerAnswer.trim() !== '1' && playerAnswer.trim() !== '11'){
          const playerAnswer = prompt('Would you like your Ace to be counted as 1 or 11?', '1 or 11')
      }
    }
  }
}
//check ace for dealer and set conditions for when to make A equal to 11
const checkDealerAce = () => {
  for(let i = 0; i < dealerCards.length; i ++){
    if(dealerCards[i].card === 'A'){
      if(countCardValue(dealerCards) + 10 >= 18 && countCardValue(dealerCards) + 10 <= 21){
          dealerCards[i].value = 11
      }
    }
  }
}
//set starting money
let money = 200
// const betOptions = () => {
//   const $betFive = $('<button>').text(`Bet $5`)
//   const $betTen = $('<button>').text(`Bet $10`)
//   const $betTwenty = $('<button>').text(`Bet $10`)
//   $('#playerMoney').append($betFive)
//   $('#playerMoney').append($betTen)
//   $('#playerMoney').append($betTwenty)
// }
//place a bet
const bet = () => {
  let bet = 5
  money -= bet
  $('#playersCurrentMoney').text(`$${money}`)
}

//win bet
const winBet = () => {
  money += 10
  $('#playersCurrentMoney').text(`$${money}`)
}

//lose bet
const tieBet = () => {
  money += 5
  $('#playersCurrentMoney').text(`$${money}`)
}
const displayOutcome = () => {
  $('#outcome').css('display', 'block')
  $('#outcome').css('border', ' 0.5em solid black')
  $('#outcome').css('padding', '1em')

}
//Check if players cards value is over 21, tell the player they lost, remove the hit me and stay button, and give the option to play again
const checkPlayerTwentyOne = (button1, button2) => {
  if(sum > 21){
    const tellPlayerBust = () => {
      const $playerBust = $('<h3>').text(`${countCardValue(playerCards)}! Player busts, Dealer wins!`)
      displayOutcome()
      $('#outcome').append($playerBust)
    }
    tellPlayerBust()
    $(button1).remove()
    $(button2).remove()
    $('#playButton').show().text('Play again')
  }
}

const checkDealerTwentyOne = (button1, button2) => {
  if(sum > 21){
    const tellDealerBust = () => {
      const $dealerBust = $('<h3>').text(`${countCardValue(dealerCards)}! Dealer busts, Player wins!`)
      displayOutcome()
      $('#outcome').append($dealerBust)
    }
    tellDealerBust()
    winBet()
    $(button1).remove()
    $(button2).remove()
    $('#playButton').show().text('New round')
  }
}
//Get both hands values together
const countBothHandsValues = () => {
  checkPlayerAce()
  countCardValue(playerCards)
  playerSum = sum
  sum = 0
  countCardValue(dealerCards)
  dealerSum = sum
}
//compare the two hands to see who won
const compareHands = () => {
  countBothHandsValues()
  if(playerSum > dealerSum && playerSum < 22) {
    const $playerwon = $('<h3>').text(`Player has ${countCardValue(playerCards)}, Dealer has ${countCardValue(dealerCards)}.  Player won!`)
    displayOutcome()
    $('#outcome').append($playerwon)
    winBet()
  }else if(dealerSum > playerSum && dealerSum < 22){
    const $dealerwon = $('<h3>').text(`Dealer has ${countCardValue(dealerCards)}, Player has ${countCardValue(playerCards)}.  Dealer won!`)
    displayOutcome()
    $('#outcome').append($dealerwon)
  }else if(dealerSum === playerSum){
    const $tie = $('<h3>').text(`Player has ${countCardValue(playerCards)} and Dealer has ${countCardValue(dealerCards)}.  Push!`)
    displayOutcome()
    $('#outcome').append($tie)
    tieBet()
  }
  $('#playButton').show().text('New round')
}
//display the value of the users cards to the user
const playerCardsValue = () => {
  $('#playervalue').text(` ${countCardValue(playerCards)}`)
  for(let i = 0; i < playerCards.length; i ++){
      if(playerCards[i].card === 'A'){
        $('#playervalue').text(` ${countCardValue(playerCards)}, or ${countCardValue(playerCards) + 10}`)
      }
    }
}
//display the value of the computers cards to the user
const dealerCardsValue = () => {
  $('#dealervalue').text(` ${countCardValue(dealerCards)}`)
  for(let i = 0; i < dealerCards.length; i ++){
      if(dealerCards[i].card === 'A'){
        $('#dealervalue').text(` ${countCardValue(dealerCards)}, or ${countCardValue(dealerCards) + 10}`)
      }
    }
}
//display the users cards to the user
const showPlayersCards = () => {
  for(let i = 0; i < playerCards.length; i++){

    $('#showPlayerCards').append(playerCards[i].img)
  }
}
//display the computers cards to the user
const showDealersCardsFaceDown = () => {
  $('#showDealerCards').append($('<img src="images/backcard.png" />').addClass('card'))
  for(let i = 1; i < dealerCards.length; i++){
    $('#showDealerCards').append(dealerCards[i].img)
  }
}

const showDealersCards = () => {
  for(let i = 0; i < dealerCards.length; i++){
      $('#showDealerCards').append(dealerCards[i].img)
  }
}
//combine these functions when click the stay button.
const stay = (button1, button2) => {
  hitMeDealer()
  checkDealerTwentyOne(button1, button2)
  checkDealerAce()
  $('#showDealerCards').text('')
  showDealersCards()
  dealerCardsValue()
}
//reset values on screen and push the cards on the table into a used cards array
const resetValues = () => {
  $('#playervalue').text('0')
  $('#dealervalue').text('0')
  usedCards.push(...dealerCards.splice(0,dealerCards.length))
  usedCards.push(...playerCards.splice(0,playerCards.length))
  $('#showPlayerCards').text('')
  $('#showDealerCards').text('')
  $('#outcome').text('')
}

$(() => {
  $('#playButton').on('click', () => {
    const $playBtn = $('#playButton');
    $($playBtn).css('display','none');
    $('#outcome').css('display', 'none')
    const $betBtn = $('<button>').text('Bet').addClass('buttons')
    $('#playerMoney').append($betBtn)
    reshuffle()
    resetValues()
    $($betBtn).on('click', () => {
    //shuffle the deck and make the deal button
      randomizeDeck()
      $('#playButton').hide()
      //place a bet
      bet()
      const $dealButton = $('<button>').text('Deal').addClass('buttons')
      $('#namePlayer').append($dealButton)
      $($betBtn).remove()
      $($dealButton).on('click', () => {
      //give each player two cards, turn the start button and the deal button off
        dealCards()
        $($dealButton).remove()
        //display the users cards and value of their cards
        showPlayersCards()
        showDealersCardsFaceDown()
        playerCardsValue()
        //make the hit me and stay button
        const $hitMeButton = $('<button>').text('Hit Me').addClass('buttons')
        $('#namePlayer').append($hitMeButton)
        const $stayButton = $('<button>').text('Stay').addClass('buttons')
        $('#namePlayer').append($stayButton)
        $($hitMeButton).on('click', () => {
          //gives another card and checks if they went over 21
          hitMePlayer()
          checkPlayerTwentyOne($hitMeButton, $stayButton)
          $('#showPlayerCards').text('')
          showPlayersCards()
          playerCardsValue()
        })
        $($stayButton).on('click', () => {
          //user stays with their cards and the computer gives itself another card if its cards value is less than 15, if not then checkhands has the cards compared to see who the winner is
          $($hitMeButton).remove()
          $($stayButton).remove()
          checkDealerAce()
          if(countCardValue(dealerCards) < 15){
            stay($hitMeButton, $stayButton)
            if(countCardValue(dealerCards) < 15){
              stay($hitMeButton, $stayButton)
              if(countCardValue(dealerCards) < 15){
                stay($hitMeButton, $stayButton)
                if(countCardValue(dealerCards) < 15){
                  stay($hitMeButton, $stayButton)
                }
              }
            }
          }if(countCardValue(dealerCards) >= 15){
            $('#showDealerCards').text('')
            showDealersCards()
            compareHands()
          }
        })
      })
      if(money <= 0){
        alert('You ran out of money!')
        $($betButton).remove()
        $('#start').show().text('New game')
        money = 200
      }
      if(money >= 400){
        alert('You won!')
        $($betButton).remove()
        $('#start').show().text('New game')
        money = 200
      }
    })
  })
  let a = 0
    $('#readRulesButton').on('click', () => {
      if(a == 1){
        $('#rulesBox').css('display', 'none')
        return a=0;
      }else {
        $('#rulesBox').css('display', 'block')
        $('#rulesBox').css('border', 'solid black')
        $('#rulesBox').css('background', 'white')
        return a=1;
      }
    })
})
