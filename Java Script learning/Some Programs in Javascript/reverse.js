

var array1 = [1,2,3,4,5,6,7,8];
var array2 = ["a","b","c","d"];

var str = array2;

function reverse(str)
{
	for(var i=str.length-1;i>=0;i--)
	{
		console.log(str[i]);
	}

}

var arr = [1,1,2,1,8,1];
var arr2 = ["a","ab","a","a"];
function isUniform(str)
{


	//issue with the forEach loop

	/*var first = arr2[0];
	arr2.forEach(function(element)
	{
		if(element !== first)
		{
			console.log(element);
			console.log(first);
			return false;
		}

	});*/

	
	for(var i=0;i<str.length-2;i++)
	{
		if(str[i] !== str[i+1])
		{
			console.log(str[i]);
			console.log(str[i+1]);
			return false;
		}
	}

	return true;
}

function sumArray(arr)
{
	var total = 0;
	for(var i=0;i<arr.length;i++)
	{
		total = total+arr[i];
	}
	return total;
}

var arr3 = [1,2,20,-20,9];

function maximum(arr)
{
	var max = arr[0];
	
	for(var i=1;i<arr.length;i++)
	{
		if(max < arr[i])
		{
			max = arr[i];
		}
	}
	console.log(max);
	return max;

}