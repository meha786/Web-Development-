function kebabToSnake1(str)
{
	var newstr =  str.replace(/-/g,"_");
	return newstr;
}



function kebabToSnake(str)
{

	//"hello-world to hello_world"

	var newstr = "";
	for(var i=0;i<str.length;i++)
	{
		if(str[i]=="-")
		{

			newstr = newstr + "_";
		}else{

			newstr = newstr + str[i];
		}
		

	}

	return newstr;
}



function factorial(x)
{
	var fact = 1;
	var result = 1;
	while(fact<=x)
	{
		result = result * fact;		
		fact++;
	}
	return result;
}


function iseven(x){

	return x%2===0;

/*
	if(x%2==0) // mistake x%2 === 0
	{
		return true;
	}

	return false;*/

}



function test(x,y)
{
	return y-x;
}

// 2 ways of writing a function 

//function expression

var capitalize1 = function(str)
{
		return str.charAt(0).toUpperCase() + str.slice(1);
}

//function declaration
function capitalize(str)
{
	if(str === "number")
	{
		return "thats not a string!";
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";

var capital = capitalize(city);



function squareReturn(num)
{
	return num*num;
}



function greet(person1,person2,person3)
{
	console.log("hi : " +person1);
	console.log("hi : " +person2);
	console.log("hi : " +person3);
}
function square(num)
{
	console.log(num*num);
}

function doSomething(){

	console.log("hello world");
}


