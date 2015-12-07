(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [function(require, module, exports) {
        "use strict";

        var _styleConsoleLib = require('./styleConsoleLib.js');

        var styleConsoleLib = _interopRequireWildcard(_styleConsoleLib);

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
                return obj;
            } else {
                var newObj = {};
                if (obj != null) {
                    for (var key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                }
                newObj.default = obj;
                return newObj;
            }
        }

        styleConsoleLib.setStyleToConsole({
            func: 'log',
            style: "background: red; color: white"
        });
        styleConsoleLib.setStyleToConsole({
            func: 'info',
            style: "background: blue; color: white"
        });
        styleConsoleLib.setStyleToConsole({
            func: 'warn',
            style: "background: yellow; color: black"
        });
        styleConsoleLib.setStyleToConsole({
            func: 'error',
            style: "background: red; color: white"
        });

        styleConsoleLib.consoleStyleFunctions.log("hi log");
        styleConsoleLib.consoleStyleFunctions.info("hi info");
        styleConsoleLib.consoleStyleFunctions.warn("hi warn");
        styleConsoleLib.consoleStyleFunctions.error("hi error");

    }, {
        "./styleConsoleLib.js": 2
    }],
    2: [function(require, module, exports) {
        "use strict";

        var consoleStyleFunctions = {
            error: function error(message) {
                console.error("%c" + message, "background: red; color: white");
            },
            info: function info(message) {
                console.info("%c" + message, "background: blue; color: white");
            },
            log: function log(message) {
                console.log("%c" + message, "background: black; color: white");
            },
            warn: function warn(message) {
                console.warn("%c" + message, "background: yellow; color: black");
            }
        };

        function setStyleToConsole(consoleStyle) {
            switch (consoleStyle.func) {
                case 'log':
                    consoleStyleFunctions.log = function(message) {
                        console.log("%c" + message, consoleStyle.style);
                    };
                    break;

                case 'info':
                    consoleStyleFunctions.info = function(message) {
                        console.info("%c" + message, consoleStyle.style);
                    };
                    break;

                case 'warn':
                    consoleStyleFunctions.warn = function(message) {
                        console.warn("%c" + message, consoleStyle.style);
                    };
                    break;

                case 'error':
                    consoleStyleFunctions.error = function(message) {
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

    }, {}]
}, {}, [1]);