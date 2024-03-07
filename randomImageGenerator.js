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

function drawRandomPixels(totalPixels) {
    loadPixels();   //preparing canvas for pixel manipulation.
    for (let i = 0; i < totalPixels; i++) {
        let x = floor(random(width));
        let y = floor(random(height));
        let col = color(random(255), random(255), random(255));
        set(x, y, col);
    }
    updatePixels();
}