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
let computerCards = []
let userCards = []
let usedCards = []
const dealCards = () => {
  computerCards = defineDeck.splice(0,2)
  userCards = defineDeck.splice(0,2)
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

//place a bet
let money = 200
const bet = () => {
  let bet = 5
  money -= bet
  $('#usersCurrentMoney').text(`$${money}`)
}

//win bet
const winBet = () => {
  money += 10
  $('#usersCurrentMoney').text(`$${money}`)
}

//lose bet
const tieBet = () => {
  money += 5
  $('#usersCurrentMoney').text(`$${money}`)
}
// When someone wins give the option for a new round to be started and all the buttons, cards and card values reset
// const $newRoundButton = $('<button>').text('New Round')
// $('#topButtons').append($newRoundButton)
// $($newRoundButton).on('click', () => {
// })

//reset values on screen and push the cards on the table into a used cards array
const resetValues = () => {
  $('#uservalue').text('0')
  $('#computervalue').text('0')
  usedCards.push(...computerCards.splice(0,computerCards.length))
  usedCards.push(...userCards.splice(0,userCards.length))
  $('#showUserCards').text('')
  $('#showComputerCards').text('')
}

//Have the computer check when the hit me button is clicked, if user or computer passed 21 they get alert they lost and the buttons for hit me and stay are turned off
const hitMeCheckTwentyOne = (who, button1, button2) => {
  sum = 0
  hitMeBasic(who);
  countCardValue(who)
  if(sum > 21 && who === userCards) {
    alert(`Over 21, User lost!`)
    $(button1).off('click')
    $(button2).off('click')
    resetValues()
  }if(sum > 21 && who === computerCards) {
    alert(`Over 21, Computer lost!`)
    winBet()
    $(button1).off('click')
    $(button2).off('click')
    resetValues()
  }
}
//Have the computer compare the two hands and see who won, if no one hit over 21 already
const checkHands = (button1, button2) => {
  sum = 0
  countCardValue(userCards)
  userSum = sum
  sum = 0
  countCardValue(computerCards)
  computerSum = sum
  $(button1).off('click')
  $(button2).off('click')
  if(userSum > computerSum) {
    alert('Player won')
    winBet()
    resetValues()
  }else if(computerSum > userSum){
    alert('computer won')
    resetValues()
  }else {
    alert('You tied!')
    tieBet()
    resetValues()
  }
}
//display the value of the users cards to the user
const userCardsValue = () => {
  $('#uservalue').text(` ${countCardValue(userCards)}`)
}
//display the value of the computers cards to the user
const computerCardsValue = () => {
  $('#computervalue').text(` ${countCardValue(computerCards)}`)
}
//display the users cards to the user
const showUsersCards = () => {
  for(let i = 0; i < userCards.length; i++){
    $('#showUserCards').append(`${userCards[i].card} of ${userCards[i].suit}, `)
  }
}
//display the computers cards to the user
const showComputersCards = () => {
  for(let i = 0; i < computerCards.length; i++){
    $('#showComputerCards').append(`${computerCards[i].card} of ${computerCards[i].suit}, `)
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
      console.log(userCards);
      console.log(computerCards);
      //display the users cards and value of their cards
      userCardsValue()
      computerCardsValue()
      showUsersCards()
      showComputersCards()
      //make the hit me and stay button
      const $hitMeButton = $('<button>').text('Hit Me')
      $('#user').append($hitMeButton)
      const $stayButton = $('<button>').text('Stay')
      $('#user').append($stayButton)

      $($hitMeButton).on('click', () => {
        //gives another card and checks if they went over 21
        hitMeCheckTwentyOne(userCards, $hitMeButton, $stayButton)
        userCardsValue()
        computerCardsValue()
        $('#showUserCards').text('')
        $('#showComputerCards').text('')
        showUsersCards()
        showComputersCards()
      })
      $($stayButton).on('click', () => {
        //user stays with their cards and the computer gives itself another card if its cards value is less than 15, if not then checkhands has the cards compared to see who the winner is
        if(countCardValue(computerCards) < 15){
          hitMeCheckTwentyOne(computerCards, $hitMeButton, $stayButton)
          userCardsValue()
          computerCardsValue()
          $('#showUserCards').text('')
          $('#showComputerCards').text('')
          showUsersCards()
          showComputersCards()
          if(countCardValue(computerCards) < 15){
            hitMeCheckTwentyOne(computerCards, $hitMeButton, $stayButton)
            userCardsValue()
            computerCardsValue()
            $('#showUserCards').text('')
            $('#showComputerCards').text('')
            showUsersCards()
            showComputersCards()
            if(countCardValue(computerCards) < 15){
              hitMeCheckTwentyOne(computerCards, $hitMeButton, $stayButton)
              userCardsValue()
              computerCardsValue()
              $('#showUserCards').text('')
              $('#showComputerCards').text('')
              showUsersCards()
              showComputersCards()
              showComputersCards()
              if(countCardValue(computerCards) < 15){
                hitMeCheckTwentyOne(computerCards, $hitMeButton, $stayButton)
                userCardsValue()
                computerCardsValue()
                $('#showUserCards').text('')
                $('#showComputerCards').text('')
                showUsersCards()
                showComputersCards()
                checkHands($hitMeButton, $stayButto)
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

//A new round button should come on to restart the round when a round is Over, having trouble with my new round function
//
//Make A have the possibility of having the value of 1 or 11
})
