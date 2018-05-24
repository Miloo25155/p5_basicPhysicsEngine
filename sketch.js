var population;
var walls;
var targetIndex;
var canCreate;

function setup() {
	createCanvas(900, 600);
	population = [];
	walls = [];
	targetIndex = null;
	canCreate = true;
	walls.push(new Wall(createVector(10, 300), 300, 20, 100));
	walls.push(new Wall(createVector(width - 410, 400), 450, 20, 200));
	walls.push(new Wall(createVector(0, height - 20), width, 20, 150));
}

function draw() {
	background(51);

	for (var i = 0; i < walls.length; i++) {
		walls[i].show();
	}

	for (var i = 0; i < population.length; i++) {
		population[i].update();
		if(population[i].isMouseOn()){
			population[i].col = 150;
			canCreate = false;
		} else{
			population[i].col = 255;
			canCreate = true;
		}
		population[i].show();
		/*if(population[i].pos.x < 0 || population[i].pos.x > width || population[i].pos.y < 0 || population[i].pos.y > height){
			population.splice(i, 1);
		}*/
	}

	if(targetIndex != null){
		population[targetIndex].pos = createVector(mouseX, mouseY);
	}

	//Collision between balls
	for (var i = 0; i < population.length; i++) {
		for (var j = 0; j < population.length; j++) {
			if(i != j){
				var dis = dist(population[i].pos.x, population[i].pos.y, population[j].pos.x, population[j].pos.y)
				var radius = (population[i].r + population[j].r)*(population[i].r + population[j].r);
				if(dis * dis <= radius){
					//console.log("contact");
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
	//console.log(canCreate, targetIndex);
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

function mouseReleased(){
	
}