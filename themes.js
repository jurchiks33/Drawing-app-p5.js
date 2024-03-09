// This file contains theme configurations and functions to apply these themes in the app.
// The themes are linked to the main sketch.js file and can be selected by the user.

// Definition of themes with specific color schemes for the app interface.
var themes = {
    "Christmas": {
        backgroundColor: "#FF0000",       // Red, for general background.
        buttonColor: "#C8102E",           // Berry Red, for button backgrounds.
        slideColor: "#C0C0C0",            // Snowy Silver, for sliders.
        toolIconColor: "#FFFFFF",         // Crisp White, for icons and text.
        boxBackgroundColor: "#D14836",    // Red for bottom and side boxes.
        headerBackgroundColor: "#A5FF33", // Christmas light green for header.
    },

    "City": {
        backgroundColor: "#707070",       // Grey for general background.
        buttonColor: "#C75D00",           // Brown for button backgrounds.
        slideColor: "#FFD700",            // Gold for sliders.
        toolIconColor: "#FFFFFF",         // White for icons and text.
        boxBackgroundColor: "#D2AF6C",    // Goldish for bottom and side boxes.
        headerBackgroundColor: "#9E988D", // Greyish for header.
    },

    "Classic": {
        backgroundColor: "#FFFFFF",       // White for general background.
        buttonColor: "#FFFFFF",           // White for button backgrounds.
        slideColor: "#C0C0C0",            // Silver for sliders.
        toolIconColor: "#000000",         // Black for icons and text.
        boxBackgroundColor: "#DDDAD7",    // Light grey for bottom and side boxes.
        headerBackgroundColor: "#848484", // Dark grey for header.
    },

    "Cosmic": {
        backgroundColor: "#0B3D91",       // Dark Blue for general background.
        buttonColor: "#7B1FA2",           // Deep Purple for button backgrounds.
        slideColor: "#800080",            // Purple for sliders.
        toolIconColor: "#FFFFFF",         // White for icons and text.
        boxBackgroundColor: "#2C2C34",    // Dark grey for bottom and side boxes.
        headerBackgroundColor: "#030201", // Almost Black for header.
    }   
};

// Function to apply a selected theme to the application.
function applyTheme(themeName) {
    var theme = themes[themeName];
    if (theme) {
        // Set CSS variables for the theme properties.
        document.documentElement.style.setProperty('--background-color', theme.backgroundColor);
        document.documentElement.style.setProperty('--button-color', theme.buttonColor);
        document.documentElement.style.setProperty('--slider-color', theme.slideColor);
        document.documentElement.style.setProperty('--tool-icon-color', theme.toolIconColor);
        document.documentElement.style.setProperty('--box-bg-color', theme.boxBackgroundColor || theme.backgroundColor);
        document.documentElement.style.setProperty('--header-bg-color', theme.headerBackgroundColor || theme.backgroundColor);

        // Apply the theme to button, slider, and tool icon elements.
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

// Function to initialize the theme selector in the UI.
function setupThemeSelector() {
    var themeSelector = select('#themeSelector');
    if (themeSelector) {
        themeSelector.changed(() => {
            var selectedTheme = themeSelector.value();
            applyTheme(selectedTheme);
        });
    } else {
        console.error('Theme selector not found');
    }
}