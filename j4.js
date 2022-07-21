//functions
//this is how we are going to code for such basic functions
const hi=new Function('console.log("hello");');
console.log(hi);


function hello(){
    console.log("hey  bro");
}

hello();

hello;

seeya=hello;
seeya();

function f1() {
    return "f1 called with return value";
}

const msg=f1();
console.log(msg); 

function square(x) {
    return x*x;
    
}

document.writeln(square(5));

function mean(a,b,c) {
    return (a+b+c)/3;
}
document.writeln("\n");
document.writeln(mean(5,10,15));

function arguments(){
    return arguments;
}

console.log(arguments(1,2,3,4,5));
console.log(arguments(1));

//not done about the arguments.

function rest(...args) {
    
    for (arg of args){
        console.log(arg);
    }
}

rest(2,4,6,8,10,12);

function means(...values) {
    let total=0;

    for (let value of values){
     total += value;
    }
    
    return total/values.length;
}

document.writeln(means(5,10,15));

function f2(name='world') {
    console.log(`Hello ${name}`);
}

f2();

f2('universe');

function discount(price,amount=10){
    return price*(100-amount)/100;
}

console.log(discount(250));


const add=(x,y) => x+y;
const f3=()=>alert("Hey user");

const tax=(salary)=> {

    let taxable=salary-8000;
    const lowerrate=0.25*taxable;
    taxable=taxable-20000;
    const higherrate=0.4*taxable;
    return "tax for your salary is \n"+(lowerrate-higherrate);
}

console.log(tax(20000));
let a;
/*function sing(song){
    console.log(`Welcome to the ${song}`);

     callback();

}
if(typeof(a)==='function'){
    callback(); 
}

function dance(){
    console.log("I am sharvil mean dev");
}

sing('Stack Summation',dance);*/

let a1=[2,3,5,8,12,13];
a1=a1.filter(x=>x%2===0)
console.log(a1);
let acc;
sp=[1, 2, 3].map ( x => x*x ).reduce( (acc, x) => acc + x,0 );
console.log(acc);
console.log(sp);