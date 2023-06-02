const rock = document.querySelector(".rock"); 
const paper = document.querySelector(".paper"); 
const scissors = document.querySelector(".scissors"); 
const winnerLabel = document.querySelector(".score h3")
const playAgainLabel = document.querySelector(".score h4")
let textLabel = ""; 
let compInput = ""


// Render Computer Images 
// Check for Winner 
// Delete Elements 
// Align Player to the Left
// Aight Computer to the Right
// Play Over Function



function computerInput() {
    const input = Math.floor((Math.random()) * 3 ) + 1; 
    console.log(input); 
    if (input === 1) {
        return "rock"
    } else if (input === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function deleteElement(element) {
    element.style.display = "none"; 
}

function alignLeft(element) {
    element.classList.add("move-img")
}

function addScore(element) {
    const score = document.querySelector(".score"); 
    const game = document.querySelector('.game'); 
    score.style.display = "block";
    game.insertBefore(score, element)
}

function renderImage(element) {
    const image = document.createElement('img')
    image.src = `${element}.png`
    document.querySelector('.game').appendChild(image); 
    return image
}

function evaluateWin(hand1, hand2) {
    //1 - Rock 
    //2 - Paper 
    //3 - Scissors

    console.log(hand1, hand2);
    if(hand1 === hand2) {
        return "Its a tie"
    }
    else if(hand1 === "paper" && hand2 === "rock") {
        return "You Win"; 
    }
    else if(hand1 === "rock" && hand2 === "scissors") {
        return "You Win"; 
    }
    else if(hand1 === "scissors" && hand2 === "paper") {
        return "You Win"; 
    }
    else {
        return "You Lose"
    }
}

function changeWinnerText(text) {
    winnerLabel.textContent = text
    console.log(text)
}


playAgainLabel.addEventListener("click", function handler() {
    window.location.reload(); 
})



rock.addEventListener("click", function handler(){
    alignLeft(rock); 
    deleteElement(paper); 
    deleteElement(scissors); 
    compInput = computerInput()
    const image =  renderImage(compInput); 
    addScore(image);
    this.removeEventListener("click", handler)
    textLabel = evaluateWin("rock", compInput); 
    changeWinnerText(textLabel);
});    

paper.addEventListener("click", function handler(){
    alignLeft(paper); 
    deleteElement(rock); 
    deleteElement(scissors); 
    compInput = computerInput()
    const image = renderImage(compInput); 
    addScore(image);
    this.removeEventListener("click", handler)
    textLabel = evaluateWin("paper", compInput); 
    changeWinnerText(textLabel);
}); 

scissors.addEventListener("click", function handler(){
    alignLeft(scissors); 
    deleteElement(rock); 
    deleteElement(paper);
    compInput = computerInput()
    const image = renderImage(compInput); 
    addScore(image);
    this.removeEventListener("click", handler)
    textLabel = evaluateWin("scissors", compInput); 
    changeWinnerText(textLabel);
}); 
