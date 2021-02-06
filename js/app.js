//Make an array with all the cards as objects
const defineDeck =[
  {card: 'A', value: 1, suit: 'heart'}, {card: 'A', value: 1, suit: 'spade'}, {card: 'A', value: 1, suit: 'diamond'}, {card: 'A', value: 1, suit: 'clubs'}, {card: 2, value: 2, suit: 'heart'}, {card: 2, value: 2, suit: 'spade'}, {card: 2, value: 2, suit: 'diamond'}, {card: 2, value: 2, suit: 'clubs'}, {card: 3, value: 3, suit: 'heart'}, {card: 3, value: 3, suit: 'spade'}, {card: 3, value: 3, suit: 'diamond'}, {card: 3, value: 3, suit: 'clubs'}, {card: 4, value: 4, suit: 'heart'}, {card: 4, value: 4, suit: 'spade'}, {card: 4, value: 4, suit: 'diamond'}, {card: 4, value: 4, suit: 'clubs'}, {card: 5, value: 5, suit: 'heart'}, {card: 5, value: 5, suit: 'spade'}, {card: 5, value: 5, suit: 'diamond'}, {card: 5, value: 5, suit: 'clubs'}, {card: 6, value: 6, suit: 'heart'}, {card: 6, value: 6, suit: 'spade'}, {card: 6, value: 6, suit: 'diamond'}, {card: 6, value: 6, suit: 'clubs'}, {card: 7, value: 7, suit: 'heart'}, {card: 7, value: 7, suit: 'spade'}, {card: 7, value: 7, suit: 'diamond'}, {card: 7, value: 7, suit: 'clubs'}, {card: 8, value: 8, suit: 'heart'}, {card: 8, value: 8, suit: 'spade'}, {card: 8, value: 8, suit: 'diamond'}, {card: 8, value: 8, suit: 'clubs'}, {card: 9, value: 9, suit: 'heart'}, {card: 9, value: 9, suit: 'spade'}, {card: 9, value: 9, suit: 'diamond'}, {card: 9, value: 9, suit: 'clubs'}, {card: 10, value: 10, suit: 'heart'}, {card: 10, value: 10, suit: 'spade'}, {card: 10, value: 10, suit: 'diamond'}, {card: 10, value: 10, suit: 'clubs'}, {card: 'J', value: 10, suit: 'heart'}, {card: 'J', value: 10, suit: 'spade'}, {card: 'J', value: 10, suit: 'diamond'}, {card: 'J', value: 10, suit: 'clubs'}, {card: 'Q', value: 10, suit: 'heart'}, {card: 'Q', value: 10, suit: 'spade'}, {card: 'Q', value: 10, suit: 'diamond'}, {card: 'Q', value: 10, suit: 'clubs'}, {card: 'K', value: 10, suit: 'heart'}, {card: 'K', value: 10, suit: 'spade'}, {card: 'K', value: 10, suit: 'diamond'}, {card: 'K', value: 10, suit: 'clubs'}
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

//Make the Start game button shuffle the deck
$(() => {
  $('#start').on('click', () => {
    randomizeDeck()
    const $dealButton = $('<button>').text('Deal')
    $('body').append($dealButton)
    $($dealButton).on('click', () => {
      dealCards()
      console.log(userCards);
      console.log(computerCards);
      const $userCurrentCards = $('<h3>').text(`User card value is ${countCardValue(userCards)}`)
      $('#user').append($userCurrentCards)
      const $computerCurrentCards = $('<h3>').text(`Computer card value is ${countCardValue(computerCards)}`)
      $('#computer').append($computerCurrentCards)
      const $hitMeButton = $('<button>').text('Hit Me')
      $('body').append($hitMeButton)
      const $stayButton = $('<button>').text('Stay')
      $('body').append($stayButton)
      $($hitMeButton).on('click', () => {
        hitMeCheckTwentyOne(userCards)
      })
      $($stayButton).on('click', () => {
        if(countCardValue(computerCards) < 15){
          hitMeCheckTwentyOne(computerCards)
        }else {
          checkHands()
        }
      })
    })
  })

})
