function UndoRedoManager() {
    this.undoStack = [];
    this.redoStack = [];

    this.saveState = function() {
        this.redoStack = [];
    }
}