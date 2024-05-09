// Collection of key value pairs
/*
var_declaration obj_name = {
    key1 : value1,
    key2 : value2,
    key3 : value3,
    key4 : value4,
}

*/

let arr = [124, "Sam Smith"]

const student = {
    name: "Jhon Smith",
    roll: 123,
    graduated: false,
    mobile: [9999999999, 88888888888],
    address: {
        city: "BBSR",
        state: "Odisha",
        zip: 789987
    },
    getName : function(){
        return this.name
    }
}

// console.log(student);
// console.log(student.mobile[1]);
// console.log(student.address);
// console.log(student.address.city);

// console.log(student.getName());

const studens = [
    {name: "Ram", roll: 1, cgpa: 9.9},
    {name: "Sam", roll: 2, cgpa: 9.2},
    {name: "Sara", roll: 3, cgpa: 9.5},
    {name: "Will", roll: 4, cgpa: 9.8}
]

studens.forEach(function(s){
    console.log(`${s.name}, bearing roll no ${s.roll} has secured ${s.cgpa}`);
})