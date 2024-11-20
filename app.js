let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#computer-score");

const gencompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
}; 

const drawgame = () => {
    console.log("Game was draw");
    msg.innerText = "DRAW! PLAY AGAIN";
}
const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin) {
        console.log("you win");
        msg.innerText = "YOU WIN!";
        msg.style.backgroundcolor = "green";
    }
    else {
        console.log("you lose");
        msg.innerText = "YOU LOSE!";
        msg.style.backgroundcolor = "red";
    }
}

const playgame = (userchoice) => {
    console.log("user choice =",userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice =",compchoice);

if(userchoice == compchoice) {
    drawgame();
} else {
    let userwin =true;
    if(userchoice === "rock") {
        userwin = compchoice ==="paper" ? false : true;
    } else if(userchoice === "paper") {
        userwin = compchoice === "scissors" ? false: true;
    } else {
        userwin = compchoice ==="rock" ? false: true;
    }
    showwinner(userwin,userchoice,compchoice);
}

};
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
