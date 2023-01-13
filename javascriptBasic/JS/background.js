const images = ["0.png","1.png","2.png"];
const imageNum = Math.floor(Math.random()*images.length);
const chosenImage = images[imageNum];

const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImage}`;
document.body.appendChild(bgImg);