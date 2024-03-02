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


Undo/Redo Manager.

This tool was most challenging in my opinion, and it is still work in progress. 
Tools is working with buttons Control + Z/ Control + Y. 
but buttons in canvas are not working, some connection issues, 
will be first thing to debug in a closest time. 
Most of this code was used from external sources CodiCode.com (Task 4), 
also some interaction and tips from other programmer friends in a GitHub, but those were more advice consultations. 
//With this one i have some problems which i will try to resolve in a second semester.
//Undo/Redo is working with commands Control+z/Control+y.
//but for some reason buttons are not working. hints are appreciated ;)
//Tried to console.log but didn’t see something outstanding on a problem.

function UndoRedoManager() {
    //stacks to hold undo/redo states.
    this.undoStack = [];
    this.redoStack = [];

    //Save current state of canvas/
    this.saveState = function() {
    //clears redo stake when new one is saved.
        this.redoStack = [];  
    //Pushes current canvas image into undo stack.
        this.undoStack.push(getCanvasImage()); 
    };

    //handles undo action.
    this.undo = function() {
        console.log("Undo called. Stack size before undo:", this.undoStack.length);
        if (this.undoStack.length > 0) {
    //saves current state before undoing redo stack.
            this.redoStack.push(getCanvasImage()); 
    //pops last state from undo stack and loads it into canvas.
            var previousState = this.undoStack.pop(); 
            loadCanvasImage(previousState);
        } else {
            console.log("No more states to undo.");
        }
        console.log("Stack size after undo:", this.undoStack.length);
    };
    
    //Handles redo state of canvas.
    this.redo = function() {
        console.log("Redo called. Stack size before redo:", this.redoStack.length);
        if (this.redoStack.length > 0) {
    //saves current state before redoing undo stack
            this.undoStack.push(getCanvasImage());


  	//pops last state from redo stack and loads it into canvas.
            var nextState = this.redoStack.pop();   
            loadCanvasImage(nextState);
        } else {
            console.log("No more states to redo.");
        }
        console.log("Stack size after redo:", this.redoStack.length);
    };
    

    //Captures current state of canvas.
    function getCanvasImage() {
        console.log("Capturing canvas state");
    //Returns image object to current canvas object
        return get(0, 0, width, height);
    }
    
    //loads image into a canvas
    function loadCanvasImage(img) {
        console.log("Restoring canvas state");
    //Clears canvas.
        clear();  
    //draws image in to the canvas.
        image(img, 0, 0);   
    }
}

