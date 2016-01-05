import Immutable from 'immutable';

const peopleTree = Immutable.Map({
 "sandeep": "shashi",
 "nanha": "shashi",
 "harish": "nanha",
 "divya": "harish",
 "arjun": "sandeep",
 "shashi": "vinoj",
 "vishal": "divya"
});

const ages = Immutable.Map({
 'sandeep': 23,
 'shashi': 26,
 'nanha': 22,
 'harish': 24,
 'divya': 30,
 'arjun': 25,
 'vinoj': 26,
 'vishal': 5
});


class Person
{
    
    constructor(personName, peopleTree, ages)
    {
            this.ancestors = Immutable.List([]);
            this.ages = Immutable.List([]);   
            this.getAncestors(personName, peopleTree, ages); 
    }

    getAncestors(personName, peopleTree, ages)
    {
        this.ancestors = this.ancestors.push(personName);
        this.ages = this.ages.push(ages.get(personName));
        
        if(peopleTree.get(personName))
        {
            this.getAncestors(peopleTree.get(personName), peopleTree, ages);
        }
        else
        {
            return;
        }
    }
}

let sandeep = new Person('sandeep', peopleTree, ages);
console.log("ancestors:", sandeep.ancestors.toArray());
console.log("ages:", sandeep.ages.toArray());

let vishal = new Person('vishal', peopleTree, ages);
console.log("ancestors:", vishal.ancestors.toArray());
console.log("ages:", vishal.ages.toArray());