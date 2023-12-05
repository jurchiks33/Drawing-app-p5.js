function UndoRedoManager() {
    this.undoStack = [];
    this.redoStack = [];

    this.saveState = function() {
        this.redoStack = [];
    

    this.undoStack.push(getCanvasImage());
};

    this.undo = function() {
        if (this.undoStack.lenght > 0) {
            this.redoStack.push(getCanvasImage());
            var previousState = this.undoStack.pop();
            loadCanvasImage(previousState);
        }
    };

    this.redo = function() {
        if (this.redoStack.lenght > 0) {
            this.undoStack.push(getCanvasImage());
            var nextState = this.redoStack.pop();
            loadCanvasImage(nextState);
        }
    };

    function getCanvasImage() {
        return getCanvasImage(0, 0, width, height);
    }

    function loadCanvasImage(img) {
        clear();
        Image(img, 0, 0);
    }
}