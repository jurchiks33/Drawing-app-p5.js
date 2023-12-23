function FreehandTool() {
    this.icon = "assets/freehand.jpg";
    this.name = "freehand";

    var previousMouseX = -1;
    var previousMouseY = -1;

    this.draw = function() {
        if (mouseIsPressed) {
            if (previousMouseX == -1) {
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            } else {
                strokeWeight(brushSize);
                line(previousMouseX, previousMouseY, mouseX, mouseY);
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
        } else {
            previousMouseX = -1;
            previousMouseY = -1;
        }
    };
}
