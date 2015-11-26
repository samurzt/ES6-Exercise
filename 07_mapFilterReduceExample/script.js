//script to create a map for an array
const a = [1, 2, 3, 4, 5];
console.log("before map: a is",a);
const b= a.map( (x) => { return x*2; } );
console.log("after map: a is",a);
console.log("after map: b is",b);



//script to double odd numbers
console.log("double odd numbers");
console.log("before map: a is",a);

let c= a.map( (x) => { 
    if(x%2==0)return x; 
    else return x*2; 
} );

console.log("after map: a is",a);
console.log("after map: c is",c);



//script to remove even numbers
console.log("remove even numbers");
console.log("before map: a is",a);

let d= a.filter( (x) => { 
    return(x%2!==0);
} );

console.log("after map: a is",a);
console.log("after map: d is",d);



//script to sum of numbers in the array using reduce
console.log("sum of numbers in the array using reduce");
console.log("before map: a is",a);

let e= a.reduce( (sum, x) => { 
    return sum+x;
},0 );

console.log("after map: a is",a);
console.log("after map: sum is",e);

