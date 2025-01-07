const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
   //Generate random number between 0 - 3  colors[0] 
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    //The math random function generates a number between
    //0 and 0.9 so it cannot generate a number that is an integer
    //so to fix this. Math.floor function is used multiplied with 
    //the product between Math.random() and colors.length
    return Math.floor(Math.random() * colors.length);
}