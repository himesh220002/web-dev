
var randomNo1 = Math.floor(Math.random()*6) + 1;
var randomDiceImg = "dice" + randomNo1 + ".png";
var randomImgSource = "images/" +randomDiceImg; 

var image1 = document.querySelector(".img1");
image1.setAttribute("src",randomImgSource);

var randomNo2 = Math.floor(Math.random()*6) + 1;
var randomImgSource2 = "images/dice" + randomNo2 + ".png";
document.querySelector(".img2").setAttribute("src",randomImgSource2);

if(randomNo1 > randomNo2){
    document.querySelector(".container h1").innerHTML = "🚩Player 1 wins";
}
else if(randomNo1 < randomNo2){
    document.querySelector(".container h1").innerHTML = "Player 2 wins🚩";
}
else{
    document.querySelector(".container h1").innerHTML = "Draw!";
}