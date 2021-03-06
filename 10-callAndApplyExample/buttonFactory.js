// Code goes here

var buttonFactory = {
    message: "this is a button factory message for ",

    create: function(btn) {
        let parent, text, onClick, style, parentElement, cssText;
        parent = btn.parent;
        text = btn.text || "";
        onClick = btn.onClick;
        style = btn.style;


        try {

            parentElement = document.querySelector(parent);

            if (!parentElement) {
                throw new Error("Wrong parent element");
            }
        } catch (e) {

            console.error(e);
            return;
        }

        let newbtn = document.createElement("button");
        newbtn.textContent = text;
        if (onClick) {
            newbtn.onclick = onClick;
        }

        if (style) {
            cssText = "";
            for (let st in style) {
                cssText += " " + st + ":" + style[st] + ";";
            }
        }
        newbtn.style.cssText = cssText;
        newbtn.id = new Date().getUTCMilliseconds();
        parentElement.appendChild(newbtn);
        return newbtn.id;
    },

    setText: function(btn) {
        try {
            let button = document.getElementById(btn.button);
            if (!button) {
                throw new Error("wrong button id");
                return;
            }
            button.textContent = btn.text || "";
        } catch (e) {

            console.error(e);
            return;
        }

    },

    setOnClickListener: function(btn) {
        try {
            let button = document.getElementById(btn.button);
            if (!button) {
                throw new Error("wrong button id");
                return;
            }
            button.onclick = btn.onClick;
        } catch (e) {
            console.error(e);
            return;
        }


    },

    ShowMessageByCall: function(button, text) {
        console.log(this.message + button + ": " + text);
        console.log("Arguements are:", arguments);
    },

    ShowMessageByApply: function(button, text) {
        console.log(this.message + button + ": " + text)
        console.log("Arguements are:", arguments);
    },

};

module.exports = {
    buttonFactory : buttonFactory
};