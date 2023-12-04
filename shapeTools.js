function ShapeTools() {
    this.name = "ShapeTools";
    this.icon = "assets/shapeToolIcon.jpg";

    //Default shape
    this.selectedShape = 'rectangle';

    //starting and ending points of shape
    this.startX = null;
    this.startY = null;

    //this function changes selected shape.
    this.selectedShape = function(shape) {
        this.selectedShape = shape;
    }

    //Mouse pressed and released events
    this.mousePressed = function() {
        this.startX = mouseX;
        this.startY = mouseY;
    }
}