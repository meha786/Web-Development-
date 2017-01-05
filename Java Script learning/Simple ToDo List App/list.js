var todos = ["buy new shoes"];

var input = prompt("What would you like to do");

while(input !== "quit")
{
	if(input === "list")
	{

		listToDos();
		//console.log(todos);
	} else if(input === "new")
	{
		addToDos();
	} else if(input === "delete")
	{
		deleteToDos();
	}

	input = prompt("What would you like to do");

}

console.log("OK, Quit the App");


function listToDos()
{
	console.log("************");
	todos.forEach(function(todo, i)
	{
		console.log(i + " : " +todo);
	});
	console.log("************");

}

function addToDos()
{
	var newToDo = prompt("Enter new todo");
	todos.push(newToDo);
	console.log("added todo");
}

function deleteToDos()
{
	var index = prompt("enter index of item to be deleted");
	todos.splice(index,1);
	console.log("deleted todo");

}