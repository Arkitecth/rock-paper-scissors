const rock = document.querySelector(".rock"); 
const paper = document.querySelector(".paper"); 
const scissors = document.querySelector(".scissors"); 


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

function addScore() {
    const score = document.querySelector(".score"); 
    const game = document.querySelector('.game'); 
    score.style.display = "block";
    game.insertBefore(score, scissors)
}

function renderImage(element) {
    const image = document.createElement('img')
    image.src = `${element}.png`
    document.querySelector('.game').appendChild(image); 
}

rock.addEventListener("click", ()=> {
    alignLeft(rock); 
    deleteElement(paper); 
    deleteElement(scissors); 
    renderImage(computerInput()); 
    addScore();
}); 

paper.addEventListener("click", ()=> {
    alignLeft(paper); 
    deleteElement(rock); 
    deleteElement(scissors); 
    renderImage(computerInput()); 
    addScore();
}); 

scissors.addEventListener("click", ()=> {
    alignLeft(scissors); 
    deleteElement(rock); 
    deleteElement(paper); 
    renderImage(computerInput()); 
    addScore();
}); 
