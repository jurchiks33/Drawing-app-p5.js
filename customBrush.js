function CustomBrush() {
    this.name = "Custom Brush";
    this.icon = "assets/brush.jpg";

    this.draw = function() {
        if (mouseIsPressed) {
            stroke(0); 
            strokeWeight(this.brushSize); 
            line(pmouseX, pmouseY, mouseX, mouseY);
        }
    };

    this.populateOptions = function() {
        var brushSlider = createSlider(1, 100, this.brushSize);
        brushSlider.parent(select('.options'));
        brushSlider.input(() => {
            this.brushSize = brushSlider.value();
        });
    };
}