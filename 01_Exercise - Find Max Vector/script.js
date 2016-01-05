import Immutable from 'immutable';

const points = Immutable.fromJS([{
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
}]);


let maxvector = getMaxVector(points);


function getMaxVector(points)
{
       let maxvector=Immutable.Map({
            vector: 0,
            point1Index: 0,
            point2Index: 0
        });
    points.map((pointA, aIndex)=>{
     points.map((pointB, bIndex) => {
        let vector = Math.sqrt(Math.pow(pointA.get('x') - pointB.get('x'), 2) + Math.pow(pointA.get('y') - pointB.get('y'), 2));
        if (vector > maxvector.get('vector')) {
            maxvector = maxvector.set('vector', vector);
            maxvector = maxvector.set('point1Index',aIndex);
            maxvector = maxvector.set('point2Index', bIndex) ;
        }
     });
    }); 
    return maxvector;
}

console.log("Max vector: ", maxvector.toJS());

console.log("Max vector: ", maxvector.get('vector'));
console.log("point1: ", points.get(maxvector.get('point1Index')).toJS());
console.log("point2: ", points.get(maxvector.get('point2Index')).toJS());
