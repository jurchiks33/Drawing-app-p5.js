4. List any external sources that you have actively utilised in your project. 
This should include:

    any code you have used from external sources directly

    any code that you have taken inspiration from 
    but adapted and refined for the project (such as pseudocode algorithms or code pens)

    any online help forums you have taken code from (i.e. StackOverflow or library documentation)

    any third-party libraries you are using.

You do not need to include everything you have read or that has helped you. 
Only where you have used or adapted code that appears in your project.

External resources used in Drawing app are:
    P.js Library.
            For star in shape tool were used and adapted star code from p5.js library.
                function star(x, y, radius1, radius2, npoints) {
                                let angle = TWO_PI / npoints;
                                let halfAngle = angle / 2.0;
                                beginShape();
                                for (let a = 0; a < TWO_PI; a += angle) {
                                    let sx = x + cos(a) * radius2;
                                    let sy = y + sin(a) * radius2;
                                    vertex(sx, sy);
                                    sx = x + cos(a + halfAngle) * radius1;
                                    sy = y + sin(a + halfAngle) * radius1;
                                    vertex(sx, sy);
                                }
                                endShape(CLOSE);
                                }

                Pentagon:
                            function polygon(x, y, radius, npoints) {
                            let angle = TWO_PI / npoints;
                            beginShape();
                            for (let a = 0; a < TWO_PI; a += angle) {
                                let sx = x + cos(a) * radius;
                                let sy = y + sin(a) * radius;
                                vertex(sx, sy);
                            }
                            endShape(CLOSE);
                            }
    Stack Overflows:
                    For a custom brush direction of a code was taken from. It served as a 
                    base example to see how to make tool and which way code should be organized.
                                                            function setup() {
                                    createCanvas(200, 200);
                                    background("black");
                                    stroke("white");
                                    gradientLine(0, 0, 50, 50, 1, 3, 30);
                                    noLoop();
                                    }

                                    function gradientLine(
                                    start_x,
                                    start_y,
                                    end_x,
                                    end_y,
                                    start_weight,
                                    end_weight,
                                    segments
                                    ) {
                                    let prev_loc_x = start_x;
                                    let prev_loc_y = start_y;
                                    for (let i = 1; i <= segments; i++) {
                                        let cur_loc_x = lerp(start_x, end_x, i / segments);
                                        let cur_loc_y = lerp(start_y, end_y, i / segments);
                                        push();
                                        strokeWeight(lerp(start_weight, end_weight, i / segments));
                                        line(prev_loc_x, prev_loc_y, cur_loc_x, cur_loc_y);
                                        pop();
                                        prev_loc_x = cur_loc_x;
                                        prev_loc_y = cur_loc_y;
                                    }
                                    }


    CodePen.
    W3Schools.
    