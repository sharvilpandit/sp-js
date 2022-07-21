//arrays
const ar=[];
const ar1=new Array();

console.log(ar[0]);

ar[0]="sp";
ar[1]="ds";
ar[4]="up";

console.log(ar);

let co=["ts","ss","tcs",[],"eclinicalworks"];
console.log(co);
delete co[4];
console.log(co);

val=co[4];
console.log(val);

let [x,y]=[2,4];
console.log(x,y);
[x,y]=[y,x];
console.log("after swapping x and y = "+ x+ " " +y);

console.log(co.length);
console.log(co[co.length-1]);
co.length=8;
console.log(co);

co=co.concat(["tm","an","ai"]);
co=[...co, ...["synoverge"]];
console.log(co);

co=co.join()
console.log(co);

let iz=["sp","ssp","ssbp","ssbp"];
sa=iz.slice(1,4);
console.log(sa);
console.log(iz);

sa=iz.splice(3,1,"vp");
console.log(sa);
console.log(iz);

console.log(iz.reverse());

if (iz[1]=="isp"){
    console.log("miracle");

}
else if(iz[2]=="ssp") {
    console.log("nice");
}
else {
    console.log("are re");
}
console.log(iz);

for(i=0;i<iz.length;i++)
{
    console.log(iz[i]);
    console.log("\n next element is: ");
}