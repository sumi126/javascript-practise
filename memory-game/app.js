const cardArray = [
    {
        name: 'tea',
        img: 'images/tea.jpg'
    } ,
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.jpg'
    } ,
    {
        name: 'hot-tea',
        img: 'images/hot-tea.jpg'
    } ,
    {
        name: 'ice-cream',
        img: 'images/ice-cream.jpg'
    } ,
    {
        name: 'milkshake',
        img: 'images/milkshake.jpg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg'
    },
    {
        name: 'tea',
        img: 'images/tea.jpg'
    } ,
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.jpg'
    } ,
    {
        name: 'hot-tea',
        img: 'images/hot-tea.jpg'
    } ,
    {
        name: 'ice-cream',
        img: 'images/ice-cream.jpg'
    } ,
    {
        name: 'milkshake',
        img: 'images/milkshake.jpg'
    },
    {
        name: 'pizza',
        img: 'images/pizza.jpg'
    },
]
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardChosen = [];
let cardChosenIds = [];
const cardsWon = [];

function createBoard(){
    for(let i = 0;i<cardArray.length;i++){
        const card = document.createElement('img');
        card.setAttribute('src','images/blank1.jpg');
        card.setAttribute('data-id',i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card);
    }
}
createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img');
    const optionOneId = cardChosenIds[0];
    const optionTwoId = cardChosenIds[1];
    if( optionOneId == optionTwoId){
        
        alert('You found the match to click the same image!');
        cards[optionOneId].setAttribute('src', 'images/blank1.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank1.jpg')
        
    }
    if(cardChosen[0] == cardChosen[1]){

        alert('You found the match!');
        cards[optionOneId].setAttribute('src' ,' images/white.jpg');
        cards[optionTwoId].setAttribute('src' , 'images/white.jpg');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardChosen)
    } else{
        cards[optionOneId].setAttribute('src', 'images/blank1.jpg')
        cards[optionTwoId].setAttribute('src', 'images/blank1.jpg')
        alert("Sorry try again");
    }
    resultDisplay.textContent = cardsWon.length;
    cardChosen = [];
    cardChosenIds = [];

    if(cardsWon.length == (cardArray.length/2)){
        resultDisplay.innerHTML = 'Congratulations you found the all!'
        cards = [];
    }
}

function flipCard(){
    let cardID = this.getAttribute('data-id');
    cardChosen.push(cardArray[cardID].name);
    cardChosenIds.push(cardID);
    this.setAttribute('src',cardArray[cardID].img);
    if(cardChosen.length === 2){
        setTimeout(checkMatch,500)
    }
}