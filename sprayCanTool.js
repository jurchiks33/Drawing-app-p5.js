
function SprayCanTool() {
    this.name = "sprayCanTool";
    this.icon = "assets/sprayCan.jpg";
    this.points = 13; 

    this.draw = function() {
        if (mouseIsPressed) {
            var currentSpread = brushSize; 
            for (var i = 0; i < this.points; i++) {
                point(random(mouseX - currentSpread, mouseX + currentSpread),
                      random(mouseY - currentSpread, mouseY + currentSpread));
            }
        }
    }
};