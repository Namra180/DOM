let cl = console.log;


//forEach : can not returns . can not create new array automatically.

let num = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let newArray = [];
num.forEach(n => {
    newArray.push(n + 2);
});
cl(newArray);


//for in loop : it gives the index number.
let newnum = [];
for(let key in num){
    cl(key);
    let dbNo = num[key] * 2;
    newnum.push(dbNo);
}
cl(newnum);


//for of loop : it gives array elements.
let newNum =[];
for(let key of num){
    cl(key);
    newNum.push(key * 2);
}
cl(newNum);



//------------------------Map Methods---------------------//

//Map : we have given array ad we have to create new array
//it return a new array
//by applying same functionality on every element of the given array
//by map methods


//by forEach loop :: and used time method
console.time('forEach');
var Num = [10,15,30,40,50,60,70,80];
let newA = [];
Num.forEach(n =>{
    newA.push(n * 2);
});
cl(newA);
console.timeEnd('forEach');


//By map method :: and used time method
console.time('map');
let doubleNum = Num.map(function(params){ 
    return params * 3;
});
cl(doubleNum);
console.timeEnd('map');


//By sqrt method :: and tofixed
var Num = [10,15,30,40,50,60,70,80];
let arr = [];
Num.forEach(params => {
    let sqrt = +Math.sqrt(params).toFixed(2);
    arr.push(sqrt);
})
cl(arr);


//By map method
let sqtArr = Num.map((param) =>{
    return +Math.sqrt(param).toFixed(2);
})
cl(sqtArr);


//refactor means one liner code
let numbers = [3,5,7,8,9];
let sqt = numbers.map(para => +Math.sqrt(para).toFixed(2));
cl(sqt);


//show it 
var companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

//create newarray of company name

let newcompany = [];
for(let i = 0; i < companies.length; i++){
    newcompany.push(companies[i].name);
};
cl(newcompany);
