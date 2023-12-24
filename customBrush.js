function CustomBrush() {
    this.name = "Custom Brush";
    this.icon = "assets/brush.jpg";

    this.draw = function() {
        if (mouseIsPressed) {
            stroke(colourP.selectedColour);
            strokeWeight(brushSize); 
            line(pmouseX, pmouseY, mouseX, mouseY);
        }
    };
}