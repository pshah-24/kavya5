onload = () =>{
        document.body.classList.remove("container");
};

document.addEventListener("DOMContentLoaded", function () {
        const noButton = document.getElementById("no-btn");
    
        noButton.addEventListener("mouseover", function () {
            const randomX = Math.random() * (window.innerWidth - 100);
            const randomY = Math.random() * (window.innerHeight - 50);
    
            noButton.style.position = "absolute";
            noButton.style.left = randomX + "px";
            noButton.style.top = randomY + "px";
        });
   });

let myAudio = new Audio("img/Floricienta.mp3"); // Create an Audio object with the file 'Ceylon.mp3'

window.onload = function() {
    setInterval(GameLoop, 1000 / 10); // Start the game loop when the window is loaded
};

function GameLoop() {
    if (myAudio.paused) { // Check if the audio is paused
        myAudio.play(); // If paused, play the audio
    }
}