function CustomBrush() {
    this.name = "Custom Brush";
    this.icon = "assets/brush.jpg";

    this.draw = function() {
        if (mouseIsPressed) {
            stroke(0);
            strokeWeight(1);
            line(pmouseX, pmouseY, mouseX, mouseY);
        }
    };

    this.populateOptions = function() {
        select('.options').html('<label for="brush-size-slider">Brush Size:</label><input type="range" id="brush-size-slider" min="1" max="10" value="' + this.brushSize + '">');
       
    }

}