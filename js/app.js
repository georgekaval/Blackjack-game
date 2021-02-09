//Make an array with all the cards as objects

const defineDeck =[
  {card: 'A', value: 1, suit: 'hearts'}, {card: 'A', value: 1, suit: 'spades'}, {card: 'A', value: 1, suit: 'diamonds'}, {card: 'A', value: 1, suit: 'clubs'}, {card: 2, value: 2, suit: 'hearts'}, {card: 2, value: 2, suit: 'spades'}, {card: 2, value: 2, suit: 'diamonds'}, {card: 2, value: 2, suit: 'clubs'}, {card: 3, value: 3, suit: 'hearts'}, {card: 3, value: 3, suit: 'spades'}, {card: 3, value: 3, suit: 'diamonds'}, {card: 3, value: 3, suit: 'clubs'}, {card: 4, value: 4, suit: 'hearts'}, {card: 4, value: 4, suit: 'spades'}, {card: 4, value: 4, suit: 'diamonds'}, {card: 4, value: 4, suit: 'clubs'}, {card: 5, value: 5, suit: 'hearts'}, {card: 5, value: 5, suit: 'spades'}, {card: 5, value: 5, suit: 'diamonds'}, {card: 5, value: 5, suit: 'clubs'}, {card: 6, value: 6, suit: 'hearts'}, {card: 6, value: 6, suit: 'spades'}, {card: 6, value: 6, suit: 'diamonds'}, {card: 6, value: 6, suit: 'clubs'}, {card: 7, value: 7, suit: 'hearts'}, {card: 7, value: 7, suit: 'spades'}, {card: 7, value: 7, suit: 'diamonds'}, {card: 7, value: 7, suit: 'clubs'}, {card: 8, value: 8, suit: 'hearts'}, {card: 8, value: 8, suit: 'spades'}, {card: 8, value: 8, suit: 'diamonds'}, {card: 8, value: 8, suit: 'clubs'}, {card: 9, value: 9, suit: 'hearts'}, {card: 9, value: 9, suit: 'spades'}, {card: 9, value: 9, suit: 'diamonds'}, {card: 9, value: 9, suit: 'clubs'}, {card: 10, value: 10, suit: 'hearts'}, {card: 10, value: 10, suit: 'spades'}, {card: 10, value: 10, suit: 'diamonds'}, {card: 10, value: 10, suit: 'clubs'}, {card: 'J', value: 10, suit: 'hearts'}, {card: 'J', value: 10, suit: 'spades'}, {card: 'J', value: 10, suit: 'diamonds'}, {card: 'J', value: 10, suit: 'clubs'}, {card: 'Q', value: 10, suit: 'hearts'}, {card: 'Q', value: 10, suit: 'spades'}, {card: 'Q', value: 10, suit: 'diamonds'}, {card: 'Q', value: 10, suit: 'clubs'}, {card: 'K', value: 10, suit: 'hearts'}, {card: 'K', value: 10, suit: 'spades'}, {card: 'K', value: 10, suit: 'diamonds'}, {card: 'K', value: 10, suit: 'clubs'}
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
//check Ace for player on deal
const checkPlayerAceDeal = () => {
      if(playerCards[0].card === 'A'){
        const playerAnswer = prompt('Would you like your Ace to be counted as 1 or 11?', '1 or 11')
        if(playerAnswer === '11'){
          playerCards[0].value = 11
        }else if(playerAnswer === '1'){
          playerCards[0].value = 1
        }else if(playerAnswer !== '1' && playerAnswer !== '11'){
          const playerAnswer = prompt('Would you like your Ace to be counted as 1 or 11?', '1/11')
        }
      }
      if(playerCards[1].card === 'A'){
        const playerAnswer = prompt('Would you like your Ace to be counted as 1 or 11?', '1 or 11')
        if(playerAnswer === '11'){
          playerCards[1].value = 11
        }else if(playerAnswer === '1'){
          playerCards[1].value = 1
        }else if(playerAnswer !== '1' && playerAnswer !== '11'){
          const playerAnswer = prompt('Would you like your Ace to be counted as 1 or 11?', '1/11')
        }
      }
    }
//check player ace on hit me
const checkPlayerAceHitMe = () => {
  let newCard = playerCards.length - 1
  if(playerCards[newCard].card === 'A'){
    const playerAnswer = prompt('Would you like your Ace to be counted as 1 or 11?', '1 or 11')
    if(playerAnswer === '11'){
      playerCards[newCard].value = 11
    }else if(playerAnswer === '1'){
      playerCards[newCard].value = 1
    }else if(playerAnswer !== '1' && playerAnswer !== '11'){
      const playerAnswer = prompt('Would you like your Ace to be counted as 1 or 11?', '1/11')
    }
  }
}


//check ace for dealer
const checkDealerAce = () => {
  for(let i = 0; i < dealerCards.length; i ++){
      if(dealerCards[i].card === 'A'){
        if(countCardValue(dealerCards <10)){
          dealerCards[i].value = 11
        }
      }
    }
}
//place a bet
let money = 200
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


//reset values on screen and push the cards on the table into a used cards array
const resetValues = () => {
  $('#playervalue').text('0')
  $('#dealervalue').text('0')
  usedCards.push(...dealerCards.splice(0,dealerCards.length))
  usedCards.push(...playerCards.splice(0,playerCards.length))
  $('#showPlayerCards').text('')
  $('#showDealerCards').text('')
}

//Have the computer check when the hit me button is clicked, if user or computer passed 21 they get alert they lost and the buttons for hit me and stay are turned off
const hitMeCheckTwentyOne = (who, button1, button2) => {
  sum = 0
  hitMeBasic(who);
  countCardValue(who)
  if(sum > 21 && who === playerCards) {
    alert(`Over 21, Player busts!`)
    $(button1).off('click')
    $(button2).off('click')
    resetValues()
  }if(sum > 21 && who === dealerCards) {
    alert(`Over 21, Dealer busts!`)
    winBet()
    $(button1).off('click')
    $(button2).off('click')
    resetValues()
  }
}
//Have the computer compare the two hands and see who won, if no one hit over 21 already
const checkHands = (button1, button2) => {
  sum = 0
  countCardValue(playerCards)
  playerSum = sum
  sum = 0
  countCardValue(dealerCards)
  dealerSum = sum
  $(button1).off('click')
  $(button2).off('click')
  if(playerSum > dealerSum) {
    alert('Player won')
    winBet()
    resetValues()
  }else if(dealerSum > playerSum){
    alert('Dealer won')
    resetValues()
  }else {
    alert('Push!')
    tieBet()
    resetValues()
  }
}
//display the value of the users cards to the user
const playerCardsValue = () => {
  $('#playervalue').text(` ${countCardValue(playerCards)}`)
}
//display the value of the computers cards to the user
const dealerCardsValue = () => {
  $('#dealervalue').text(` ${countCardValue(dealerCards)}`)
}
//display the users cards to the user
const showPlayersCards = () => {
  for(let i = 0; i < playerCards.length; i++){
    $('#showPlayerCards').append(`${playerCards[i].card} of ${playerCards[i].suit}, `)
  }
}
//display the computers cards to the user
const showDealersCards = () => {
  for(let i = 0; i < dealerCards.length; i++){
    $('#showDealerCards').append(`${dealerCards[i].card} of ${dealerCards[i].suit}, `)
  }
}

$(() => {
  $('#start').one('click', () => {
    //shuffle the deck and make the deal button
    randomizeDeck()
    const $betButton = $('<button>').text('Bet')
    $('#topButtons').append($betButton)

    $($betButton).on('click', () => {
      //place a bet
      bet()
      const $dealButton = $('<button>').text('Deal')
      $('#topButtons').append($dealButton)
      $($betButton).off('click')

    $($dealButton).on('click', () => {
      //give each player two cards, turn the start button and the deal button off
      dealCards()
      $('#start').off('click')
      $($dealButton).off('click')
      console.log(playerCards);
      console.log(dealerCards);
      //display the users cards and value of their cards
      showPlayersCards()
      showDealersCards()
      setTimeout(checkPlayerAceDeal, 700)
      setTimeout(playerCardsValue, 700)
      dealerCardsValue()
      //make the hit me and stay button
      const $hitMeButton = $('<button>').text('Hit Me')
      $('#player').append($hitMeButton)
      const $stayButton = $('<button>').text('Stay')
      $('#player').append($stayButton)

      $($hitMeButton).on('click', () => {
        //gives another card and checks if they went over 21
        hitMeCheckTwentyOne(playerCards, $hitMeButton, $stayButton)
        $('#showPlayerCards').text('')
        $('#showDealerCards').text('')
        showPlayersCards()
        showDealersCards()
        setTimeout(checkPlayerAceHitMe, 700)
        setTimeout(playerCardsValue, 700)
        dealerCardsValue()

      })
      $($stayButton).on('click', () => {
        //user stays with their cards and the computer gives itself another card if its cards value is less than 15, if not then checkhands has the cards compared to see who the winner is
        if(countCardValue(dealerCards) < 15){
          hitMeCheckTwentyOne(dealerCards, $hitMeButton, $stayButton)
          playerCardsValue()
          dealerCardsValue()
          $('#showPlayerCards').text('')
          $('#showDealerCards').text('')
          showPlayersCards()
          showDealersCards()
          if(countCardValue(dealerCards) < 15){
            hitMeCheckTwentyOne(dealerCards, $hitMeButton, $stayButton)
            playerCardsValue()
            dealerCardsValue()
            $('#showPlayerCards').text('')
            $('#showDealerCards').text('')
            showPlayersCards()
            showDealersCards()
            if(countCardValue(dealerCards) < 15){
              hitMeCheckTwentyOne(dealerCards, $hitMeButton, $stayButton)
              playerCardsValue()
              dealerCardsValue()
              $('#showPlayerCards').text('')
              $('#showDealerCards').text('')
              showPlayersCards()
              showDealersCards()

              if(countCardValue(dealerCards) < 15){
                hitMeCheckTwentyOne(dealerCards, $hitMeButton, $stayButton)
                playerCardsValue()
                dealerCardsValue()
                $('#showPlayerCards').text('')
                $('#showDealerCards').text('')
                showPlayersCards()
                showDealersCards()
                checkHands($hitMeButton, $stayButton)
              }
            }
          }
        }else {
          checkHands($hitMeButton, $stayButton)
          }
        })
      })
    })
  })
//I should not have to click stay twice for the computer to finish its turn, if the computer has under 15, the first stay does a hitme and does not do a checkHands. if the computer has over 15 when I stay it seems to work fine.
//A new round button should come on to restart the round when a round is Over, having trouble with my new round function
//
//Make A have the possibility of having the value of 1 or 11 for the computer
//If player gets 21 on the beginning 2 cards, they should automatically win unless the dealer also has a 21 with the first 2 cards.
})
