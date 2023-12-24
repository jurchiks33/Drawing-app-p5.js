function UndoRedoManager() {
    this.undoStack = [];
    this.redoStack = [];

    this.saveState = function() {
        this.redoStack = [];
        this.undoStack.push(getCanvasImage());
    };

    this.undo = function() {
        console.log("Undo called. Stack size before undo:", this.undoStack.length);
        if (this.undoStack.length > 0) {
            this.redoStack.push(getCanvasImage());
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
