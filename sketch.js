var population;
var walls;
var targetIndex;
var canCreate;

var physicsEngineLoop;

function setup() {
	createCanvas(900, 600);
	population = [];
	walls = [];
	targetIndex = null;
	canCreate = true;
	walls.push(new Wall(createVector(10, 300), 300, 20, 100));
	walls.push(new Wall(createVector(width - 410, 400), 450, 20, 200));
	walls.push(new Wall(createVector(0, height - 20), width, 20, 150));

	physicsEngineLoop = 5;
}

function draw() {
	background(51);

	for (var i = 0; i < walls.length; i++) {
		walls[i].show();
	}

	//Main loop
	for (var i = 0; i < population.length; i++) {
		population[i].update();
		if(targetIndex == null){
			if(population[i].isMouseOn()){
				population[i].r = 55;
				canCreate = false;
			} else{
				population[i].r = 50;
				canCreate = true;
			}
		}
		population[i].show();
	}

	if(targetIndex != null){
		population[targetIndex].pos = createVector(mouseX, mouseY);
	}

	//Collision between balls
	for (var p = 0; p < physicsEngineLoop; p++) {
		for (var i = 0; i < population.length; i++) {
			for (var j = 0; j < population.length; j++) {
				if(i != j){
					var dis = dist(population[i].pos.x, population[i].pos.y, population[j].pos.x, population[j].pos.y)
					var radius = (population[i].r + population[j].r)*(population[i].r + population[j].r);
					if(dis * dis <= radius){
						console.log("contact between " + i + " and " + j);
					}
				}
			}
		}
		//Collision with walls
		for (var i = 0; i < population.length; i++) {
			for (var j = 0; j < walls.length; j++) {
				//if(population[i].x)
			}
		}
	}
	
}

function mousePressed(){
	if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height)
	{
		for (var i = 0; i < population.length; i++) {
			if(population[i].isMouseOn()){
				canCreate = false;
				if(targetIndex == null){
					targetIndex = i;
				} else {
					targetIndex = null;
				}
			}
		}

		if(canCreate){
			population.push(new Ball(createVector(mouseX, mouseY), 50));
			canCreate == true;
		}
	}
}