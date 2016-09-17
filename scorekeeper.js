// alert("CONNECTED!");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var reset = document.querySelector("#reset");
// var h1 = document.querySelector("h1");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");


p1Button.addEventListener("click", function(){
	// console.log(p1Button);
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			console.log("game over!");
			gameOver = true;
		}
		console.log(p1Score);
		// h1.textContent = p1Score + " to " + p2Score
		p1Display.textContent = p1Score;
}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			console.log("game over!");
			gameOver = true;
			}

	console.log(p2Score);
	p2Display.textContent = p2Score;
}
});





