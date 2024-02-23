// Global variable for brush size
var brushSize;

// Global variables for the toolbox, colour palette, helpers, etc.
var toolbox = null;
var colourP = null;
var helpers = null;
var shapeTool = null;
var undoRedoManager = null;
var canvasContainer;

function setup() {
    // Select container for the canvas
    canvasContainer = select('#content');

    //Create canvas that fills the container.
    var c = createCanvas(windowWidth, windowHeight);
    c.parent("content");

    // Initialize the brush size
    brushSize = 10; // Set a default size

    //Initialize global options.
    initializeGlobalOptions();

    // initialize helper, colour palette and toolbox and undo/redo functions
    helpers = new HelperFunctions();
    colourP = new ColourPalette();
    toolbox = new Toolbox();
    undoRedoManager = new UndoRedoManager();

    // Add the tools to the toolbox
    toolbox.addTool(new FreehandTool());
    toolbox.addTool(new LineToTool());
    toolbox.addTool(new SprayCanTool());
    toolbox.addTool(new mirrorDrawTool());

    shapeTool = new ShapeTools();
    toolbox.addTool(shapeTool);

    //Setting background to white
    background(255);

    var customBrush = new CustomBrush();
    toolbox.addTool(customBrush);

    //Setup for event listeners for UI elements.
    setupUIListeners();

    undoRedoManager.saveState();
}

function draw() {
    //
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}
}

function mousePressed() {
    if (toolbox.selectedTool instanceof ShapeTools) {
        toolbox.selectedTool.mousePressed();
    }
}

function mouseReleased() {
    if (toolbox.selectedTool instanceof ShapeTools) {
        toolbox.selectedTool.mouseReleased();
    }
    undoRedoManager.saveState(); 
}

function keyPressed() {
	if (keyCode === 90 && keyIsDown(CONTROL)) { // Ctrl + z Undo
		undoRedoManager.undo();
	} else if (keyCode === 89 && keyIsDown(CONTROL)) {   // CTRL + Y Redo
		undoRedoManager.redo();
	}
}

function initializeGlobalOptions() {
    // Create the size slider or any other global options
    var brushSlider = createSlider(1, 100, brushSize);
    brushSlider.class('brush-size-slider');
    brushSlider.parent(select('.options'));
    brushSlider.input(() => {
        brushSize = brushSlider.value();
    });
}