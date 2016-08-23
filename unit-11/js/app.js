var ctx;
var canvas;
var ball = {x:10, y:10, posx:5, posy:5, velx:2, vely:2};
var paddle ={x:200, y:10, posx: 0, posy: 0};
var target = {icon: "img/heli.png", x: -150, y: 50, velx: 2};
var leftArrow = 37;
/* var upArrow = 38; */
var rightArrow = 39;
/* var downArrow = 40; */
var targetImg = new Image();

function movePaddle(e){
	
	if( e.keyCode === leftArrow) {
		if(paddle.posx <= (0 + ball.x)) { return; }
		paddle.posx -= (window.innerWidth / 10);
	} else if (e.keyCode === rightArrow){
		if((paddle.posx + paddle.x) >= (window.innerWidth - ball.x)){ return; }
		paddle.posx += (window.innerWidth / 10);
	}
}

function resize(){
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		paddle.posx = (window.innerWidth / 2)-100;
		paddle.posy = (window.innerHeight - 50);
}

function startScript(){
	canvas = document.querySelector("canvas");
	resize();
	ctx = canvas.getContext("2d");
	targetImg.src = target.icon;
	
	var loop = function(){
		
		/* If we hit the wall */
		if(ball.posx <= 0 || ball.posx > (canvas.width-ball.x) ){ ball.velx *= -1;}
		if(ball.posy <= 0 || ball.posy > (canvas.height-ball.y) ){ ball.vely *= -1;}
		/* If we hit the paddle */
		if(((ball.posy + ball.y) >= paddle.posy ) && (ball.posy <= (paddle.posy + paddle.y))) {
			if((paddle.posx <= (ball.posx + ball.x)) && ((paddle.posx + paddle.x) >= ball.posx)) { 
				ball.vely *= -1; 
			} 
		}
		
		/* Move the ball */
		ball.posx = ball.posx + ball.velx;
		ball.posy = ball.posy + ball.vely;
		/* Move the target */
		if(target.x > (canvas.width + 250)) { target.x = -150; }
		else { target.x = target.x + target.velx; }
		
		
		ctx.clearRect(0,0, canvas.width, canvas.height);
		ctx.fillRect(ball.posx, ball.posy, ball.x, ball.y);
		ctx.fillRect(paddle.posx, paddle.posy, paddle.x, paddle.y);
		ctx.drawImage(targetImg, target.x, target.y);
	}
	
	setInterval(loop, 1);
}