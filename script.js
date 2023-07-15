/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((item)=>{
    if(item.profession === 'developer'){
      console.log(item);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((item)=>{
    if(item.profession === 'developer'){
      console.log(item);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let intern = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(intern);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let nonAdminArr = arr.filter((item)=>{
    return item.profession!=='admin';
  });
  console.log(nonAdminArr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let anotherArray = [
    { id: 4, name: "satyam", age: "23", profession: "developer" },
    { id: 5, name: "ayush", age: "24", profession: "developer" },
    { id: 6, name: "rahul", age: "125", profession: "developer" },
  ];

  arr =arr.concat(anotherArray);
  console.log(arr);
}
