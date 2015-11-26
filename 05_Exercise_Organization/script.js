//find all employees of razorthink
//find all employees of apple whose age is less than 30

const people = [{
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
}]

var organizations = [{
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
}];

function getCompanyIdByName(companyName) {
    return (organizations.filter((x) => { return x.name == companyName; })[0].id );
}

let rztId = getCompanyIdByName('Razorthink');
let rztEmployees = people.filter((e) => { return (e.orgId == rztId); });
console.log("Razorthink Employees: ");
for (let x in rztEmployees) {
    console.log(rztEmployees[x]);
}

let appleId = getCompanyIdByName('Apple');
let appleEmployees = people.filter((e) => { return (e.orgId == appleId && e.age < 30); });
console.log("Apple Employees: ");
for (let x in appleEmployees) {
    console.log(appleEmployees[x]);
}