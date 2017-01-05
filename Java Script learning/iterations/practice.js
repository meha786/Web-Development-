var colors = ["red", "blue","green","yellow"];

colors.forEach(function(color){

	console.log(color);
});

function printColor(pcolor)
{
	console.log("**********");
	console.log(pcolor);
	console.log("**********");
}

colors.forEach(printColor);