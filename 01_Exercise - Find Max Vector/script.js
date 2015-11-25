const points = [{
    x: 1,
    y: 1
}, {
    x: -1,
    y: 1
}, {
    x: -1,
    y: -1
}, {
    x: 1,
    y: -1
}, {
    x: 2,
    y: 2
}, {
    x: -1,
    y: 2
}, {
    x: -1,
    y: -2
}, {
    x: 1,
    y: -2
}, {
    x: 1,
    y: 6
}, {
    x: -1,
    y: 4
}, {
    x: -3,
    y: -1
}, {
    x: 1,
    y: -1
}, {
    x: 10,
    y: 1
}, {
    x: -1,
    y: 11
}, {
    x: -1,
    y: -1
}, {
    x: 1,
    y: -1
}];


let maxvector = getMaxVector(points);


function getMaxVector(points=[])
{
       let maxvector={
            vector: 0,
            point1Index: 0,
            point2Index: 0
        };
    points.map((pointA, aIndex)=>{
     points.map((pointB, bIndex) => {
        let vector = Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2));
        if (vector > maxvector.vector) {
            maxvector.vector = vector;
            maxvector.point1Index = aIndex;
            maxvector.point2Index = bIndex;
        }
     });
    }); 
    return maxvector;
}

/*for (let i = 0; i < points.length; i++) {
     points.map((p) => {
        let vector = Math.sqrt(Math.pow(points[i].x - p.x, 2) + Math.pow(points[i].y - p.y, 2));
        if (vector > maxvector.vector) {
            maxvector.vector = vector;
            maxvector.point1Index = i;
            maxvector.point2Index = points.indexOf(p);
        }
    });
}
*/

console.log("Max vector: ", maxvector.vector);
console.log("point1: ", points[maxvector.point1Index]);
console.log("point2: ", points[maxvector.point2Index]);