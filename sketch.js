//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;

var shapeTool = null;
var undoRedoManager = null;


function setup() {

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");

	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	undoRedoManager = new UndoRedoManager();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCanTool);
	toolbox.addTool(new mirrorDrawTool());

	var shapeTool = new ShapeTools();
	toolbox.addTool(shapeTool);
	background(255);

	var customBrush = new CustomBrush();
	toolbox.addTool(customBrush);

	select('#shapeSelector').changed(function() {
        var selectedShape = select('#shapeSelector').value();
        shapeTool.changeSelectedShape(selectedShape); 
    });

	select('#undoButton').mouseClicked(function() {
		console.log("Undo button clicked");
        undoRedoManager.undo();
    });

	select('#redoButton').mouseClicked(function() {
		console.log("Redo button clicked");
        undoRedoManager.redo();
    });

	undoRedoManager.saveState();
}

function draw() {
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
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