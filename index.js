// Dice Rolling
    let randomNumber1 = Math.floor(((Math.random()*6) + 1));
    let diceImage1 = "images/dice" + randomNumber1 + ".png"
    document.getElementsByClassName("img1")[0].setAttribute("src", diceImage1);

    let randomNumber2 = Math.floor(((Math.random()*6) + 1)); 
    let diceImage2 = "images/dice" + randomNumber2 + ".png"
    document.getElementsByClassName("img2")[0].setAttribute("src", diceImage2);

//Title
if(randomNumber1 > randomNumber2){
    //Title
    document.querySelector("h1").innerHTML = "🏁 Player 1 wins!"
}else if(randomNumber2 === randomNumber1){
    //Title
    document.querySelector("h1").innerHTML = "Draw"
}else {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🏁"
}
