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


//Have the computer check when the hit me button is clicked, if you passed 21 and lost
const hitMeCheckTwentyOne = (who) => {
  sum = 0
  hitMeBasic(who);
  countCardValue(who)
  if(sum > 21) {
    alert('Over 21, good try!')
  }
}

//Have the computer compare the two hands and see who won, if no one hit over 21 already
const checkHands = () => {
  sum = 0
  countCardValue(userCards)
  userSum = sum
  sum = 0
  countCardValue(computerCards)
  computerSum = sum
  if(userSum > computerSum) {
    alert('Player won')
  }else if(computerSum > userSum){
    alert('computer won')
  }else {
    alert('You tied!')
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
    const $dealButton = $('<button>').text('Deal')
    $('#topButtons').append($dealButton)

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
        hitMeCheckTwentyOne(userCards)
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
          hitMeCheckTwentyOne(computerCards)
          userCardsValue()
          computerCardsValue()
          $('#showUserCards').text('')
          $('#showComputerCards').text('')
          showUsersCards()
          showComputersCards()
        }else {
          checkHands()
        }
      })
    })
  })


//get the function that displays the users current cards to work
//if someone goes over 21, hit me and stay are still available, game should be over then and someone should get a point temporarily until i figure out the money part of this
//A new round button should come on to restart the round when a round is Over
//Make A have the possibility of having the value of 1 or 11
})
