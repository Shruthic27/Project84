var myCanvas = document.getElementById("canvas1")
ctx = myCanvas.getContext("2d")
var carwidth = 100
var carheight = 90
var carx = 200
var cary = 300
var bg = "racing.jpg"
var c = "car1.png"
function add() {
    background_image = new Image()
    background_image.onload = bgo;
    background_image.src = bg
    car1_image= new Image()
    car1_image.onload = co;
    car1_image.src = c
}
var carwidth2 = 100
var carheight2 = 90
var carx2 = 200
var cary2 = 300
var bg2 = "racing.jpg"
var c2 = "15-155064_race-car-clipart-above-bird-eye-view-car.jpg"
function bgo() {
    ctx.drawImage(background_image, 0, 0, canvas1.width, canvas1.height)
}
function co() {
    ctx.drawImage(car1_image, carx, cary, carwidth, carheight)
}
function co2() {
    ctx.drawImage(car2_image, carx2, cary, carwidth, carheight)
}
window.addEventListener("keydown", mykeydown)
function mykeydown(e) {
    keypress = e.keyCode
    if (keypress == 38) {
        console.log("up")
    }
    if (keypress == 40) {
        console.log("down")
    }
    if (keypress == 37) {
        console.log("left")
    }
    if (keypress == 39) {
        console.log("right")
    }
    keypress = e.keyCode
    if (keypress == 87) {
        console.log("up")
    }
    if (keypress == 83) {
        console.log("down")
    }
    if (keypress == 65) {
        console.log("left")
    }
    if (keypress == 68) {
        console.log("right")
    }
}
