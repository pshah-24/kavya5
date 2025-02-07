onload = () =>{
        document.body.classList.remove("container");
};

// document.addEventListener("DOMContentLoaded", function () {
//         const messages = [
//             "You make my heart bloom! 🌸",
//             "You're my sunshine on a cloudy day ☀️",
//             "Every petal reminds me of you 🌺",
//             "You're the flower in my garden of life 🌼",
//             "Will you be my Valentine? ❤️"
//         ];
        
//         let index = 0;
//         const slideshowText = document.getElementById("slideshow-text");
    
//         function changeText() {
//             index = (index + 1) % messages.length; // Loop through messages
//             slideshowText.style.opacity = 0; // Fade out
//             setTimeout(() => {
//                 slideshowText.textContent = messages[index];
//                 slideshowText.style.opacity = 1; // Fade in
//             }, 500);
//         }
    
//         setInterval(changeText, 7000); // Change every 7 seconds
//     });