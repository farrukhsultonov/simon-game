// get DOM elements needed for game
const scoreEl = document.getElementById("score");
const colorParts = document.querySelectorAll(".colors");
const containerEl = document.querySelector(".container");
const startBtn = document.querySelector("#start-btn");
const resultEl = document.querySelector("#score-result");
const wrapperEl = document.querySelector(".wrapper");

// current and new colors object
const colorObj = {
    color1: {current: "#26b643", new: "#00ff00"},
    color2: {current: "#d62626", new: "#ff0000"},
    color3: {current: "#2759a9", new: "#0000ff"},
    color4: {current: "#eebf26", new: "#ffff00"},
};

// game variables
let randomColors = [];
let isPathGenerating = false;
let score = 0;
let clickCount = 0;

// function to get a random color from colors object
const getRandomColor = (colorObj) => {
    const colorKeys = Object.keys(colorObj);
    return colorKeys[Math.floor(Math.random() * colorKeys.length)];
};

// function to pause execution of game for given amount of time

const delay = async (time) => {
    return await new Promise((resolve) => setTimeout(resolve, time));
};

// function to generate a random path of colors
const showPath = async (colors) => {
    scoreEl.innerText = score;
    // loop through each color in the array
    for (let color of colors) {
        const currentColor = document.querySelector(`.${color}`);
        // pause execution for 500 millisecond
        await delay(500);
        // set background to new color
        currentColor.style.backgroundColor = colorObj[color].new;
        await delay(600);
        // set background to old color
        currentColor.style.backgroundColor = colorObj[color].current;
        await delay(600);
    }
    // set flag to indicate the game is no longer generating path
    isPathGenerating = false;
}

// function to end the game and show final score

const endGame = () => {
    resultEl.innerHTML = `<span> You Score : </span> ${score}`;
    resultEl.classList.remove("hide");
    containerEl.classList.remove("hide");
    wrapperEl.classList.add("hide");
    startBtn.innerText = "Play Again";
    startBtn.classList.remove("hide");
};

// function to reset game after ending

const resetGame = () => {
    score = 0;
    clickCount = 0;
    randomColors = [];
    isPathGenerating = false;
    wrapperEl.classList.remove("hide");
    containerEl.classList.add("hide");


}


// instructions button
const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal')

const openModalFunction = () => {
    modal.style.display = 'block'
}

// close about the game icon
const close = document.getElementById('close')
openBtn.addEventListener('click', openModalFunction)
const closeModalFunction = () => {
    modal.style.display = 'none'
}
close.addEventListener('click', closeModalFunction)