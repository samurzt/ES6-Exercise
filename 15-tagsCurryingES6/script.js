let tag = (tagName)=>(tagProperties)=>(textContent)=>
        {
            var totalElement=`<${tagName}`;
            for(var property in tagProperties)
                {
                    totalElement += ` ${property}="${tagProperties[property]}"`
                }
            totalElement += `>${textContent}</${tagName}>`;
            return totalElement;
        }



let h1 = tag('h1');
console.log(h1);


let mainH1 = h1({
    class: 'main'
});
console.log(mainH1);


let secondaryH1 = h1({
    class: 'secondary',
    style: 'color: red;'
});
console.log(secondaryH1);


let HTML = tag('div')({})(`${mainH1('This is main')} ${secondaryH1('This is secondary')}`);
console.log(HTML);
