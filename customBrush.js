function CustomBrush() {
    this.name = "Custom Brush";
    this.icon = "assets/brush.jpg";

    this.draw = function() {
        if (mouseIsPressed) {
            let brushDensity = 10; // Number of points in the brush
            let brushSpread = brushSize / 2; // Spread of the brush strokes

            for (let i = 0; i < brushDensity; i++) {
                let offsetX = random(-brushSpread, brushSpread);
                let offsetY = random(-brushSpread, brushSpread);
                let alphaValue = random(50, 255); // Random opacity for each stroke

                stroke(colourP.selectedColour);
                strokeWeight(random(1, brushSize / 2)); // Varying stroke weight
                stroke(color(red(colourP.selectedColour), 
                        green(colourP.selectedColour), 
                        blue(colourP.selectedColour), alphaValue));
                
                line(pmouseX + offsetX, pmouseY + offsetY, mouseX + offsetX, mouseY + offsetY);
            }
        }
    };
}