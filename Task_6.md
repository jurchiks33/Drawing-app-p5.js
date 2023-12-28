6. Please upload your code in text format (not screenshots) in a PDF file here. 
Please clearly label with start and end comments exactly which sections 
of code you personally wrote without assistance. 
5% of the marks for this coursework are reserved for this part. 


Custom Brush 
This tool was written by my self, I was using one code as the basis to see direction 
I need to work on (task 4. Under Stack Overflows) but overall knowledge was given in course, 
some knowledge about randomness was used from introduction into programming 1. Game project.

function CustomBrush() {
    //Seting name and icon for custom brush tool.
    this.name = "Custom Brush";
    this.icon = "assets/brush.jpg";

    //Draw function which work all the time when mouse is pressed.
    this.draw = function() {
        if (mouseIsPressed) {
            let brushDensity = 10; // Number of points in the brush
            let brushSpread = brushSize / 2; // Spread of the brush strokes

            //loop for multiple brush strokes
            for (let i = 0; i < brushDensity; i++) {
//offsetX for random stroke displacement
                let offsetX = random(-brushSpread, brushSpread); 
//offsetY for random stroke displacement.
                let offsetY = random(-brushSpread, brushSpread); 
// Random opacity for each stroke
                let alphaValue = random(50, 255); 

//use of stroke color from colour pallette and applying random alpha value for transparency.
                stroke(colourP.selectedColour);
// Varying stroke weight
                strokeWeight(random(1, brushSize / 2)); 
                stroke(color(red(colourP.selectedColour), 
                        green(colourP.selectedColour), 
                        blue(colourP.selectedColour), alphaValue));
                //Draw line from previous mouse posittion and offset it by random value
                line(pmouseX + offsetX, pmouseY + offsetY, mouseX + offsetX, mouseY + offsetY); 
            }
        }
    };
}



Shape Tools
This tool was written with a help of p5.js library. First part of it was written by my self 
for the basic properties of the tool and mouse press and release events were written by myself 
(Page 2 below. Page 3 and page 4 were written with help of p5.js library code examples. See task 4.)

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
// Capture the canvas state when the mouse is pressed
        canvasState = get(); 
    }

    //function that handles mouse released event.
    this.mouseReleased = function() {
        this.startX = null;
        this.startY = null;
// Clear the saved state when the mouse is released
        canvasState = null; 
    }

    // Draw function
    this.draw = function() {
//Check if mouse is pressed.
        if(mouseIsPressed) { 
            //check for starting coordinates.  
            if (this.startX && this.startY) {  
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



