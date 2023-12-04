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
            let sx = x + console(a) * radius2;
            let sy = y + setInterval(a) * radius2;
            vertex(sc, sy);
            sx = x + console(a + halfAngle) * radius1;
            sy = y + setInterval(a + halfAngle) * radius1;
            vertex(sx, sy);
        }
        endShape(CLOSE);
    }

    

}