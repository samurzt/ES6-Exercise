"use strict";
import styleConsoleLib from './styleConsoleLib.js';

let themesAvailable = styleConsoleLib.getAvailableThemes();

for (let i=0; i < themesAvailable.length; i++) {
    console.log("Trying theme", themesAvailable[i]);
    styleConsoleLib.setConsoleTheme(themesAvailable[i]);   
    styleConsoleLib.log("hi log");
    styleConsoleLib.info("hi info");
    styleConsoleLib.warn("hi warn");
    styleConsoleLib.error("hi error");
}