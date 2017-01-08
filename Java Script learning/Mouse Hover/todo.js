alert("Javascript Connected");

var firstLi = document.querySelector("li");


var lis = document.querySelectorAll("li");

for(var i=0;i<lis.length;i++){

	lis[i].addEventListener("mouseover",function(){
	//	this.style.background = "purple";

	this.classList.add("selected");
	});

	lis[i].addEventListener("mouseout",function(){
	//	this.style.background = "white";

	this.classList.remove("selected");
	});

	lis[i].addEventListener("click",function(){
		this.classList.toggle("done");
	});
}



firstLi.addEventListener("mouseover",function(){

	this.style.color = "green";

	console.log("mouseover");
});

firstLi.addEventListener("mouseout",function(){

	this.style.color = "black";

	console.log("mouseout");
});