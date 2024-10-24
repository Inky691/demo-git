"use strict";


document.getElementById("img1").addEventListener("mouseover", onMouseOver, false);
document.getElementById("img2").addEventListener("mouseover", onMouseOver, false);
document.getElementById("img3").addEventListener("mouseover", onMouseOver, false);
document.getElementById("img4").addEventListener("mouseover", onMouseOver, false);
document.getElementById("img5").addEventListener("mouseover", onMouseOver, false);

document.getElementById("img1").addEventListener("mouseleave", onMouseLeave, false);
document.getElementById("img2").addEventListener("mouseleave", onMouseLeave, false);
document.getElementById("img3").addEventListener("mouseleave", onMouseLeave, false);
document.getElementById("img4").addEventListener("mouseleave", onMouseLeave, false);
document.getElementById("img5").addEventListener("mouseleave", onMouseLeave, false);

document.getElementById("img1").addEventListener("click", onClick, false);
document.getElementById("img2").addEventListener("click", onClick, false);
document.getElementById("img3").addEventListener("click", onClick, false);
document.getElementById("img4").addEventListener("click", onClick, false);
document.getElementById("img5").addEventListener("click", onClick, false);

let smallImage = document.getElementById("smallImage");
let bigImage = document.getElementById("bigImage");

function onMouseOver(event) {
    let currentImg = event.target;
    if (currentImg.id == "img1") {
        smallImage.src = "images/vignettes/img1.jpg";
        currentImg.className = "color-on";
    }
    else if (currentImg.id == "img2") {
        smallImage.src = "images/vignettes/img2.jpg";
        currentImg.className = "color-on";
    }
    else if (currentImg.id == "img3") {
        smallImage.src = "images/vignettes/img3.jpg";
        currentImg.className = "color-on";
    }
    else if (currentImg.id == "img4") {
        smallImage.src = "images/vignettes/img4.jpg";
        currentImg.className = "color-on";
    }
    else if (currentImg.id == "img5") {
        smallImage.src = "images/vignettes/img5.jpg";
        currentImg.className = "color-on";
    }
}

function onClick(event) {
    let currentImg = event.target;
    if (currentImg.id == "img1") {
        bigImage.src = "images/img1.jpg";

    }
    else if (currentImg.id == "img2") {
        bigImage.src = "images/img2.jpg";
    }
    else if (currentImg.id == "img3") {
        bigImage.src = "images/img3.jpg";
    }
    else if (currentImg.id == "img4") {
        bigImage.src = "images/img4.jpg";
    }
    else if (currentImg.id == "img5") {
        bigImage.src = "images/img5.jpg";
    }
}

function onMouseLeave(event) {
    let currentImg = event.target;
    if (currentImg.id == "img1") {
        currentImg.className = "color-off";
    }
    else if (currentImg.id == "img2") {
        currentImg.className = "color-off";
    }
    else if (currentImg.id == "img3") {
        currentImg.className = "color-off";
    }
    else if (currentImg.id == "img4") {
        currentImg.className = "color-off";
    }
    else if (currentImg.id == "img5") {
        currentImg.className = "color-off";
    }
}