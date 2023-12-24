function ShapeTools() {
    this.name = "ShapeTools";
    this.icon = "assets/shapeToolIcon.jpg";

    // Default shape
    this.selectedShape = 'rectangle';

    // Starting and ending points of shape
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
        this.startX = mouseX;
        this.startY = mouseY;
        canvasState = get(); // Capture the canvas state when the mouse is pressed
    }

    this.mouseReleased = function() {
        this.startX = null;
        this.startY = null;
        canvasState = null; // Clear the saved state when the mouse is released
    }

    // Draw function
    this.draw = function() {
        if(mouseIsPressed) {
            if (this.startX && this.startY) {
                // Restore the canvas state for each frame
                image(canvasState, 0, 0);

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
                    case 'triangle':
                        this.drawTriangle(this.startX, this.startY, 
                                          mouseX, mouseY);
                        break;
                    case 'pentagon':
                        this.drawPentagon(this.startX, this.startY, 
                                          mouseX - this.startX);
                        break;
                }
            }
        }
    }

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

    this.drawTriangle = function(x1, y1, x2, y2) {
        triangle(x1, y1, x1, y2, x2, y2);
    }

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