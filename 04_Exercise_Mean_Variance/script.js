const list = [1, 2, 3, 4];

function getMean(list) {
    return list.reduce((sum, x) => {return sum + x;}, 0) / list.length;
}

function getVariance(list) {
    let mean = getMean(list);
    return list.reduce((sum, x) => { return sum + Math.pow((x - mean), 2); }, 0) / list.length;
}

console.log("List:", list);
console.log("Mean:", getMean(list));
console.log("Variance:", getVariance(list));