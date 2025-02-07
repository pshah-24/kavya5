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