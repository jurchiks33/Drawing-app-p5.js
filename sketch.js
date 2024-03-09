// Global variables for the application.
var brushSize;                  // Global variable for brush size.
var toolbox = null;             // Toolbox containing drawing tools.
var colourP = null;             // Colour palette for selecting colors.
var helpers = null;             // Helper functions for additional features.
var shapeTool = null;           // Tool for drawing shapes.
var undoRedoManager = null;     // Manager for undo and redo functionality.
var canvasContainer;            // Container for the canvas.

//Initializes the canvas and application state.
function setup() {
    canvasContainer = select('#content');   // Container setup.
    var optionsBox = select('.options');    // Options box containing UI elements.

    //Calculate the available space for the canvas.
    let sidebarWidth = select('#sidebar').width;
    let availableWidth = windowWidth - sidebarWidth;
    let availableHeight = windowHeight - optionsBox.height - 20; // Adjust the height for options box.
    var c = createCanvas(availableWidth, availableHeight);
    c.parent("content");     // Set the parent of the canvas for proper positioning.

    // Application initialization.
    brushSize = 10;                 // Initialize the brush size to a default value.
    initializeGlobalOptions();      // Initialize global UI options.
    initializeToolsAndHelpers();    // Initialize tools and helper functions.
    setupUIListeners();             // Setup event listeners for UI elements.
    setupThemeSelector();           // Setup theme selector from themes.js.
    addRandomImageGenerator();      // Setup random image generation feature.

    windowResized(); // Adjust canvas size after setup is complete.
}

//Continuously executes and handles drawing.
function draw() {
    if (toolbox.selectedTool && toolbox.selectedTool.hasOwnProperty("draw")) {
        toolbox.selectedTool.draw(); // Call the draw method of the selected tool.
    } else {
        console.error("Selected tool does not have a draw method!");
    }
}

// Adjusts canvas size when the browser window is resized.
function windowResized() {
    // Recalculate the available width and height for the canvas.
    let sidebar = select('#sidebar');
    let header = select('.header');
    let options = select('.options');

    if (sidebar && header && options) {                                 // Ensure all UI elements are selected successfully.
        let newHeight = windowHeight - header.height - options.height;  // Account for UI elements heights.
        let newWidth = windowWidth - sidebar.width;                     // Adjust width for sidebar.
        resizeCanvas(newWidth, newHeight);                              // Resize the canvas.
    }
}

// Event handlers for interaction.
function mousePressed() {
    if (toolbox.selectedTool instanceof ShapeTools) {
        toolbox.selectedTool.mousePressed(); // Call mousePressed on the selected shape tool.
    }
}

function mouseReleased() {
    if (toolbox.selectedTool instanceof ShapeTools) {
        toolbox.selectedTool.mouseReleased();   // Call mouseReleased on the selected shape tool.
    }
    undoRedoManager.saveState();                // Save the state for undo/redo functionality.
}

function keyPressed() {
    if (keyCode === 90 && keyIsDown(CONTROL)) {         // Ctrl + Z for undo.
        undoRedoManager.undo();
    } else if (keyCode === 89 && keyIsDown(CONTROL)) {  // Ctrl + Y for redo.
        undoRedoManager.redo();
    }
}

// Initializes UI related elements.
function initializeGlobalOptions() {
    var brushSlider = createSlider(1, 100, brushSize);  // Slider for brush size.
    brushSlider.class('brush-size-slider');
    brushSlider.parent(select('.options'));             // Place the slider within the options box.
    brushSlider.input(() => {
        brushSize = brushSlider.value();                // Update the brush size when the slider is moved.
        brushSizeLabel.html('Brush Size:' + brushSize); // Update the brush size label.
    });

    // Create a label for the brush size slider
    var brushSizeLabel = createDiv('Brush Size:' + brushSize);
    brushSizeLabel.class('brush-size-label');
    brushSizeLabel.parent(select('.options')); // Place the label within the options box
}

// Initializes the toolbox, colour palette, helpers, and undo/redo manager
function initializeToolsAndHelpers() {
    helpers = new HelperFunctions(); // Initialize helper functions
    colourP = new ColourPalette(); // Initialize the colour palette
    toolbox = new Toolbox(); // Initialize the toolbox
    undoRedoManager = new UndoRedoManager(); // Initialize the undo/redo manager

    // Add tools to the toolbox
    toolbox.addTool(new FreehandTool());
    toolbox.addTool(new LineToTool());
    toolbox.addTool(new SprayCanTool());
    toolbox.addTool(new mirrorDrawTool());
    shapeTool = new ShapeTools();
    toolbox.addTool(shapeTool);

    background(255); // Set the background to white
    var customBrush = new CustomBrush(); // Initialize a custom brush tool
    toolbox.addTool(customBrush); // Add the custom brush to the toolbox
}

// Sets up event listeners for UI elements such as buttons and selectors
function setupUIListeners() {
    // Change shape tool based on user selection
    select('#shapeSelector').changed(() => {
        var selectedShape = select('#shapeSelector').value();
        shapeTool.changeSelectedShape(selectedShape);
    });

    // Event listeners for buttons: undo, redo, etc.
    select('#undoButton').mouseClicked(() => undoRedoManager.undo());
    select('#redoButton').mouseClicked(() => undoRedoManager.redo());
}
