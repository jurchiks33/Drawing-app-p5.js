// Global variable for drawing app
var brushSize;                  // Global variable for brush size.
var toolbox = null;             // Toolbox containing drawing tools.
var colourP = null;             // Colour pallete for color selection.
var helpers = null;             // Helper functions for additional features.
var shapeTool = null;           // Tool for drawing shapes.
var undoRedoManager = null;     // Undo and redo functionality manager.
var canvasContainer;            // Container for the canvas.

// Initialization for canvas and application state.
function setup() {
    canvasContainer = select('#content');   //Container setup
    var optionsBox = select('.options');    //Options box containing UI elements

    //Calculation of the available space for the canvas.
    let sidebarWidth = select('#sidebar').width;
    let availableWidth = windowWidth - sidebarWidth;
    let availableHeight = windowHeight - optionsBox.height - 20;    //Change to adjust options box height
    var c = createCanvas(availableWidth, availableHeight);
    c.parent("content");        //Set parent of the canvas for proper positioning.

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

    //Calling setupThemeSelector function from themes.js
    setupThemeSelector();

    //Setup of random image generation feature.
    addRandomImageGenerator();

    //Ensure that canvas fits available space when setup is compleate.
    windowResized();
}

function draw() {
    //Check if currently selected tool in a toolbx has a draw method and calls it.
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}
}

function windowResized() {
    //Recalculate the available width and height.
    let sidebar = select('#sidebar');
    let header = select('.header');
    let options = select('.options');
    // let footer = select('.footer');   //if i will have one

    if (sidebar && header && options) {
        let newHeight = windowHeight - header.height - options.height;
        let newWidth = windowWidth - sidebar.width;

        //Resize canvas if window is resized.
        resizeCanvas(newWidth, newHeight);
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
    // Create the size slider 
    var brushSlider = createSlider(1, 100, brushSize);
    brushSlider.class('brush-size-slider');
    brushSlider.parent(select('.options'));
    brushSlider.input(() => {
        brushSize = brushSlider.value();
        //label for a brush slider.
        brushSizeLabel.html('Brush Size:' + brushSize);
    });

    //Creating a label for a brush size slider.
    var brushSizeLabel = createDiv('Brush Size:' + brushSize);
    brushSizeLabel.class('brush-size-label');
    brushSizeLabel.parent(select('.options'));

    //Position of a label below the slider.
    brushSizeLabel.position(brushSlider.x, brushSlider.y - 20);
}

function setupUIListeners() {
    //Changes for shape tool based un users selection.
    select('#shapeSelector').changed(function() {
        var selectShape = select('#shapeSelector').value(); //Get value of selected shape.
        shapeTool.changeSelectedShape(selectShape);         //Change shape in shape tool for selected one.
    });

    //Event listener for Undo button clicking.
    select('#undoButton').mouseClicked(function() {
        console.log("Undo button clicked");                 //For debugging.
        undoRedoManager.undo();                             //Call undo function of the undo/redo manager.
    });

    //Event listener for redo function.
    select('#redoButton').mouseClicked(function() {
        console.log("Redo button clicked");                 //Log for debugging.
        undoRedoManager.redo();                             //Call redo function of the undo/redo manager.
    });
}