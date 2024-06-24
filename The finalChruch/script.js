const startButton = document.querySelector(".startButton")
const part0 = document.querySelector(".part0")
const part1 = document.querySelector(".part1")
const p1p1 = document.querySelector(".p1p1")
const p1p2 = document.querySelector(".p1p2")
const p1p3 = document.querySelector(".p1p3")
const p1p4 = document.querySelector(".p1p4")
const p1p5 = document.querySelector(".p1p5")
const p1p6 = document.querySelector(".p1p6")
const part2 = document.querySelector(".part2")
const GulaDoor = document.querySelector(".p1p6 img:nth-of-type(1)")
const doorschamber = document.querySelector(".p1p4 img:nth-of-type(3)")
const doorschamberBack = document.querySelector(".p1p6 img:nth-of-type(4)")
const pedestalBack = document.querySelector(".p1p5 img:nth-of-type(3)")
const pedestal = document.querySelector(".p1p4 img:nth-of-type(1)")
const chruchCross = document.querySelector(".p1p3 img")
const chruchCrossBack = document.querySelector(".p1p4 img:nth-of-type(4)")
const outsideDoorLock = document.querySelector(".p1p2 img")
const outsidewalk = new Audio("audio/Walking on Grass.mp3")
const outsidenight = new Audio("audio/Outside Night.mp3")
const voicep1p1 = new Audio("audio/voicep1p1.m4a")
const heavydoor = new Audio("audio/Opening Closing Heavy Door.mp3")
const indoorAmbiance = new Audio("audio/Wood Beam Creak Far.mp3")
let dialogeTimer = 4

function startgame(){
    part0.classList.add("hidden")
    part1.classList.remove("hidden")
    dialogep1p1()
    

}

startButton.addEventListener("click", startgame)


function dialogep1p1(){

    let timer = setInterval(function(){
        dialogeTimer --;
        if(dialogeTimer == 3){
            outsidewalk.play()
            outsidenight.play()
            outsidenight.loop = true
        }
        if(dialogeTimer == 0){
            p1p1.classList.remove("hidden")
            voicep1p1.play()
        }   
        if (dialogeTimer == -8){
            p1p1.classList.add("hidden")

        } 
        if (dialogeTimer == -14){
            outsidewalk.pause()
            p1p2.classList.remove("hidden")
        } 

    }, 1000)
}


outsideDoorLock.addEventListener("click", outsideDoorOpen)
chruchCrossBack.addEventListener("click", outsideDoorOpen)
function outsideDoorOpen (){
    heavydoor.play()
    indoorAmbiance.play()
    indoorAmbiance.loop = true
    p1p2.classList.add("hidden")
    p1p3.classList.remove("hidden")
    outsidenight.pause()
    p1p4.classList.add("hidden")
}

pedestalBack.addEventListener("click", TochruchCross)
chruchCross.addEventListener("click", TochruchCross)
doorschamberBack.addEventListener( "click", TochruchCross)

function TochruchCross(){
    p1p3.classList.add("hidden")
    p1p5.classList.add("hidden")
    p1p6.classList.add("hidden")
    p1p4.classList.remove("hidden")
}


pedestal.addEventListener("click", ToPedestal)

function ToPedestal(){
    p1p4.classList.add("hidden")
    p1p5.classList.remove("hidden")
}

const Gulakey = document.querySelector(".p1p5 img:nth-of-type(1)")
Gulakey.addEventListener("click", () => {
    GotGulakey = true
    Gulakey.classList.add("hidden")
})
const Papers = document.querySelector(".p1p5 img:nth-of-type(2)")
Papers.addEventListener("click", () => {
    GotPapers = true
    Papers.classList.add("hidden") /* dont forget to add animation for pickup */
})

let GotGulakey = false
let GotPapers = false

doorschamber.addEventListener("click", toDoorschamber)

function toDoorschamber(){
    p1p4.classList.add("hidden")
    p1p6.classList.remove("hidden")
}

GulaDoor.addEventListener("click", GulaKeyCheck)
GulaDoor.addEventListener("click", GulaEnter)
GulaLock = true

function GulaEnter(){
    if (GulaLock == false){
        p1p6.classList.add("hidden")
        part2.classList.remove("hidden")
    }
}
function GulaKeyCheck(){
    if (GotGulakey == true){
        GulaDoor.classList.add("hidden")
        GulaLock = false

        
    }
}


const GulaTimer = document.querySelector(".p2p1 span");
const DamageScreen = document.querySelector(".damagescreen");

let livesLeft = 10;

function start15SecondTimer() {
    let timeLeft = 15; // Start with 15 seconds

    let timer = setInterval(function() {
        GulaTimer.textContent = timeLeft; // Update the remaining time display
        timeLeft--; // Decrease the time left by 1 second
        DamageScreen.classList.add("hidden"); // Hide the damage screen initially

        if (timeLeft < 0) { // When the timer reaches 0
            clearInterval(timer); // Stop the timer
            console.log("Time's up!"); // Log a message or trigger an action

            livesLeft--; // Decrease lives by 1
            console.log(livesLeft); // Log the remaining lives
            Damage(); // Call the Damage function

            if (livesLeft > 0) { // Restart the timer if there are lives left
                start15SecondTimer();
            } else {
                console.log("Game over!"); // Handle game over scenario
            }
        }
    }, 1000); // Set the interval to 1 second (1000 milliseconds)
}

function Damage() {
    DamageScreen.classList.remove("hidden");
}

// Start the timer
/* start15SecondTimer() */; /* when done making the bossfight put this the gula keycheck function */


const Butcherknife = document.querySelector(".ButcherKnife")

Butcherknife.addEventListener("click", function () {
    Butcherknife.classList.add("hidden")
})

const images = document.querySelectorAll(".Gula img");

images.forEach((img) => {
    img.addEventListener("click", () => {
        // Change the src attribute of the clicked image
        if (img.src.includes("Tekengebied%2016.png")){
        img.classList.add("hidden");

        }   
        else{
            Damage()
            setTimeout(() => {
                DamageScreen.classList.add("hidden");
            }, 500); // Delay in milliseconds before hiding the DamageScreen
        }


    });
});