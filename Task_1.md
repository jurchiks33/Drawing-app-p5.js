1. Outline your project and which exstensions you are building on the template.(400 words)

Your answer should include:

    Which of the templates you are extending and why have you chosen to do it. 

    What extensions have you chosen to do. You should include in your answer: 
    any complex coding techniques you will need to use, (such as arrays of objects, 
    constructor functions, nested looping); 
    the complexity of the extension; 
    and any expected challenges you will have implementing it.


Drawing application extensions choosen to build are listed below. They are choosen due to popularity among the users in a simillar applications
and due to challenges they can represent to the coding which will give good coding practice.

Extensions choosen:

1. Shape Tool:
    Description: This extension allows user to draw various shapes. As a starting combo of shapes was choosen resctangle, ellipse, star, triangle and pentagon.
                 Users can select a shape from dropdown menu in the top menu of the application and draw shape into a canvas by clicking mouse and moving it.

    Complex Techniques: In a shape tool i was using constructor function to define "ShapeTools" class.
                        There were used arrays to manage different shapes and nested looping for more difficult shapes like star and pentagon.

    Complexity and Challenges: Most challenging and complex was implementing accurate geometric solutions for shapes, especially for star and pentagon.
                               One of the biggest and complex challenge was ensuring that shapes scale properly as user drags the mouse, which requires management of coordinates.

2. Custom Brush:
    Description: Custom brush tool simulate a paintbrush by creating multiple strokes with different opacity and thickness around tthe main line.

    Complex Techniques:  Was used advanced 'for' loop to create multiple brush strokes. (atleast for me it seemed advanced)
                         Also was used randomization to vary stroke properties like position, opacity, thickness.
    
    Complexity and Challenges: Main challenge was to achieve brush effect which involved tuning of the randomization parameters and making sure brush strokes
                               blend well in canvas. At the very start of the tool it looked just like freehand tool.

3. Undo/Redo Manager:
    Description: This tool allows users to undo and redo their actions in canvas and it is a critical feature in a drawing app allowing users to correct mistakes.
                 Users can undo actions with control+z and redo with control+y (working). Also users get a buttons for undo/redo, which are still work in a progress
                 and for some reson are not working, will try to fix it in coming weeks or find a creative way around it. (hints on this bug appreciated in a feedback ;)