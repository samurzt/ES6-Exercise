"use strict";
var consoleStyleFunctions =
     {
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
    switch (consoleStyle.func) 
    {
        case 'log':
            consoleStyleFunctions.log=
            function(message) {
                   console.log("%c" + message, consoleStyle.style);
            };
        break;
                               
        case 'info':
             consoleStyleFunctions.info=
            function(message) {
                   console.info("%c" + message, consoleStyle.style);
            };
        break;
                               
        case 'warn':
              consoleStyleFunctions.warn=
            function(message) {
                   console.warn("%c" + message, consoleStyle.style);
            };
        break;
                                
        case 'error':
              consoleStyleFunctions.error=
            function(message) {
                   console.error("%c" + message, consoleStyle.style);
            };
            break;
                                
        default:
            break;
    }

    }


module.exports = {
    setStyleToConsole: setStyleToConsole,
    consoleStyleFunctions: consoleStyleFunctions
};
