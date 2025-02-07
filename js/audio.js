let myAudio = new Audio("img/Floricienta.mp3"); // Create an Audio object with the file 'Ceylon.mp3'

window.onload = function() {
    setInterval(GameLoop, 1000 / 10); // Start the game loop when the window is loaded
};

function GameLoop() {
    if (myAudio.paused) { // Check if the audio is paused
        myAudio.play(); // If paused, play the audio
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no-btn");

    noButton.addEventListener("mouseover", function () {
        // Generate random positions
        let x = Math.random() * (window.innerWidth - noButton.clientWidth);
        let y = Math.random() * (window.innerHeight - noButton.clientHeight);

        // Apply new position
        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
});
