"use strict";

let convert = (() => {
    let ONEMILETOKM = 1.60934;
    let ONEFEETTOINCH = 12; //inches     
    
    let validateValue = (value, fun) => {
            if (value == null || value == "") {
                throw new Error("Value not defined for " + fun);
            } else {
                return true;
            }

        };
    
    return {
        kmtomile: (value) => {
            if (validateValue(value, "kmtomile"))
                return value / ONEMILETOKM;
        },
        miletokm: (value) => {
            if (validateValue(value, "miletokm"))
                return value * ONEMILETOKM;
        },
        feettoinch: (value) => {
            if (validateValue(value, "feettoinch"))
                return value * ONEFEETTOINCH;
        },
        inchtofeet: (value) => {
            if (validateValue(value, "inchtofeet"))
                return value / ONEFEETTOINCH;
        },
    }
})();



module.exports = {
    convert: convert
};