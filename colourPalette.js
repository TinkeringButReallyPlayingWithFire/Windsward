// Displays and handles the colour palette.



function ColourPalette() {
	//a list of web colour strings
  this.colours = [
    "rgb(128, 0, 0)",
    "rgb(139, 0, 0)",
    "rgb(165, 42, 42)",
    "rgb(178, 34, 34)",
    "rgb(220, 20, 60)",
    "rgb(255, 0, 0)",
 		"rgb(255, 99, 71)",
 		"rgb(255, 127, 80)",
 		"rgb(205, 92, 92)",
    "rgb(240, 128, 128)",
 		"rgb(233, 150, 122)",
 		"rgb(250, 128, 114)",
 		"rgb(255, 160, 122)",
 		"rgb(255, 69, 0)",
 	  "rgb(255, 140, 0)",
 		"rgb(255, 165, 0)",
 		"rgb(255, 215, 0)",
 		"rgb(184, 134, 11)",
 		"rgb(218, 165, 32)",
 		"rgb(238, 232, 170)",
 		"rgb(189, 183, 107)",
 	  "rgb(240, 230, 140)",
 		"rgb(128, 128, 0)",
 		"rgb(255, 255, 0)",
 		"rgb(154, 205, 50)",
 		"rgb(85, 107, 47)",
 		"rgb(107, 142, 35)",
 		"rgb(124, 252, 0)",
 		"rgb(127, 255, 0)",
 		"rgb(173, 255, 47)",
 		"rgb(0, 100, 0)",
 		"rgb(0, 128, 0)",
 		"rgb(34, 139, 34)",
 		"rgb(0, 255, 0)",
 		"rgb(50, 205, 50)",
 		"rgb(144, 238, 144)",
 		"rgb(152, 251, 152)",
 		"rgb(143, 188, 143)",
 		"rgb(0, 250, 154)",
 		"rgb(0, 255, 127)",
    "rgb(46, 139, 87)",
 	  "rgb(102, 205, 170)",
 	  "rgb(60, 179, 113)",
 		"rgb(32, 178, 170)",
 	  "rgb(47, 79, 79)",
 		"rgb(0, 128, 128)",
 	  "rgb(0, 139, 139)",
 		"rgb(0, 255, 255)",
 		"rgb(224, 255, 255)",
    "rgb(0, 206, 209)",
     
    //split on new block
    "rgb(64, 224, 208)",
    "rgb(72, 209, 204)",
    "rgb(175, 238, 238)",
    "rgb(127, 255, 212)",
    "rgb(176, 224, 230)",
    "rgb(95, 158, 160)",
    "rgb(70, 130, 180)",
    "rgb(100, 149, 237)",
    "rgb(0, 191, 255)",
    "rgb(30, 144, 255)",
    "rgb(173, 216, 230)",
    "rgb(135, 206, 235)",
    "rgb(135, 206, 250)",
    "rgb(25, 25, 112)",
    "rgb(0, 0, 128)",
    "rgb(0, 0, 139)",
    "rgb(0, 0, 205)",
    "rgb(0, 0, 255)",
    "rgb(65, 105, 225)",
    "rgb(138, 43, 226)",
    "rgb(75, 0, 130)",
    "rgb(72, 61, 139)",
    "rgb(106, 90, 205)",
    "rgb(123, 104, 238)",
    "rgb(147, 112, 219)",
    "rgb(139, 0, 139)",
    "rgb(148, 0, 211)",
    "rgb(153, 50, 204)",
    "rgb(186, 85, 211)",
    "rgb(128, 0, 128)",
    "rgb(216, 191, 216)",
    "rgb(221, 160, 221)",
    "rgb(238, 130, 238)",
    "rgb(255, 0, 255)",
    "rgb(218, 112, 214)",
    "rgb(199, 21, 133)",
    "rgb(219, 112, 147)",
    "rgb(255, 20, 147)",
    "rgb(255, 105, 180)",
    "rgb(255, 182, 193)",
    "rgb(255, 192, 203)",
    "rgb(250, 235, 215)",
    "rgb(245, 245, 220)",
    "rgb(255, 228, 196)",
    "rgb(255, 235, 205)",
    "rgb(245, 222, 179)",
    "rgb(255, 248, 220)",
    "rgb(255, 250, 205)",
    "rgb(250, 250, 210)",
    "rgb(255, 255, 224)",
    "rgb(139, 69, 19)",
    "rgb(160, 82, 45)",
    "rgb(210, 105, 30)",
    "rgb(205, 133, 63)",
    "rgb(244, 164, 96)",
    "rgb(222, 184, 135)",
    "rgb(210, 180, 140)",
    "rgb(188, 143, 143)",
    "rgb(255, 228, 181)",
    "rgb(255, 222, 173)",
    "rgb(255, 218, 185)",
    "rgb(255, 228, 225)",
    "rgb(255, 240, 245)",
    "rgb(250, 240, 230)",
    "rgb(253, 245, 230)",
    "rgb(255, 239, 213)",
    "rgb(255, 245, 238)",
    "rgb(245, 255, 250)",
    "rgb(112, 128, 144)",
    "rgb(119, 136, 153)",
    "rgb(176, 196, 222)",
    "rgb(230, 230, 250)",
    "rgb(255, 250, 240)",
    "rgb(240, 248, 255)",
    "rgb(248, 248, 255)",
    "rgb(240, 255, 240)",
    "rgb(255, 255, 240)",
    "rgb(240, 255, 255)",
    "rgb(255, 250, 250)",
    "rgb(0, 0, 0)",
    "rgb(105, 105, 105)",
    "rgb(128, 128, 128)",
    "rgb(169, 169, 169)",
    "rgb(192, 192, 192)",
    "rgb(211, 211, 211)",
    "rgb(220, 220, 220)",
    "rgb(245, 245, 245)",
    

 		];
	//make the start colour match start array entry
  this.selectedColour = this.colours[0];

	var self = this;

	var colourClick = function() {
		//remove the old border
		var current = select("#" + self.selectedColour + "Swatch");
		current.style("border", "0");

		//get the new colour from the id of the clicked element
		var c = this.id().split("Swatch")[0];

		//set the selected colour and fill and stroke
    self.selectedColour = c;
    
		fill(c);
    stroke(c);
    
    

    
    

		//add a new border to the selected colour
		this.style("border", "2px solid blue");
	}

	//load in the colours
	this.loadColours = function() {

		
  
		//set the fill and stroke properties to be black at the start of the programme
		//running
		fill(this.colours[0]);
		stroke(this.colours[0]);

		//for each colour create a new div in the html for the colourSwatches
		for (var i = 0; i < this.colours.length; i++) {
			var colourID = this.colours[i] + "Swatch";

			//using JQuery add the swatch to the palette and set its background colour
			//to be the colour value.
			var colourSwatch = createDiv()
			colourSwatch.class('colourSwatches');
			colourSwatch.id(colourID);

			select(".colourPalette").child(colourSwatch);
			select("#" + colourID).style("background-color", this.colours[i]);
			colourSwatch.mouseClicked(colourClick)
		}

		select(".colourSwatches").style("border", "2px solid blue");
	};
	//call the loadColours function now it is declared
	this.loadColours();
}
