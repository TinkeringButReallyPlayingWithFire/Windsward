var colorPickerChange;
var backgroundColorPickerChange;
let thicknessChange;
function FreehandTool() {
  //set an icon and a name for the object
  this.icon = "assets/animat-pencil-color.gif";
  this.name = "freehand";

  //to smoothly draw we'll draw a line from the previous mouse location
  //to the current mouse location. The following values store
  //the locations from the last frame. They are -1 to start with because
  //we haven't started drawing yet.
  var previousMouseX = -1;
  var previousMouseY = -1;


  // *** SOURCED FROM GITHUB - https://github.com/processing/p5.js/issues/3281
  input = createInput().attribute('placeholder', 'Thickness');

  //*** END OF CODE SOURCE */
  input.position(110, 867.5);
  button = createButton("Δ");
  button.position(261.5, 867.5);
  button.mousePressed(thicknessChange);

  function thicknessChange() {
    let strVal = input.value();
    return strokeWeight(strVal);

  }




  	  let colorPicker;
      colorPicker = createColorPicker("#cb7c72");
      colorPicker.position(1823, 923);
      colorButton = createButton("Δ");
      colorButton.position(1875.5, 926);
      colorButton.mousePressed(colorPickerChange);

      function colorPickerChange() {
        var newColorChange = colorPicker.color();
        stroke(newColorChange);
      }

  let backgroundColorPicker;
  backgroundColorPicker = createColorPicker("#97af99");
  backgroundColorPicker.position(1713, 923);
  backgroundColorButton = createButton("Δ");
  backgroundColorButton.position(1765.5, 926);
  backgroundColorButton.mousePressed(backgroundColorPickerChange);

  function backgroundColorPickerChange() {
    var newColorChange = backgroundColorPicker.color();
    background(newColorChange);
  }

  this.draw = function () {
    //if the mouse is pressed
    if (mouseIsPressed) {
     

      //check if they previousX and Y are -1. set them to the current
      //mouse X and Y if they are.
      if (previousMouseX == -1) {
        previousMouseX = mouseX;
        previousMouseY = mouseY;
      }
      //if we already have values for previousX and Y we can draw a line from
      //there to the current mouse location
      else {
        line(previousMouseX, previousMouseY, mouseX, mouseY);
        previousMouseX = mouseX;
        previousMouseY = mouseY;
        
      }
    }
    //if the user has released the mouse we want to set the previousMouse values
    //back to -1.
    //try and comment out these lines and see what happens!
    else {
      previousMouseX = -1;
      previousMouseY = -1;
      
    }
  };







}