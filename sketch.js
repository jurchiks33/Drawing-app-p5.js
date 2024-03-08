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
    var optionsBox = select('.options');

    //Here is coming experimental feature

    let availableWidth = windowWidth - select('#sidebar').width;

    let availableHeight = windowHeight - optionsBox.height - 20;

    var c = createCanvas(availableWidth, availableHeight);
    c.parent("content");
    //Here ends experimental feature.

    // //Create canvas that fills the container.
    // var c = createCanvas(windowWidth, windowHeight);
    // c.parent("content");

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
    //Resize canvas iw window is resized.
    resizeCanvas(windowWidth, windowHeight);
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


//Experimential starts

function windowResized() {
    // Recalculate the available width and height
    let availableWidth = windowWidth - select('#sidebar').width;
    let availableHeight = windowHeight; // Adjust as needed
    // Resize canvas to fit the new available space
    resizeCanvas(availableWidth, availableHeight);
}
//Experimential ends
}