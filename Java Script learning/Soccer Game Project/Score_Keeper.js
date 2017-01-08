var p1Button = document.querySelector("#p1");
var p1Display = document.querySelector("#p1Display");

var p2Button  = document.getElementById("p2");
var p2Display = document.querySelector("#p2Display");


var reset = document.getElementById("reset");

var winningScore = 0;

var gameOver = false;

var input = document.querySelector("input");
var winScoreDisplay = document.querySelector("p span");


var p1Score = 0;
var p2Score = 0;


p1Button.addEventListener("click",function() {

	if(!gameOver)
	{
		p1Score++;
		p1Display.textContent = p1Score;

		if(p1Score===winningScore)
		{
			gameOver = true;
			p1Display.classList.add("winner");
			console.log("Game is Over!");
			//alert("Game is Over!");
		}
		

	}
	

});



p2Button.addEventListener("click",function() {

	if(!gameOver)
	{
		p2Score++;
		p2Display.textContent = p2Score;
		if(p2Score === winningScore)
		{
			gameOver = true;
			p2Display.classList.add("winner");
			console.log("Game is Over!");
			//alert("Game is Over!");
		}

	}
	
});


reset.addEventListener("click",function(){

	reset1();

});


function reset1(){

	p1Score = 0;
	p2Score = 0;
	p1Display.textContent  = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");

	gameOver = false;


}


input.addEventListener("click",function(){
	winScoreDisplay.textContent = input.value;

	winningScore = Number(input.value);

	reset1();

});