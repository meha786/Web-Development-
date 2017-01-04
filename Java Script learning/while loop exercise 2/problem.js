alert("javascript connected");




var ans = prompt("are we there yet?");

while(ans!=="yes" && ans!=="yeah")
{
	var ans = prompt("are we there yet?");
}

alert("yay, we finally made it");


var ans2 = prompt("are we there yet?");

while(ans2.indexOf("yes") == -1)
{
	var ans2 = prompt("are we there yet?");
}

alert("yay, we finally made it");


var count = -10;

while(count <= 19)
{
	console.log(count);
	count++;
}

console.log("==========================");
var count1 = 10;

while(count1 <= 40)
{
	if(count1%2===0)
	{
		console.log(count1);
	}
	
	count1++;
}


console.log("==========================");
var count2 = 300;

while(count2 <= 333)
{
	if(count2%2!==0)
	{
		console.log(count2);
	}
	
	count2++;
}

console.log("==========================");
var count3 = 5;

while(count3 <= 50)
{
	if(count3%3===0 && count3%5===0)
	{
		console.log(count3);
	}
	
	count3++;
}
