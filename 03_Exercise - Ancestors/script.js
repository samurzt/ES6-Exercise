const peopleTree = {
 "sandeep": "shashi",
 "nanha": "shashi",
 "harish": "nanha",
 "divya": "harish",
 "arjun": "sandeep",
 "shashi": "vinoj",
 "vishal": "divya"
}

const ages = {
 'sandeep': 23,
 'shashi': 26,
 'nanha': 22,
 'harish': 24,
 'divya': 30,
 'arjun': 25,
 'vinoj': 26,
 'vishal': 5
}


class Person
{
    
    constructor(personName, peopleTree, ages)
    {
            this.ancestors = [];
            this.ages = [];   
            this.getAncestors(personName, peopleTree, ages); 
    }

    getAncestors(personName, peopleTree, ages)
    {
        this.ancestors.push(personName);
        this.ages.push(ages[personName]);
        
        if(peopleTree[personName])
        {
            this.getAncestors(peopleTree[personName], peopleTree, ages);
        }
        else
        {
            return;
        }
    }
}

let sandeep = new Person('sandeep', peopleTree, ages);
console.log("ancestors:", sandeep.ancestors);
console.log("ages:", sandeep.ages);

let vishal = new Person('vishal', peopleTree, ages);
console.log("ancestors:", vishal.ancestors);
console.log("ages:", vishal.ages);`