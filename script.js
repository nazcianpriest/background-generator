var firstColor = document.querySelector(".color1"); // select by class name 
var secondColor = document.querySelector(".color2");
var body = document.getElementById("gradient");
var showRgbNumbers = document.querySelector("h3")

function changingColor() {
    body.style.background= "linear-gradient(to right,"+firstColor.value+ ","+ secondColor.value +")";
    showRgbNumbers.textContent = body.style.background +";"; // showing rgb detail on screen
}

firstColor.addEventListener("input" , changingColor)


secondColor.addEventListener("input" , changingColor)




















// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");

// function setGradient() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);