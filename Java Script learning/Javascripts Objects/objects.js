var person = {
	name : "meha",
	age : 25,
	city : "Seattle"
};


// dot notation wont work with space or string starting with a no.
console.log(person.name);
console.log(person["age"]);

person["age"] +=1;

person.city = "London";

// other notations 

var person1 = {};

person1.name = "Amit";
person1.age = 27;
person1.city = "Seattle";

var person3 = new Object();

person3.name = "scooby";
person3.age = 32;
person3.city = "Boston";

// ojects holding various datas and another objects 

var obj1 = {

	age:23,
	city:"san Francisco",
	isHungry : true,
	friends : ["harry","Emma"],
	pet : {

		name :"Rusty",
		age : 5,
		color:"black"
	}
};


obj1.color  = "purple";

obj1.age = 33;


// ojects under an array

var posts = [
	{
		title : "harry potter book",
		author : "J K Rowling",
		comments : ["Awsome","Terrible"]
	},

	{
		title : "Twilight",
		author : "Stephenie Meyer",
		comments : ["<3","Terrible"]

	}

];

console.log(posts[0].title);
console.log(posts[0].comments);

var prop = "color";

obj1[prop] = "green";

var someobject = {

	friends : [
	{name : "harry potter"},
	{name : "emma"},
	{name : "ron"}
	],

	color : "baby blue",
	isEvil : true
};

console.log(someobject.friends[0].name);


var movies = [
	{
		title : "In Bruges",
		hasWatched : true,
		rating : 5
	},

	{
		title : "Frozen",
		hasWatched : false,
		rating : 4.5

	},
	{
		title : "Mad Max Fury Road",
		hasWatched : true,
		rating : 5
	},
	{
		title : "Les Miserable",
		hasWatched : false,
		rating : 3.5
	}

]

function bulidString(mov)
{
	var result = "You have";

	if(mov.hasWatched === true)
	{
		console.log(result + " watched " + "\" " + (mov.title)+ "\"" + " - " + (mov.rating) + " stars" );
	}else
	{
		console.log(result + " not seen " + "\" " + mov.title + "\" " + " - " + mov.rating + " stars" );
	}

}
movies.forEach(function(mov){

	bulidString(mov);

});


var obj = {

	name : "marry",
	color : "pink",

	func : function(x,y){
		return x + y;
	}
}

// underscore.js 
// to use functions written by others 
// eg : _.find()

var comments  = {};

comments.data = ["awsome", "hello","bbyee", "terrible"];

// "this" keyword
comments.print = function ()
{
	this.data.forEach(function(el)
	{
		console.log(el);
	});
}