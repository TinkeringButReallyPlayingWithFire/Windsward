function SprayCanTool(){
	
	this.name = "sprayCanTool";
	this.icon = "assets/animat-flask-color.gif";

	var points = 23;
	var spread = 10;
	let drawingState = true;

	// this.drawingState();

	this.draw = function(){
		var r = random(5,10);
		if(mouseIsPressed && drawingState == true){
			for(var i = 0; i < points; i++){
				strokeWeight(0);
				point(random(mouseX-spread, mouseX + spread), random(mouseY-spread, mouseY+spread));
			}
		} else {
			strokeWeight(1);
		}
		

		
	};
}