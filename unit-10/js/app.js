var ctx;
var canvas;
var ball = {x:10, y:10, posx:5, posy:5, velx:2, vely:2};
var paddle ={x:20, y:200, posx: (window.innerWidth / 2), posy: (window.innerHeight /2)-100};
var upArrow = 38;
var downArrow = 40;

function movePaddle(e){
	if( e.keyCode === upArrow) {
		paddle.posy += 5;
	} else if (e.keyCode === downArrow){
		paddle.posy -= 5;
	}
}

function stopPaddle(e){
	keyState[e.keyCode] = false;
}

function resize(){
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		paddle.posx = (window.innerWidth / 2);
		paddle.posy = (window.innerHeight /2)-100;
}

function startScript(){
	canvas = document.querySelector("canvas");
	resize();
	ctx = canvas.getContext("2d");
	
	var loop = function(){
		
		/* If we hit the wall */
		if(ball.posx <= 0 || ball.posx > (canvas.width-ball.x) ){ ball.velx *= -1;}
		if(ball.posy <= 0 || ball.posy > (canvas.height-ball.y) ){ ball.vely *= -1;}
		/* If we hit the paddle */
		if((paddle.posx <= (ball.posx + ball.x)) && ((paddle.posx + paddle.x) >= ball.posx)) { 
			if(((ball.posy + ball.y) >= paddle.posy ) && (ball.posy <= (paddle.posy + paddle.y))) { 
				ball.velx *= -1; 
			} 
		}
		
		ball.posx = ball.posx + ball.velx;
		ball.posy = ball.posy + ball.vely;
		
		ctx.clearRect(0,0, canvas.width, canvas.height);
		ctx.fillRect(ball.posx, ball.posy, ball.x, ball.y);
		ctx.fillRect(paddle.posx, paddle.posy, paddle.x, paddle.y);
	}
	
	setInterval(loop, 1);
}