"use strict";

let colorConsoleThemes = [{
        themeName: "theme1",
        log: "background: black; color: white",
        info: "background: blue; color: white",
        warn: "background: yellow; color: black",
        error: "background: red; color: white",
    }, {
        themeName: "theme2",
        log: "background: black; color: green",
        info: "background: green; color: red",
        warn: "background: yellow; color: black",
        error: "background: black; color: red",
    }, {
        themeName: "theme3",
        log: "background: white; color: green",
        info: "background: blue; color: white",
        warn: "background: blue; color: black",
        error: "background: green; color: red",
    },

];

let currentTheme = colorConsoleThemes[0];


let consoleStyleFunctions = {
    log: (message) => {
        console.log("%c" + message, colorConsoleThemes[currentTheme].log);
    },
    info: (message) => {
        console.info("%c" + message, colorConsoleThemes[currentTheme].info);
    },

    warn: (message) => {
        console.warn("%c" + message, colorConsoleThemes[currentTheme].warn);
    },
    error: (message) => {
        console.error("%c" + message, colorConsoleThemes[currentTheme].error);
    },
};

function getAvailableThemes() {
    return colorConsoleThemes.map((x) => {
        return x.themeName;
    });
}

function setConsoleTheme(themeName) {
    let themeIndex = getAvailableThemes().indexOf(themeName);
    if (themeIndex != -1) {
        currentTheme = themeIndex;
    }
}

module.exports = {
    setConsoleTheme: setConsoleTheme,
    getAvailableThemes: getAvailableThemes,
    consoleStyleFunctions: consoleStyleFunctions,
    log: consoleStyleFunctions.log,
    info: consoleStyleFunctions.info,
    warn: consoleStyleFunctions.warn,
    error: consoleStyleFunctions.error,

};