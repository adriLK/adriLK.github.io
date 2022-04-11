function createGraph() {

	var fruit = [
		{name:"Apple", quantity:20, color:"red"},
		{name:"Orange", quantity:10, color:"orange"},
		{name:"Banana", quantity:15, color:"yellow"},
		{name:"Kiwi", quantity:3, color:"green"},
		{name:"Blueberry", quantity:5, color:"blue"},
		{name:"Grapes", quantity:8, color:"purple"}
	];

	var canvas = document.getElementById("mycanvas");
	var context = canvas.getContext("2d");

	var maxHeight = 0;
	var bars = fruit.length;

	var width = canvas.width / bars;

	for (let i = 0; i < bars; i++) {
		if (fruit[i].quantity > maxHeight) maxHeight = fruit[i].quantity;
	}

	for (let i = 0; i < bars; i++) {
		context.fillStyle = fruit[i].color;
		context.fillRect(i*width, canvas.height - canvas.height * fruit[i].quantity / maxHeight, width, canvas.height * fruit[i].quantity / maxHeight);

		context.fillStyle = "black";
		context.textAlign = "center";
		context.font="20px arial";
		context.fillText(fruit[i].quantity,(i+0.5)*width,canvas.height - 40);
		context.fillText(fruit[i].name,(i+0.5)*width,canvas.height - 20);
	}



}

document.addEventListener('DOMContentLoaded', createGraph);
