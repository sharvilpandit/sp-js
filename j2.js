const myname={value:'I am sharvil'};
myname.value='Myself Pandit';
console.log(myname.value);

const b=2;
console.log ("b=" +b)
let a=b;
console.log(a + "=a");
a=4;
console.log(a + "=a , b=" + b);

const c={value:2}
let d=c;
d.value=4;
console.log("c is "+c.value + " d is" + d.value);


const uniqueId=Symbol();
console.log(uniqueId);

let type=typeof 42;
console.log(type)

type=Number.isInteger(42);
console.log(type);

let add=10+null;
console.log(add);

let verify=Boolean('hello')
console.log(verify)