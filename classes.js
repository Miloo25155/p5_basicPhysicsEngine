function Ball(startingPos, _radius){
	if(startingPos){
		this.pos = startingPos;
	} else{
		this.pos = p5.Vector.random2D();
	}
	
	this.vel = createVector();
	this.acc = createVector();
<<<<<<< HEAD
	this.gravity = createVector(0.01, 0);
	this.col = (255, 255, 255);
=======
	this.gravity = createVector(0, 0.5);
>>>>>>> 8c6edcf296e75ed053bdb60f7ef4859c1110f71d
	if(_radius){
		this.r = _radius;
	} else{
		this.r = 25;
	}
<<<<<<< HEAD
=======
	this.col = 255;
>>>>>>> 8c6edcf296e75ed053bdb60f7ef4859c1110f71d
	
	this.applyForce = function(force){
		this.acc.add(force);
	}

	this.update = function(){
<<<<<<< HEAD
		this.applyForce(this.gravity);
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);

		if(this.pos.x > width){
			this.pos.x = 0;
		}
		if(this.pos.x < 0){
			this.pos.x = width;
		}
		if(this.pos.y > height){
			this.pos.y = 0;
		}
		if(this.pos.y < 0){
			this.pos.y = height;
		}
=======
		//this.applyForce(this.gravity);
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
>>>>>>> 8c6edcf296e75ed053bdb60f7ef4859c1110f71d
	}

	this.show = function(){
		push();
		rotate(this.vel.heading());
<<<<<<< HEAD
		fill(this.col);
=======
		fill(this.col );
>>>>>>> 8c6edcf296e75ed053bdb60f7ef4859c1110f71d
		stroke(255);
		ellipse(this.pos.x, this.pos.y, 2*this.r);
		pop();
	}

	this.isMouseOn = function(){
		var dis = dist(mouseX, mouseY, this.pos.x, this.pos.y);
		if( dis * dis <= (this.r)*(this.r)){
			return true;
		}
		else{
			return false;
		}
	}
}

function Wall(position, _width, _height, _color){
	this.pos = position;
	this.w = _width;
	this.h = _height;
	this.col = _color;

	this.show = function(){
		fill(this.col);
		stroke(0);
		rect(this.pos.x, this.pos.y, this.w, this.h );
	}
}
