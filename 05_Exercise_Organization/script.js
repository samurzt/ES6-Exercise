//find all employees of razorthink
//find all employees of apple whose age is less than 30

import Immutable from 'immutable';

const people = Immutable.fromJS([{
    name: 'Sandeep',
    empId: 0,
    age: 23,
    orgId: 1
}, {
    name: 'Arjun',
    empId: 1,
    age: 25,
    orgId: 2
}, {
    name: 'Nanha',
    empId: 3,
    age: 22,
    orgId: 1
}, {
    name: 'Nandu',
    empId: 4,
    age: 53,
    orgId: 3
}]);

var organizations = Immutable.fromJS([{
    name: 'Razorthink',
    id: 1,
    employees: [0, 3]
}, {
    name: 'Apple',
    id: 2,
    employees: [1]
}, {
    name: 'Microsoft',
    id: 3,
    employees: [4]
}]);

function getCompanyIdByName(companyName) {
    return (organizations.filter((x) => { return x.get('name') == companyName; }).get(0).get('id') );
}

let rztId = getCompanyIdByName('Razorthink');

let rztEmployees = people.filter((e) => { return (e.get('orgId') == rztId); });
console.log("Razorthink Employees: ");
rztEmployees.forEach(
    (item, index, array)=>
    {
        console.log(item.get('name'));
    }
);


let appleId = getCompanyIdByName('Apple');
let appleEmployees = people.filter((e) => { return (e.get('orgId') == appleId && e.get('age') < 30); });
console.log("Apple Employees: ");
appleEmployees.forEach(
    (item, index, array)=>
    {
        console.log(item.get('name'));
    }
);