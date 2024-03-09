// This file is responsible for the random image generation feature in the drawing app.

//Sets up the input field and button for triggering random image generation.
function addRandomImageGenerator() {
    // Create an input field for specifying the number of pixels to draw.
    let pixelInput = createInput('1000');
    pixelInput.position(350, height + 40); // Adjust the position as needed.
    pixelInput.size(100);

    // Create a button that, when pressed, draws the specified number of pixels.
    let drawButton = createButton('Draw Random');
    drawButton.position(460, height + 40); // Adjust the position as needed.
    drawButton.mousePressed(() => {
        const totalPixels = parseInt(pixelInput.value(), 10);
        drawRandomPixels(totalPixels);
    });
}

/**
 * Draws a specified number of pixels in random directions from a starting point.
 * @param {number} totalPixels - The total number of pixels to draw.
 */
function drawRandomPixels(totalPixels) {
    // Choose a random starting location for the drawing.
    let x = floor(random(width));
    let y = floor(random(height));

    loadPixels(); // Prepare the canvas for pixel manipulation.

    for (let i = 0; i < totalPixels; i++) {
        // Set a random color for each pixel.
        let col = color(random(255), random(255), random(255));
        set(x, y, col); // Place a pixel at the (x, y) location with the chosen color.

        // Choose a random direction by picking a random angle.
        let angle = random(TWO_PI);
        // Decide how far to move in that direction.
        let stepSize = 2; // Adjust to make larger or smaller gaps between steps.

        // Move to the next point in the chosen direction.
        x += cos(angle) * stepSize;
        y += sin(angle) * stepSize;

        // If we go outside the canvas, wrap around to the other side.
        x = (x + width) % width;
        y = (y + height) % height;
    }

    updatePixels(); // Apply the changes to the canvas.
}