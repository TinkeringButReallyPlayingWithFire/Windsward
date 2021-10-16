
function ThreeDModelTool() {
    this.icon = "assets/animat-dashboard-color.gif";
    this.name = "3dModelTool";

    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;
    let objCreation;
    let loadModelOn;
    let treeObj;
    let cM;
    this.preload = function()
    {
        treeObj = loadModel('./tree.obj');
    }

    this.setup = function()
    {
        cM = createCanvas(300, 300, WEBGL);

    };
    //draws the line to the screen
    this.draw = function () {
        //only draw when mouse is clicked
        if (mouseIsPressed) {
            //if it's the start of drawing a new line
            if (startMouseX == -1) {
                startMouseX = mouseX;
                startMouseY = mouseY;
                endMouseX = mouseX;
                endMouseY = mouseY;
                drawing = true;
                //save the current pixel Array
                loadPixels();
            } else {
                //update the screen with the saved pixels to hide any previous
                //line between mouse pressed and released
                updatePixels();
                //draw the line
                //   // // BEGGINNING OF loadModel 
                // loadModelObj = createButton("Δ");
                // loadModelObj.position(1261.5, 953);
                // loadModelObj.mousePressed(loadModelOn);

                this.cM.model(this.treeObj);

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
