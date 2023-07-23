var randomNumber1 = Math.floor(Math.random(0)*6+1);
var randomNumber2 = Math.floor(Math.random(0)*6+1);

var randomDiceImg1 = "./images/dice"+randomNumber1+".png"
var randomDiceImg2 = "./images/dice"+randomNumber2+".png"


var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');


img1.setAttribute('src',randomDiceImg1);
img2.setAttribute('src',randomDiceImg2);


if(randomNumber1 == randomNumber2){
    document.querySelector('h1').innerHTML = 'Draw'
}
else if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML = 'player 1 wins'
}
else if(randomNumber1<randomNumber2){
    document.querySelector('h1').innerHTML = 'player 2 wins'
}




