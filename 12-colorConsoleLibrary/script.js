"use strict";
import * as styleConsoleLib from './styleConsoleLib.js';

styleConsoleLib.setStyleToConsole( { func:'log', style: "background: black; color: white" } );
styleConsoleLib.setStyleToConsole( { func:'info', style: "background: blue; color: white" } );
styleConsoleLib.setStyleToConsole( { func:'warn', style: "background: yellow; color: black" } );
styleConsoleLib.setStyleToConsole( { func:'error', style: "background: red; color: white" } );

styleConsoleLib.consoleStyleFunctions.log("hi log");
styleConsoleLib.consoleStyleFunctions.info("hi info");
styleConsoleLib.consoleStyleFunctions.warn("hi warn");
styleConsoleLib.consoleStyleFunctions.error("hi error");