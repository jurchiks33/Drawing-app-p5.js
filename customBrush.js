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
                let offsetX = random(-brushSpread, brushSpread); //offsetX for random stroke displacement
                let offsetY = random(-brushSpread, brushSpread); //offsetY for random stroke displacement.
                let alphaValue = random(50, 255); // Random opacity for each stroke

                //use of stroke color from colour pallette and applying random alpha value for transparency.
                stroke(colourP.selectedColour);
                strokeWeight(random(1, brushSize / 2)); // Varying stroke weight
                stroke(color(red(colourP.selectedColour), 
                        green(colourP.selectedColour), 
                        blue(colourP.selectedColour), alphaValue));
                
                line(pmouseX + offsetX, pmouseY + offsetY, mouseX + offsetX, mouseY + offsetY); //Draw line from previous mouse posittion and offset it by random value
            }
        }
    };
}