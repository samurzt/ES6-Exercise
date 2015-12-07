"use strict";
import * as styleConsoleLib from './styleConsoleLib.js';

let themesAvailable = styleConsoleLib.getAvailableThemes();

for (let i=0; i < themesAvailable.length; i++) {
    console.log("Trying theme", themesAvailable[i]);
    styleConsoleLib.setConsoleTheme(themesAvailable[i]);
    
    styleConsoleLib.consoleStyleFunctions.log("hi log");
    styleConsoleLib.consoleStyleFunctions.info("hi info");
    styleConsoleLib.consoleStyleFunctions.warn("hi warn");
    styleConsoleLib.consoleStyleFunctions.error("hi error");
}