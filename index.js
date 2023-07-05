alert("Click OK for result");
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
document.querySelector(".img1").classList.add("c"+randomNumber1);
document.querySelector(".img2").classList.add("c"+randomNumber2);

if(randomNumber1>randomNumber2)
    document.querySelector("h1").textContent="first player is winner";
else if(randomNumber1>randomNumber2)
    document.querySelector("h1").textContent="second player is winner";
else
    document.querySelector("h1").textContent="Its a tie";
