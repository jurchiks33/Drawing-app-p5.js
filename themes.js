//in this file we have themes for app. linked to main sketch.js file.

//below are themes for app, starting with 4 and after adding more as needed.
var themes = {
    "Christmas": {
        backgroundColor: "#FF0000",        // Red
        buttonColor: "#55801F",            // Christmas dark green, Button color
        slideColor: "#00FF00",             // Green
        toolIconColor: "#FFB5B5",          // Light red for text in buttons
        boxBackgroundColor: "#D14836",     // Bottom and side box
        headerBackgroundColor: "#A5FF33",  //Christmas light green, header
    },
    "City": {
        backgroundColor: "#707070",     // Grey
        buttonColor: "#C75D00",         // Black, button color
        slideColor: "#FFD700",          // Gold
        toolIconColor: "#FFFFFF",       // White Button text color
        boxBackgroundColor: "#D2AF6C",     //Bottom and side box
        headerBackgroundColor: "#9E988D",  //Header
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
        toolIconColor: "#FFFFFF",       // White
    }   
};

function applyTheme(themeName) {
    var theme = themes[themeName];
    if (theme) {
        document.documentElement.style.setProperty('--background-color', theme.backgroundColor);
        document.documentElement.style.setProperty('--button-color', theme.buttonColor);
        document.documentElement.style.setProperty('--slider-color', theme.slideColor);
        document.documentElement.style.setProperty('--tool-icon-color', theme.toolIconColor);
        
        document.documentElement.style.setProperty('--box-bg-color', theme.boxBackgroundColor || theme.backgroundColor);
        document.documentElement.style.setProperty('--header-bg-color', theme.headerBackgroundColor || theme.backgroundColor);

        var buttons = document.querySelectorAll('.button');
        buttons.forEach(button => {
            button.style.backgroundColor = theme.buttonColor;
            button.style.color = theme.toolIconColor;
        });

        var sliders = document.querySelectorAll('.brush-size-slider');
        sliders.forEach(slider => {
            slider.style.backgroundColor = theme.slideColor;
        });

        var toolIcons = document.querySelectorAll('.tool-icon');
        toolIcons.forEach(icon => {
            icon.style.color = theme.toolIconColor;
        });
    } else {
        console.error('Theme not found:', themeName);
    }
}

function setupThemeSelector() {
    var themeSelector = select('#themeSelector');
    if (themeSelector) {
        themeSelector.changed(()  => {
            var selectedTheme = themeSelector.value();
            applyTheme(selectedTheme);
    });

    } else {
        console.error('Theme selector not found');
    }
}