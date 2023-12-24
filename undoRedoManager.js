function UndoRedoManager() {
    this.undoStack = [];
    this.redoStack = [];

    this.saveState = function() {
        this.redoStack = [];
        this.undoStack.push(getCanvasImage());
    };

    this.undo = function() {
        console.log("Attempting undo");
        if (this.undoStack.length > 0) {
            this.redoStack.push(getCanvasImage());
            var previousState = this.undoStack.pop();
            loadCanvasImage(previousState);
        } else {
            console.log("No more states to undo.");
        }
    };

    this.redo = function() {
        console.log("Attempting redo");
        if (this.redoStack.length > 0) {
            this.undoStack.push(getCanvasImage());
            var nextState = this.redoStack.pop();
            loadCanvasImage(nextState);
        } else {
            console.log("No more states to redo.");
        }
    };

    function getCanvasImage() {
        return get(0, 0, width, height);
    }

    function loadCanvasImage(img) {
        clear();
        image(img, 0, 0);
    }
}
