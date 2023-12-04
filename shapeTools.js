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

    this.mouseReleased = function() {
        this.startX = null;
        this.startY = null;
    }

    this.draw = function() {
        if(mouseIsPressed) {
            if (this.startX && this.startY) {
                switch (this.selectedShape) {
                    case 'rectangle':
                        rect(this.startX, this.startY, mouseX - this.startX,
                            mouseY - this.startY);
                        break;
                    case 'ellipse':
                        ellipse(this.startX, this.startY, mouseX - this.startX,
                                mouseY - this.startY);
                        break;
                    case 'star':
                        this.drawStar(this.startX, this.startY, 
                            (mouseX - this.startX) * 0.5, 
                            (mouseY - this.startY) * 0.5);
                        break;
                }
            }
        }
    }

}