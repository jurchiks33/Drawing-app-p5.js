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
}