// Code your solutions in this file
const cards = [];

function writeCards(cards, giftType){
    const thankYous = [];
    for(let i = 0; i < cards.length; i++){
       thankYous.push( `Thank you, ${cards[i]}, for the wonderful ${giftType} gift!`);
    }
    return thankYous;
}

function countDown(count){
    while(count >=0){
        console.log(count);
        count--;
    }
}