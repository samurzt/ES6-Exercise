function InputOutputElementSetter(inputTextId, OutputFunction, outputTextId) {
    let res;
    let inputVal = document.getElementById(inputTextId).value;
    res = OutputFunction(inputVal);
    document.getElementById(outputTextId).innerHTML = res;
}

module.exports = {
    InputOutputElementSetter: InputOutputElementSetter,
};