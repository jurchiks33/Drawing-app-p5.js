function UndoRedoManager() {
    this.undoStack = [];
    this.redoStack = [];

    this.saveState = function() {
        this.redoStack = [];
    }

    this.undoStack.push(getCanvasImage());
};

this.undo = function() {
    if (this.undoStack.lenght > 0) {
        this.redoStack.push(getCanvasImage());
    }
}