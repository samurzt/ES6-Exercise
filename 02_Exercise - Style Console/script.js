(() => {
    if (!window.cc) {
        window.cc = {
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
        }
    }

})();