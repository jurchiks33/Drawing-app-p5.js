# Drawing App

A versatile and interactive drawing application built using the p5.js library. 
The app provides a variety of tools for freehand drawing, 
                                        shape creation, 
                                        custom brushes, 
                                        and more, 
making it ideal for artists and anyone who enjoys digital doodling.

## Features

- **Colour Palette**: Choose from a variety of colors to set the brush stroke and fill color.
- **Freehand Tool**: Draw freely on the canvas with adjustable brush sizes.
- **Custom Brush**: Use a brush with randomized strokes for a unique drawing effect.
- **Shape Tools**: Draw various shapes including rectangles, ellipses, stars, triangles, and pentagons.
- **Line Tool**: Draw straight lines between two points.
- **Mirror Draw Tool**: Create mirrored drawings along a vertical or horizontal axis.
- **Spray Can Tool**: Simulate spray painting with scattered points.
- **Undo/Redo**: Easily undo or redo actions to refine your artwork.
- **Save/Load**: Save your drawings as PNG files directly from the app.

## Getting Started

### Prerequisites

- A modern web browser.
- [p5.js](https://p5js.org/) library.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jurchiks33/drawing-app-p5.js.git

    Navigate to the project directory:

    bash

    cd drawing-app

    Open index.html in your preferred web browser.

Running the App

    Open the index.html file in a web browser.
    Use the toolbar on the left to select different drawing tools.
    Adjust settings using the controls at the top (e.g., brush size, shape type, theme).
    Start drawing on the canvas!

File Structure

    index.html: Main HTML file containing the structure of the app.
    lib/: Directory containing the p5.js library and its DOM extension.
    assets/: Directory containing icons for tools and other assets.
    toolbox.js: Contains the logic for the toolbox and tool selection.
    colourPalette.js: Handles the color palette and color selection.
    helperFunctions.js: Contains helper functions for additional features like clearing and saving the canvas.
    freehandTool.js, lineToTool.js, mirrorDrawTool.js, etc.: Individual tool scripts defining behavior for each tool.
    themes.js: Defines various themes for the app and functions to apply them.
    style.css: Stylesheet for the app layout and design.

Customization

You can customize the app by adding new tools, modifying existing ones, or changing the UI:

    Adding New Tools: Create a new tool file in the project, define the tool's behavior, and add it to the toolbox in toolbox.js.
    Modifying Themes: Update or add new themes in themes.js to change the look and feel of the app.
    Adjusting Layout: Modify style.css to change the UI layout and styling.

Contributing

Contributions are welcome! Please follow these steps:

    Fork the repository.
    Create a new branch:

    bash

git checkout -b feature/your-feature-name

Commit your changes:

bash

git commit -m "Add your message here"

Push to your branch:

bash

    git push origin feature/your-feature-name

    Open a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for more details.
Acknowledgements

    p5.js - A JavaScript library that makes coding accessible for artists, designers, educators, and beginners.
    Icons and assets from various free sources.

Contact

For any questions, feel free to open an issue or contact jurchiks33.

vbnet


This README file includes sections on the app's features, how to get started, file structure
