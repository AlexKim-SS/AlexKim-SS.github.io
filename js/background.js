const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpg", "4.jpg", "5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");
//bgImage.src = `img/${chosenImage}`;
// imgContainer = document.querySelector(".imgContainer");
// imgContainer.appendChild(bgImage);

document.addEventListener("DOMContentLoaded", () => {
    document.body.style.background=`url(img/${chosenImage}) no-repeat center center fixed`;
    document.body.style.backgroundSize="cover";
});

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});