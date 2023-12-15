// varible-declaration 
// we can declare varible in three ways
// let, const, var

let area = 'naem';
console.log(area);
// in this program we cannot find the value because  we declare value of a after
// either we used 
console.log(b);
var b = 'khurshid';
// here we have b =khurshid this is main fault in var declaration they jump
// before exceute


// this is error way in both case let,const

// datatypes
let a = 'khurshdhi';
console.log(a);
// array method
const person = ['ali', 'khursdhhi', 'aliam', 'mohd'];
const email = person[2] = 'apocho@gmail.com';
console.log(email);
// var add = email.push('mynae');
// console.log(person);
// console.log(add);
// if we have two array
const arr1 = ['1', '2', '3', '4', '6'];
const arr2 = ['a', 'b', 'c', 'd'];
const arr3 = arr1.concat(arr2);
console.log(arr3);
const arr1Add1 = arr1['2'] = 'remove3';
console.log(arr1Add1);
console.log(arr1);

// arry index
const person1 = ['alam', 'arlam', 'sajid', 'wasim'];
const person1Leader = person1[3];
console.log(person1Leader);

// if we addd more than
const ar1 = ['10', '20', '30', '40', '50'];
const ar1Add = ar1.push('4000');
console.log(ar1);

// array length find out thAN
const arr4 = ['11', '22', '33', '44', '55'];
const arr4LastElem = arr4.indexOf(arr4);
console.log(arr4LastElem);
console.log(arr4.length);

// array method with exampple

// Array toString()
let dishes = ['briyani', '3', '5', '6'];
console.log(dishes);
// datatype =Object
console.log(typeof (dishes).toLocaleString());
// here convert in String



// Array pop() if we fined last index
let con = ['1', '2', '3', '4', '5', '55'];
let removeCon = con.pop();
console.log(removeCon);
// Array push() if we add at last
let con1 = ['a', 'b', 'c', 'd', 'e'];
let fiCon1 = con1.push('f');
console.log(con1);
console.log(fiCon1)
// Array shift() if we remove first index
let arr5 = ['1', '3', '5', '7', '8'];
let arr5S = arr5.shift('1');
console.log(arr5S);


