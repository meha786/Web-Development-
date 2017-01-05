

// 2-D Array

var groups = [
				[1,2,3],
				[4,5,6],
				[7,8,9]
			 ];
console.log(groups[2][0]);
//shift/unshift

var colors1 = ["green","red","yellow"];

// add element in the front
colors1.unshift("red");

// remove element from the front

colors1.shift();

//indexOf

colors1.indexOf("yellow");

//slice

var fruits = ["lemon","watermelon","orange","grapes","apple"];

var result = fruits.slice(1,3);

//push/pop

var colors = ["green","red","yellow"];

colors.push("indigo");

colors.pop();




function frnds()
{
	var friends = ["emma","harry","ron"];
	var newArray = new Array();
	console.log(friends[0] + " <3 " + friends[2]);

	friends[4] = "joe";

	for(var i=0; i< friends.length ;i++)
	{
		console.log(friends[i]);
	}
}


