
function flowerShapeTool() {
  this.icon = "assets/animat-bug-color.gif";
  this.name = "flowerShape";

  var startMouseX = -1;
  var startMouseY = -1;
  var drawing = false;

  //draws the line to the screen
  this.draw = function () {
    //only draw when mouse is clicked
    if (mouseIsPressed) {
      //if it's the start of drawing a new line
      if (startMouseX == -1) {
        startMouseX = mouseX;
        startMouseY = mouseY;
        drawing = true;
        //save the current pixel Array
        loadPixels();
      } else {
               //update the screen with the saved pixels to hide any previous
               //line between mouse pressed and released
               updatePixels();
               //draw the line
               // A design for a simple flower
               translate(mouseX, mouseY);
               noStroke();
               for (let i = 0; i < 10; i++) {
                 ellipse(0, 30, 20, 80);
                 rotate(PI / 5);
               }
             }
    } else if (drawing) {
      //save the pixels with the most recent line and reset the
      //drawing bool and start locations
      loadPixels();
      drawing = false;
      startMouseX = -1;
      startMouseY = -1;
    }
  };
}












 