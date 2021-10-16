var star;
var starSizeSlider;
var nStarSlider;

function preload() {
    star = loadImage('./assets/Kingfisher-stamp.jpg');
    stampSizeSlider = createSlider(5, 255, 122.5);
    stampSizeSlider.position(105, 0);
    stampSizeSlider.parent("#sizeOfStampControl");
    
}




//a tool for drawing straight lines to the screen. Allows the user to preview
//the a line to the current mouse position before drawing the line to the 
//pixel array.
function stampTool() {
    this.icon = "assets/Kingfisher-stamp.jpg";
    this.name = "StampTool";

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
            }

            else {
                //update the screen with the saved pixels to hide any previous
                //line between mouse pressed and released
                updatePixels();
                //draw the line
                var starSize = stampSizeSlider.value();
                var starX = mouseX - starSize / 2;
                var starY = mouseY - starSize / 2;
                image(star, starX,starY,starSize,starSize);
            }

        }

        else if (drawing) {
            //save the pixels with the most recent line and reset the
            //drawing bool and start locations
            loadPixels();
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }
    };


}
