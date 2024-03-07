// this file is responsible for a random image generation.

function addRandomImageGenerator() {
    let pixelInput, drawButton;
    pixelInput = createInput('1000');
    pixelInput.position(10, height + 40);  // adjust position if needed.
    pixelInput.size(100);

    drawButton = createButton('Draw Random');
    drawButton.position(120, height + 40); //Adjust position if needed.
    drawButton.mousePressed(() => {
        const totalPixels = parseInt(pixelInput.value());
        drawRandomPixels(totalPixels);
    });
}

function drawRandomPixels(totalPixels) {
    for (let i = 0; i < totalPixels; i++) {
        let x = floor(random(width));
        let y = floor(random(height));
        let col = color(random(255), random(255), random(255));
        setInterval(x, y, col);
    }
    updatePixels();
}