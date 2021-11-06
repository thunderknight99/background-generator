var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// Functions
function getRandomColor(){
    var characters = "0123456789ABCDEF";
    var color = '#';
    for (var i=0; i<6; i++){
        color += characters[Math.floor(Math.random() * characters.length)];
    }
    return color;
}

function mixGradient(){
    var gradientString = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")" ;
    body.style.background = gradientString;
    h3.textContent = gradientString + ";"
}

// Function Calls
mixGradient();

// Event Listeners
color1.addEventListener("input", mixGradient);
color2.addEventListener("input", mixGradient);

var randomBtn = document.querySelector(".randomBtn");
randomBtn.addEventListener("click", function(){
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    mixGradient();
});