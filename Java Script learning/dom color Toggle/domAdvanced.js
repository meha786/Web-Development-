
//alert("Javascript Connected");
var button = document.querySelector("button");


// COLOR TOGGLE BY CSS ADDING CLASS
button.addEventListener("click",function(){

	document.body.classList.toggle("purple");


	});

// COLOR TOGLE BY JAVASCRIPT
//var isPurple = false;
/*
button.addEventListener("click",function(){

	if(isPurple)
	{
		document.body.style.background = "white";
		//isPurple = "false";
	}else{
		document.body.style.background = "purple";
		//isPurple = "true";
	}

	isPurple = !isPurple;
	
}) ;

*/
/*
var h1 = document.querySelector("h1");

h1.addEventListener("click", function(){
	document.h1.style.color = "pink";
});
*/