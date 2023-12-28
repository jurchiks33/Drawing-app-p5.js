6. Please upload your code in text format (not screenshots) in a PDF file here. 
Please clearly label with start and end comments exactly which sections 
of code you personally wrote without assistance. 
5% of the marks for this coursework are reserved for this part. 


Custom Brush 
This tool was written by my self, I was using one code as the basis to see direction 
I need to work on (task 4. Under Stack Overflows) but overall knowledge was given in course, 
some knowledge about randomness was used from introduction into programming 1. Game project.

function CustomBrush() {
    //Seting name and icon for custom brush tool.
    this.name = "Custom Brush";
    this.icon = "assets/brush.jpg";

    //Draw function which work all the time when mouse is pressed.
    this.draw = function() {
        if (mouseIsPressed) {
            let brushDensity = 10; // Number of points in the brush
            let brushSpread = brushSize / 2; // Spread of the brush strokes

            //loop for multiple brush strokes
            for (let i = 0; i < brushDensity; i++) {
//offsetX for random stroke displacement
                let offsetX = random(-brushSpread, brushSpread); 
//offsetY for random stroke displacement.
                let offsetY = random(-brushSpread, brushSpread); 
// Random opacity for each stroke
                let alphaValue = random(50, 255); 

//use of stroke color from colour pallette and applying random alpha value for transparency.
                stroke(colourP.selectedColour);
// Varying stroke weight
                strokeWeight(random(1, brushSize / 2)); 
                stroke(color(red(colourP.selectedColour), 
                        green(colourP.selectedColour), 
                        blue(colourP.selectedColour), alphaValue));
                //Draw line from previous mouse posittion and offset it by random value
                line(pmouseX + offsetX, pmouseY + offsetY, mouseX + offsetX, mouseY + offsetY); 
            }
        }
    };
}

