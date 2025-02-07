let myAudio = new Audio("https://drive.google.com/file/d/1sAPeDI11AXnZG2BaVIsttsY3Qq1rOYc9/view?usp=sharing"); // Create an Audio object with the file 'Ceylon.mp3'

window.onload = function() {
    setInterval(GameLoop, 1000 / 10); // Start the game loop when the window is loaded
};

function GameLoop() {
    if (myAudio.paused) { // Check if the audio is paused
        myAudio.play(); // If paused, play the audio
    }
}
