//Whith this one i have some problems which i will try to resolve in a second semester.
//Undo/Redo is working with commands Control+z/Control+y.
//but for some reason buttons are not working. hints are appreciated ;)
//Tryed to console.log but didnt see something outstanding on a problem.

function UndoRedoManager() {
    //stacks to hold undo/redo states.
    this.undoStack = [];
    this.redoStack = [];

    //Save current state of canvas/
    this.saveState = function() {
        this.redoStack = [];        //clears redo stake when new one is saved.
        this.undoStack.push(getCanvasImage()); //Pushes current canvas image into undo stack.
    };

    //handles undo action.
    this.undo = function() {
        console.log("Undo called. Stack size before undo:", this.undoStack.length);
        if (this.undoStack.length > 0) {
            this.redoStack.push(getCanvasImage()); //saves current state before undoing redo stack.
            var previousState = this.undoStack.pop();
            loadCanvasImage(previousState);
        } else {
            console.log("No more states to undo.");
        }
        console.log("Stack size after undo:", this.undoStack.length);
    };
    
    this.redo = function() {
        console.log("Redo called. Stack size before redo:", this.redoStack.length);
        if (this.redoStack.length > 0) {
            this.undoStack.push(getCanvasImage());
            var nextState = this.redoStack.pop();
            loadCanvasImage(nextState);
        } else {
            console.log("No more states to redo.");
        }
        console.log("Stack size after redo:", this.redoStack.length);
    };
    

    function getCanvasImage() {
        console.log("Capturing canvas state");
        return get(0, 0, width, height);
    }
    
    function loadCanvasImage(img) {
        console.log("Restoring canvas state");
        clear();
        image(img, 0, 0);
    }
}
