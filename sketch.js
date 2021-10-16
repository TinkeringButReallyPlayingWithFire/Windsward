
//global variables that will store the toolbox colour palette
//and the helper functions
var toolbox = null;
var helpers = null;

var selectMode;
var selectedArea;

var selectButton;
var selectedPixels;

let sphereCreation;
let boxCreation;
let loadSphereOn;
let loadBoxOn;




function setup() {

  sphereCreation = createGraphics(1500, 1500, WEBGL);
  boxCreation = createGraphics(1500, 1500, WEBGL);

                   // *** EXTERNAL CODE SOURCED FROM STACKOVERFLOW - https://stackoverflow.com/questions/22087076/how-to-make-a-simple-image-upload-using-javascript-html
                   $(function () {
                     $(":file").change(function () {
                       if (this.files && this.files[0]) {
                         var reader = new FileReader();
                         reader.onload = imageIsLoaded;
                         reader.readAsDataURL(this.files[0]);
                       }
                     });
                   });

                   function imageIsLoaded(e) {
                     $("#myImg").attr("src", e.target.result);
                   }
                   //  *** END OF SOURCE CODE
                   //create a canvas to fill the content div from index.html
                   canvasContainer = select("#content");
                   var c = createCanvas(canvasContainer.size().width,canvasContainer.size().height);
                   c.parent("#content");

                   //create helper functions and the colour palette
                   helpers = new HelperFunctions();
                   colourP = new ColourPalette();

                   //create a toolbox for storing the tools
                   toolbox = new Toolbox();

                   //add the tools to the toolbox.
                   toolbox.addTool(new FreehandTool());
                   toolbox.addTool(new LineToTool());
                   toolbox.addTool(new SprayCanTool());
                   toolbox.addTool(new mirrorDrawTool());
                   toolbox.addTool(new stampTool());
                   toolbox.addTool(new eraserTool());
                   toolbox.addTool(new rectShapeTool());
                   toolbox.addTool(new ellipseShapeTool());
                   toolbox.addTool(new hyperDriveShapeTool());
                   toolbox.addTool(new flowerShapeTool());

                   background(255);

                   selectMode = 0;
                   selectedArea = { x: 0, y: 0, w: 100, h: 100 };

                   selectButton = createButton("Select");
                   selectButton.position(1128, 6.5);

                   selectButton.mousePressed(function () {
                     //event code will go here

                     console.log("button pressed");

                     if (selectMode == 0) {
                       selectMode += 1;
                       selectButton.html("Cut");

                       loadPixels(); // store current frame
                     } else if (selectMode == 1) {
                       selectMode += 1;
                       selectButton.html("End paste");

                       //refresh the screen
                       updatePixels();

                       //store the pixels
                       selectedPixels = get(
                         selectedArea.x,
                         selectedArea.y,
                         selectedArea.w,
                         selectedArea.h
                       );

                       //draw a rectangle over it
                       fill(255);
                       noStroke();
                       rect(
                         selectedArea.x,
                         selectedArea.y,
                         selectedArea.w,
                         selectedArea.h
                       );
                     } else if (selectMode == 2) {
                       selectMode = 0;
                       loadPixels();
                       selectedArea = { x: 0, y: 0, w: 100, h: 100 };
                       selectButton.html("Select");
                     }
                   });

                   //Text Tool
                   // *** SOURCED FROM GITHUB - https://github.com/processing/p5.js/issues/3281
                   textInput = createInput().attribute(
                     "placeholder",
                     "Text Randomiser"
                   );
                   // *** END OF SOURCE CODE
                   textInput.position(110, 953);

                   textbutton = createButton("Δ");
                   textbutton.position(261.5, 953);
                   textbutton.mousePressed(textChange);
                   function textChange() {
                     const textNew = textInput.value();
                     let w = random(width);
                     let h = random(height);

                     text(textNew, w, h);
                   }


                  //  BEGINNING OF Entropy Frame
                   gridGraphing = createButton("Δ");
                   gridGraphing.position(1640, 933);
                   gridGraphing.mousePressed(gridGraphingOn);
                   function gridGraphingOn() {
                     //DO SOMETHING 
                     //DO SOMETHING }
                     for (var x = 0; x < width; x += width / 50) {
                       for (var y = 0; y < height; y += height / 50) {
                         stroke(0);
                         strokeWeight(1);
                         line(x, 0, width, height);
                         line(0, y, width, height);
                       }
                     }
                   }
                     

                   

                   // BEGGINNING OF Mail-Card Frame
                   gridHandwriting = createButton("Δ");
                   gridHandwriting.position(1540, 933);
                   gridHandwriting.mousePressed(gridWritingOn);
                   function gridWritingOn() {
                     //DO SOMETHING }
                     for (var x = 0; x < width; x += height / 50) {
                       for (var y = 0; y < width; y += height / 10) {
                         stroke(0);
                         strokeWeight(1);
                         line(0, x, x, height);
                         line(0, y, width, y);
                       }
                     }
                   }

                  // BEGGINNING OF Mathematics Frame
                  gridMathematics = createButton("Δ");
                  gridMathematics.position(1354.5, 933);
                  gridMathematics.mousePressed(gridMathematicsOn);
                  function gridMathematicsOn() {
                    //DO SOMETHING }
                    //For (var BEGIN; END; INTERVAL){
                    //DO SOMETHING }
                    for (var x = 0; x < width; x += width / 50) {
                      for (var y = 0; y < height; y += height / 25) {
                        stroke(0);
                        strokeWeight(1);
                        line(x, 0, x, height);
                        line(0, y, width, y);
                      }
                    }
                  }

                  
                 }
                 

function draw() {
//   // BEGGINNING OF loadModel 
  loadModelObj = createButton("Δ");
  loadModelObj.position(1261.5, 933);
  loadModelObj.mousePressed(loadSphereOn);

  loadModelBox = createButton("Δ");
  loadModelBox.position(1443, 933);
  loadModelBox.mousePressed(loadBoxOn);


  loadSphereOn = () => {
    sphereCreation.sphere(300);
    noFill();
    stroke(255);
    push();
    translate(500, height * 0.35, -200);
    sphereCreation.rotateY(millis() / 1000);
    
    pop();
  }
  
  image(boxCreation, 0, 0, 2000, 2000);

  loadBoxOn = () => {

    frameRate(60);
    stroke(0);
    noFill(0);
    loop();
    push();
    boxCreation.translate(random(width), random(height));
    boxCreation.rotateY(1.25);
    boxCreation.rotateX(-0.9);
    boxCreation.box(300);
    pop();

    

  }

  image(sphereCreation, 0, 0, 500, 500);





  
                  //call the draw function from the selected tool.
                  //hasOwnProperty is a javascript function that tests
                  //if an object contains a particular method or property
                  //if there isn't a draw method the app will alert the user

                  if (toolbox.selectedTool.hasOwnProperty("draw")) {
                    toolbox.selectedTool.draw();
                  } else {
                    alert("it doesn't look like your tool has a draw method!");
                  }

                  //you might recognise this code

                  if (mouseIsPressed) {
                    if (selectMode == 0) {
                      //check if they previousX and Y are -1. set them to the current
                      //mouse X and Y if they are.
                      if (previousMouseX == -1) {
                        console.log("update mouse");
                        previousMouseX = mouseX;
                        previousMouseY = mouseY;
                      }
                      //if we already have values for previousX and Y we can draw a line from
                      //there to the current mouse location
                      else {
                        // stroke(0);
                        // noFill();
                        line(previousMouseX, previousMouseY, mouseX, mouseY);
                        previousMouseX = mouseX;
                        previousMouseY = mouseY;
                      }
                    } else if (selectMode == 1) {
                      updatePixels();

                      noStroke();
                      fill(255, 0, 0, 100);
                      rect(
                        selectedArea.x,
                        selectedArea.y,
                        selectedArea.w,
                        selectedArea.h
                      );
                    }
                  } else {
                    //if the user has released the mouse we want to set the previousMouse values
                    //back to -1.
                    previousMouseX = -1;
                    previousMouseY = -1;
                    
                  }
                }
                function keyPressed()


{


}

function mousePressed()
{
	
	if(selectMode == 1)
	{
		selectedArea.x = mouseX;
		selectedArea.y = mouseY;
	}
	else if(selectMode == 2)
	{
		image(selectedPixels, mouseX, mouseY);
	}
  
  
	
}


function mouseDragged()
{
	if(selectMode == 1)
	{
		var w = mouseX - selectedArea.x;
		var h = mouseY - selectedArea.y;

		selectedArea.w = w;
		selectedArea.h = h;

		console.log(selectedArea);
	}
	

}

// *** CODE SOURCED FROM EXTERNAL SITE - https://usefulangle.com/post/45/animate-favicon-gif-javascript
var gifTitleIcon_images = [
  './assets/gifImages/tmp-0.gif',
  './assets/gifImages/tmp-1.gif',
  './assets/gifImages/tmp-2.gif',
  './assets/gifImages/tmp-3.gif',
  './assets/gifImages/tmp-4.gif',
  './assets/gifImages/tmp-5.gif',
  './assets/gifImages/tmp-6.gif',
  './assets/gifImages/tmp-7.gif',
  './assets/gifImages/tmp-8.gif',
  './assets/gifImages/tmp-9.gif',
  './assets/gifImages/tmp-10.gif',
  './assets/gifImages/tmp-11.gif',
  './assets/gifImages/tmp-12.gif',
  './assets/gifImages/tmp-13.gif',
  './assets/gifImages/tmp-14.gif',
  './assets/gifImages/tmp-15.gif',
  './assets/gifImages/tmp-16.gif',
  './assets/gifImages/tmp-17.gif',
  './assets/gifImages/tmp-18.gif',
  './assets/gifImages/tmp-19.gif',
  './assets/gifImages/tmp-20.gif',
  './assets/gifImages/tmp-21.gif',
  './assets/gifImages/tmp-22.gif',
  './assets/gifImages/tmp-23.gif',
  './assets/gifImages/tmp-24.gif',
  './assets/gifImages/tmp-25.gif',
  './assets/gifImages/tmp-26.gif',
  './assets/gifImages/tmp-27.gif',
  './assets/gifImages/tmp-28.gif',
  './assets/gifImages/tmp-29.gif',
  './assets/gifImages/tmp-30.gif',
  './assets/gifImages/tmp-31.gif',
  './assets/gifImages/tmp-32.gif',
  './assets/gifImages/tmp-33.gif',
  './assets/gifImages/tmp-34.gif',
  './assets/gifImages/tmp-35.gif',
  './assets/gifImages/tmp-36.gif',
  './assets/gifImages/tmp-37.gif',
  './assets/gifImages/tmp-38.gif',
  './assets/gifImages/tmp-39.gif',
  './assets/gifImages/tmp-40.gif',
  './assets/gifImages/tmp-41.gif',
  './assets/gifImages/tmp-42.gif',
  './assets/gifImages/tmp-43.gif',
  './assets/gifImages/tmp-44.gif',
  './assets/gifImages/tmp-45.gif',
  './assets/gifImages/tmp-46.gif',
  './assets/gifImages/tmp-47.gif',
  './assets/gifImages/tmp-48.gif',
  './assets/gifImages/tmp-49.gif',
  './assets/gifImages/tmp-50.gif',
  './assets/gifImages/tmp-51.gif',
  './assets/gifImages/tmp-52.gif',
  './assets/gifImages/tmp-53.gif',
  './assets/gifImages/tmp-54.gif',
  './assets/gifImages/tmp-55.gif',
  './assets/gifImages/tmp-56.gif',
  './assets/gifImages/tmp-57.gif',
  './assets/gifImages/tmp-58.gif',
  './assets/gifImages/tmp-59.gif',
  './assets/gifImages/tmp-60.gif',
  './assets/gifImages/tmp-61.gif',
  './assets/gifImages/tmp-62.gif',
  './assets/gifImages/tmp-63.gif',
  './assets/gifImages/tmp-64.gif',
  './assets/gifImages/tmp-65.gif',
  './assets/gifImages/tmp-66.gif',
  './assets/gifImages/tmp-67.gif',
  './assets/gifImages/tmp-68.gif',
  './assets/gifImages/tmp-69.gif',
  './assets/gifImages/tmp-70.gif',
  './assets/gifImages/tmp-71.gif',
  './assets/gifImages/tmp-72.gif',
  './assets/gifImages/tmp-73.gif',
  './assets/gifImages/tmp-74.gif',
  './assets/gifImages/tmp-75.gif',
  './assets/gifImages/tmp-76.gif',
  './assets/gifImages/tmp-77.gif',
  './assets/gifImages/tmp-78.gif',
  './assets/gifImages/tmp-79.gif',
  './assets/gifImages/tmp-80.gif',
  './assets/gifImages/tmp-81.gif',
  './assets/gifImages/tmp-82.gif',
  './assets/gifImages/tmp-83.gif',
  './assets/gifImages/tmp-84.gif',
  './assets/gifImages/tmp-85.gif',
  './assets/gifImages/tmp-86.gif',
  './assets/gifImages/tmp-87.gif',
  './assets/gifImages/tmp-88.gif',
  './assets/gifImages/tmp-89.gif',





],
  image_counter = 0; // To keep track of the current image

setInterval(function () {
  $("link[rel='icon']").remove();
  $("link[rel='shortcut icon']").remove();
  $("head").append('<link rel="icon" href="' + gifTitleIcon_images[image_counter] + '" type="image/gif">');

  // If last image then goto first image
  // Else go to next image    
  if (image_counter == gifTitleIcon_images.length - 1)
    image_counter = 0;
  else
    image_counter++;
}, 100);
// ***END OF SOURCE CODE


