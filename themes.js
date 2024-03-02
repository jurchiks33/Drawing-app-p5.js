//in this file we have themes for app. linked to main sketch.js file.

//below are themes for app, starting with 4 and after adding more as needed.
var themes = {
    "Christmas": {
        backgroundColor: "#FF0000",     // Red
        buttonColor: "#FFFFFF",         // White
        slideColor: "#00FF00",          // Green
        toolIconColor: "#FFFFFF",       // White
    },
    "City": {
        backgroundColor: "#707070",     // Grey
        buttonColor: "#000000",         // Black
        slideColor: "#FFD700",          // Gold
        toolIconColor: "#FFFFFF",       // White
    },
    "Classic": {
        backgroundColor: "#FFFFFF",     // White
        buttonColor: "#000000",         // Black
        slideColor: "#C0C0C0",          // Silver
        toolIconColor: "#000000",       // Black
    },
    "Cosmic": {
        backgroundColor: "#0B3D91",     // Dark Blue
        buttonColor: "#FFA500",         // Orange
        slideColor: "#800080",          // Purple
        toolIconColor: "#FFFFFF",       //White
    }   
};

// Function to apply a theme.
function applyTheme(themeName) {
    var theme = themes[themeName];
    if(theme) {
        //set background color.
        document.body.style.backgroundColor = theme.backgroundColor;

        //set button color
        var buttons = document.querySelectorAll('.button');
        buttons.forEach(function(button) {
            button.style.backgroundColor = theme.buttonColor;
            button.style.color = theme.toolIconColor;
        });

        //Set slider color
        var sliders = document.querySelectorAll('.brush-size-slider');
        sliders.forEach(function(slider) {
            slider.style.backgroundColor = theme.slideColor;
        });

        //Set tool icon colors
        
    }
}