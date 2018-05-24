function Ball(startingPos, _radius){
	if(startingPos){
		this.pos = startingPos;
	} else{
		this.pos = p5.Vector.random2D();
	}
	
	this.vel = createVector();
	this.acc = createVector();
	this.gravity = createVector(0, 0.5);
	if(_radius){
		this.r = _radius;
	} else{
		this.r = 25;
	}
	this.col = 255;
	
	this.applyForce = function(force){
		this.acc.add(force);
	}

	this.update = function(){
		//this.applyForce(this.gravity);
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	this.show = function(){
		push();
		rotate(this.vel.heading());
		fill(this.col );
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