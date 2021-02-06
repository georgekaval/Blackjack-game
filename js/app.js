//Make an array with all the cards as objects
const defineDeck =[
  {card: 'A', value: 1, suit: 'heart'}, {card: 'A', value: 1, suit: 'spade'}, {card: 'A', value: 1, suit: 'diamond'}, {card: 'A', value: 1, suit: 'clubs'}, {card: 2, value: 2, suit: 'heart'}, {card: 2, value: 2, suit: 'spade'}, {card: 2, value: 2, suit: 'diamond'}, {card: 2, value: 2, suit: 'clubs'}, {card: 3, value: 3, suit: 'heart'}, {card: 3, value: 3, suit: 'spade'}, {card: 3, value: 3, suit: 'diamond'}, {card: 3, value: 3, suit: 'clubs'}, {card: 4, value: 4, suit: 'heart'}, {card: 4, value: 4, suit: 'spade'}, {card: 4, value: 4, suit: 'diamond'}, {card: 4, value: 4, suit: 'clubs'}, {card: 5, value: 5, suit: 'heart'}, {card: 5, value: 5, suit: 'spade'}, {card: 5, value: 5, suit: 'diamond'}, {card: 5, value: 5, suit: 'clubs'}, {card: 6, value: 6, suit: 'heart'}, {card: 6, value: 6, suit: 'spade'}, {card: 6, value: 6, suit: 'diamond'}, {card: 6, value: 6, suit: 'clubs'}, {card: 7, value: 7, suit: 'heart'}, {card: 7, value: 7, suit: 'spade'}, {card: 7, value: 7, suit: 'diamond'}, {card: 7, value: 7, suit: 'clubs'}, {card: 8, value: 8, suit: 'heart'}, {card: 8, value: 8, suit: 'spade'}, {card: 8, value: 8, suit: 'diamond'}, {card: 8, value: 8, suit: 'clubs'}, {card: 9, value: 9, suit: 'heart'}, {card: 9, value: 9, suit: 'spade'}, {card: 9, value: 9, suit: 'diamond'}, {card: 9, value: 9, suit: 'clubs'}, {card: 10, value: 10, suit: 'heart'}, {card: 10, value: 10, suit: 'spade'}, {card: 10, value: 10, suit: 'diamond'}, {card: 10, value: 10, suit: 'clubs'}, {card: 'J', value: 10, suit: 'heart'}, {card: 'J', value: 10, suit: 'spade'}, {card: 'J', value: 10, suit: 'diamond'}, {card: 'J', value: 10, suit: 'clubs'}, {card: 'Q', value: 10, suit: 'heart'}, {card: 'Q', value: 10, suit: 'spade'}, {card: 'Q', value: 10, suit: 'diamond'}, {card: 'Q', value: 10, suit: 'clubs'}, {card: 'K', value: 10, suit: 'heart'}, {card: 'K', value: 10, suit: 'spade'}, {card: 'K', value: 10, suit: 'diamond'}, {card: 'K', value: 10, suit: 'clubs'}
]
console.log(defineDeck[4].value);

//build the deck with random cards
const randomizeDeck = () => {
  for(let i = defineDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [defineDeck[i],defineDeck[j]] = [defineDeck[j], defineDeck[i]]
  }
}
randomizeDeck()
console.log(defineDeck);

//Have the computer choose the first 2 cards for itself and the user
let computerCards = []
let userCards = []
const chooseCardsToDeal = () => {
  computerCards = defineDeck.splice(0,2)
  userCards = defineDeck.splice(0,2)
}
chooseCardsToDeal()
console.log(computerCards);
console.log(userCards);
console.log(defineDeck);

//Choose another card when hit me is activated in game
const hitMe = (who) => {
  who.push(...defineDeck.splice(0,1))
}
hitMe(userCards)
console.log(userCards);
console.log(defineDeck);

//Have the computer count the cards values in a hand
let sum = 0
const countCardValue = (who) => {
  for(let i = 0; i < who.length; i ++){
    sum += who[i].value
  }return sum
}
countCardValue(userCards)
console.log(sum);

//Have the computer check if a hand is over 21 in value
// const checkTwentyOne = (callback) => {
//
// }
