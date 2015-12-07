"use strict";
let consoleStyleFunctions = {
    error: (message) => {
        console.error("%c" + message, "background: red; color: white");
    },
    info: (message) => {
        console.info("%c" + message, "background: blue; color: white");
    },
    log: (message) => {
        console.log("%c" + message, "background: black; color: white");
    },
    warn: (message) => {
        console.warn("%c" + message, "background: yellow; color: black");
    },
};


function setStyleToConsole(consoleStyle) {
    switch (consoleStyle.func) {
        case 'log':
            consoleStyleFunctions.log =
                function(message) {
                    console.log("%c" + message, consoleStyle.style);
                };
            break;

        case 'info':
            consoleStyleFunctions.info =
                function(message) {
                    console.info("%c" + message, consoleStyle.style);
                };
            break;

        case 'warn':
            consoleStyleFunctions.warn =
                function(message) {
                    console.warn("%c" + message, consoleStyle.style);
                };
            break;

        case 'error':
            consoleStyleFunctions.error =
                function(message) {
                    console.error("%c" + message, consoleStyle.style);
                };
            break;

        default:
            break;
    }

}



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

function getAvailableThemes() {
    return colorConsoleThemes.map((x) => {
        return x.themeName;
    });
}

function setConsoleTheme(themeName) {
    for (let i = 0; i < colorConsoleThemes.length; i++) {
        if (themeName == colorConsoleThemes[i].themeName) {
            setStyleToConsole({
                func: 'log',
                style: colorConsoleThemes[i].log
            });
            setStyleToConsole({
                func: 'info',
                style: colorConsoleThemes[i].info
            });
            setStyleToConsole({
                func: 'warn',
                style: colorConsoleThemes[i].warn
            });
            setStyleToConsole({
                func: 'error',
                style: colorConsoleThemes[i].error
            });
            break;
        }
    }
}

module.exports = {
    setStyleToConsole: setStyleToConsole,
    setConsoleTheme: setConsoleTheme,
    getAvailableThemes: getAvailableThemes,
    consoleStyleFunctions: consoleStyleFunctions
};