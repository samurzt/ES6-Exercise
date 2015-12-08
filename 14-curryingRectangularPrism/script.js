//ES5 code
function shape(l)
{ 
    return function(b)
    { 
        return function(h)
        {
            return l*b*h;
        } 
    }
}
oneD=shape(1);
twoD=oneD(2);
threeD=twoD(3);
console.log(threeD);


//ES6 Code
shapeRec=(l)=>(b)=>(h)=>{ return l*b*h; }
console.log(shapeRec(1)(2)(3));