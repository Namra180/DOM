let cl = console.log;

//HOF >> Array helping methods >> A function which accepts another function as argument is called HOF
//callback function >> A function which passed as argument in another function
//OR
//A function which we will call after something happend or execute

//forEach :
//can not returns 
//can not create new array automatically.

//map : 
//we have given array and we have to create new array
//it returns a new array
//by applying same functionality on every element of the given array

//filter:
//we have given array with at least one condition
//we have to create a array of those element who pass the given condition
//length of the new arrray may be or may not == length of the given array
//it will return the all element (in the form of array) who satisfied the given conditions
//if there is no element who satisfies given condition === [];
//it will gives us array not element
//filter ke callback function ke block me direct condition ko return karo

//find:
//we have given array with at least one condition 
//we have to find a element who pass the condition
//it will return the 1st element who satisfied the given condition 
//if there is no element who satisfied given condition === undefined
//it will give us single value / element (not array)


//-----------Example 1 :  return the first company whose catg is retail

//By using filter
var companies = [
    { name: "Company One", id: 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: 2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: 4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", id: 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: 9, category: "Retail", start: 1981, end: 1989 }
];

let result = companies.filter((params) => {
    return params.category.toLowerCase().includes('retail');
});
cl(result[0]);

//By using find
var companies = [
    { name: "Company One", id: 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: 2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: 4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", id: 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: 9, category: "Retail", start: 1981, end: 1989 }
];

let result1 = companies.find((params) => {
    return params.category.toLowerCase().includes('retail');
});
cl(result1);

//By using forloop
var companies = [
    { name: "Company One", id: 1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: 2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: 3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: 4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", id: 5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: 6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: 7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: 8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: 9, category: "Retail", start: 1981, end: 1989 }
];

for (let i = 0; i < companies.length; i++) {
    if (companies[i].category.toLowerCase().includes('retail')) {
        cl(companies[i]);
        break;
    }
}


//-----------Example 2 :find the first number whose value > 10----------//

//By using find
var num = [7,5,9,3,12,28,61,89,20,45,67,64];

let result2 = num.find((params) =>{
    return params > 10
});
cl(result2);


//-----------Example 3 :find the first product whose name is laptop----------//

//By using filter
var product = [
    {
        id : 1, name : 'Laptop', price : 80000
    },
    {
        id : 2, name : 'phone', price : 40000

    },
    {
        id : 3, name : 'laptop', price : 60000
    },
    {
        id : 4, name : 'tablet', price : 30000
    }
]

let result3 = product.filter((params) =>{
    return params.name.toLowerCase().includes('laptop');
});
cl(result3);

//By using find
var product = [
    {
        id : 1, name : 'Laptop', price : 80000
    },
    {
        id : 2, name : 'phone', price : 40000

    },
    {
        id : 3, name : 'laptop', price : 60000
    },
    {
        id : 4, name : 'tablet', price : 30000
    }
]

let result4 = product.find((params) =>{
    return params.name.toLowerCase().includes('laptop');
});
cl(result4);