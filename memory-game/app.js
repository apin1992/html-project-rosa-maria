///
const cardArray = [
  {
    name: "alakazam",
    img: "images/alakazam.png",
  },
  {
    name: "charizard",
    img: "images/charizard.png",
  },
  {
    name: "dragonite",
    img: "images/dragonite.png",
  },
  {
    name: "electribuzz",
    img: "images/electribuzz.png",
  },
  {
    name: "machamp",
    img: "images/mew2.png",
  },
  {
    name: "pickachu",
    img: "images/pickachu.png",
  },
  {
    name: "alakazam",
    img: "images/alakazam.png",
  },
  {
    name: "charizard",
    img: "images/charizard.png",
  },
  {
    name: "dragonite",
    img: "images/dragonite.png",
  },
  {
    name: "electribuzz",
    img: "images/electribuzz.png",
  },
  {
    name: "machamp",
    img: "images/mew2.png",
  },
  {
    name: "pickachu",
    img: "images/pickachu.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/pokemon.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/pokemon.png");
    cards[optionTwoId].setAttribute("src", "images/pokemon.png");
    alert("clicked same image");
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    alert("match");
    cards[optionOneId].setAttribute("src", "images/blank-1.png");
    cards[optionTwoId].setAttribute("src", "images/blank-1.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/pokemon.png");
    cards[optionTwoId].setAttribute("src", "images/pokemon.png");
    alert("try again");
  }
  resultDisplay.innerHTML = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = "congratulation, you found them all";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
