// this file is responsible for a random image generation.

function addRandomImageGenerator() {
    let pixelInput, drawButton;
    pixelInput = createInput('1000');
    pixelInput.position(350, height - 160);  // adjust position if needed.
    pixelInput.size(100);

    drawButton = createButton('Draw Random');
    drawButton.position(460, height - 160); //Adjust position if needed.
    drawButton.mousePressed(() => {
        const totalPixels = parseInt(pixelInput.value());
        drawRandomPixels(totalPixels);
    });
}

// function drawRandomPixels(totalPixels) {
//     loadPixels();   //preparing canvas for pixel manipulation.
//     for (let i = 0; i < totalPixels; i++) {
//         let x = floor(random(width));
//         let y = floor(random(height));
//         let col = color(random(255), random(255), random(255));
//         set(x, y, col);
//     }
//     updatePixels();
// }

function drawRandomPixels(totalPixels) {
    //Choose random starting location to start drawing.
    let x = floor(random(width));
    let y = floor(random(height));

    for (let i = 0; i < totalPixels; i++) {
        //set random color for each pixel.
        let col = color(random(255), random(255), random(255));
        set(x, y, col);

        //Choose random direction by picking a random angle.
        let angle = random(TWO_PI);
        //Decide how far to move in a given direction.
        let stepSize = 1 // Adjust to make larger gaps between steps/

        //Move to the next point.
        x += cos(angle) * stepSize;
        y += sin(angle) * stepSize;

        //If we go outside canvas, wrap around othe rside
        x = (x + width) % width;
        y = (y + height) % height;
    }

    updatePixels();
}