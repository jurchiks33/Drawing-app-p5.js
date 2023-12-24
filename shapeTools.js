function ShapeTools() {
    //Basic properties of the shape tool object.
    this.name = "ShapeTools";
    this.icon = "assets/shapeToolIcon.jpg";

    // Default shape selected is rectangle.
    this.selectedShape = 'rectangle';

    // Starting points when shape is being drawn.
    this.startX = null;
    this.startY = null;

    // Variable to store the canvas state
    var canvasState;

    // This function changes selected shape.
    this.changeSelectedShape = function(shape) {
        this.selectedShape = shape;
    }

    // Mouse pressed and released events
    this.mousePressed = function() {
        //set starting x and y to current mouse position.
        this.startX = mouseX;
        this.startY = mouseY;
        canvasState = get(); // Capture the canvas state when the mouse is pressed
    }

    //function that handles mouse released event.
    this.mouseReleased = function() {
        this.startX = null;
        this.startY = null;
        canvasState = null; // Clear the saved state when the mouse is released
    }

    // Draw function
    this.draw = function() {
        if(mouseIsPressed) {    //Check if mouse is pressed.
            if (this.startX && this.startY) {  //check for starting coordinates.
                // Restore the canvas state for each frame
                image(canvasState, 0, 0);

                switch (this.selectedShape) {
                    case 'rectangle':
                        //for rectangle drawing from starting point to current mouse position
                        rect(this.startX, this.startY, mouseX - this.startX,
                             mouseY - this.startY);
                        break;
                        //for ellipse drawing from starting point to current mouse position
                    case 'ellipse':
                        ellipse(this.startX, this.startY, mouseX - this.startX,
                                mouseY - this.startY);
                        break;
                        //for star drawing from starting point to current mouse position
                    case 'star':
                        this.drawStar(this.startX, this.startY, 
                                      (mouseX - this.startX) * 0.5, 
                                      (mouseY - this.startY) * 0.5);
                        break;
                        //for triangle drawing from starting point to current mouse position
                    case 'triangle':
                        this.drawTriangle(this.startX, this.startY, 
                                          mouseX, mouseY);
                        break;
                        //for pentagon drawing from starting point to current mouse position
                    case 'pentagon':
                        this.drawPentagon(this.startX, this.startY, 
                                          mouseX - this.startX);
                        break;
                }
            }
        }
    }

    //function that draws star.
    this.drawStar = function(x, y, radius1, radius2) {
        let angle = TWO_PI / 5;
        let halfAngle = angle / 2.0;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
            let sx = x + cos(a) * radius2;
            let sy = y + sin(a) * radius2;
            vertex(sx, sy);
            sx = x + cos(a + halfAngle) * radius1;
            sy = y + sin(a + halfAngle) * radius1;
            vertex(sx, sy);
        }
        endShape(CLOSE);
    }

    //function that draws triangle.
    this.drawTriangle = function(x1, y1, x2, y2) {
        triangle(x1, y1, x1, y2, x2, y2);
    }

    //function that draws pentagon.
    this.drawPentagon = function(x, y, size) {
        let angle = TWO_PI / 5;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
            let sx = x + cos(a) * size;
            let sy = y + sin(a) * size;
            vertex(sx, sy);
        }
        endShape(CLOSE);
    }
}