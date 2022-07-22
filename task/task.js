//task-1

console.log("task-1");

function t1(){
   const temp_arr=["sharvil",0,undefined,'',"stacksum"];

    console.log(temp_arr);
    for(value of temp_arr){
        // console.log(value);
        value ==0 || value==undefined || value==''?console.log():console.log(value);
    }
    
}
t1()

console.log("task-2")

console.log("task-2")


const t2=() =>{

    const ar1=[1, 0, null, ' ', false, 5, 6, 7, undefined, null, 0, 9, 10];

const dupChars = ar1.filter((c, index) => {
    return ar1.indexOf(c) !== index;
});

console.log(dupChars);

    const ar2=[1, 2, 1, 5, 6, 2, 3, 1, 2, 5, 8, 9];
    const duplicate = ar2.filter((c, index) => {
        return ar2.indexOf(c) != index;
    });
    
    console.log(duplicate);
}
t2();

console.log("task-3")
function t3() {
const coun=['India','USA','UK'];
//const total=coun.length();
console.log(coun);
let temp;
/*coun.forEach((value,index)=>{
    let len=value.length;
    console.log("len: ", len);
    // console.log(typeof len)
    // console.log(`length of ${value}is ${len}`);
     temp =Math.max(len);    
     console.log(temp);
    
});*/

var lgth = 0;
var longest;

for (i = 0; i < coun.length; i++) {
    console.log('coun[i].length', coun[i].length)
  if (coun[i].length > lgth) {
    console.log('Count --', coun[i])
    var lgth = coun.length;
    longest = coun[i];
    console.log(longest);
  }
}

console.log(longest);



}
t3();

console.log("t-4")
function t4(){

    let amt=46;
    let coins=[10,5,1];
    let count=0;
    let new_arr=[];

    for(value of coins){
       
            rem = amt%value;
            let divisor=amt/value
            
            Math.floor(divisor)
            if(value == 10 ||value== 5 || value == 1){      
                divisor=rem/value   
                console.log(divisor,"is divisor");       
                console.log(rem);
                new_arr.push(value);
                
            }
            
            // console.log(newa);
            // console.log("reminder",rem);
            /*tot=value*count
            console.log(tot + "=" + value +"* " + count);
            
            console.log(tot + "is tot");*/
    }

    console.log(new_arr);
    
        
   

}
t4();