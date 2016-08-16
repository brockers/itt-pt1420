var canvas;
var ctx;
var ball = {x:10, y:10};
var pos = {x:200, y:200};
var vel = {x:20, y:20};

function startScript(){
	canvas = document.querySelector("canvas");
	ctx = canvas.getContext("2d");
	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	var loop = function(){
		
		if(pos.x <= 0 || pos.x > canvas.width-ball.x){ vel.x *= -1;}
		if(pos.y <= 0 || pos.y > canvas.height-ball.y){ vel.y *= -1;}
		
		pos.x = pos.x + vel.x;
		pos.y = pos.y + vel.y;
		
		ctx.clearRect(0,0, canvas.width, canvas.height);
		ctx.fillRect(pos.x, pos.y, ball.x, ball.y);
	}
	
	setInterval(loop, 50);
}