//form validation

let form=document.forms['userdata'];
let uname=document.getElementById('username');
let pwd=document.getElementById('pwd');
let email=document.getElementById("mail");
let city=document.getElementById('city');
let submit=document.getElementById('submit');
form.addEventListener("submit",validate,false)
console.log("checked")
function p1(){
}
function validate(event){
    console.log("hey");
    event.preventDefault();
    let m=document.getElementById('male');
    let fm=document.getElementById('female');

    if(uname.value === ''){
        document.getElementById("namerror").innerHTML="Pls fill name";

    }
    if(pwd.value === '' || pwd.value.length<8){
        document.getElementById("pwderror").innerHTML="Pls fill password.Must be of 8 Digits";       
    }
    if(email.value === ''){
        document.getElementById("mailerror").innerHTML="Pls fill Email";
    }
    if(city.value ===''){
        document.getElementById("cityerror").innerHTML="Pls Select the City";    
    }
    if(m.checked===false && fm.checked===false){
        document.getElementById("generror").innerHTML="Pls Select a valid option";
    }
    else{
        if(m.checked===true){
            let data={
                username:uname.value,
                mail:document.getElementById('mail').value,
                usercity:city.value,
                gendata:m.value
               }
               console.log(data);
               let tbody = document.createElement("tbody");
       document.getElementById("printdata").appendChild(tbody);
       
       let row_1 = document.createElement("tr");
       
       let heading_1 = document.createElement("td");
       heading_1.innerHTML = data.username;
       let heading_2 = document.createElement("td");
       heading_2.innerHTML = data.mail;
       let heading_3 = document.createElement("td");
       heading_3.innerHTML = data.usercity;
       let heading_4 = document.createElement("td");
       heading_4.innerHTML = data.gendata;
       
       
       
       row_1.appendChild(heading_1);
       row_1.appendChild(heading_2);
       row_1.appendChild(heading_3);
       row_1.appendChild(heading_4);
       
       tbody.appendChild(row_1);
        }
        else if(fm.checked===true){
            let data={
                username:uname.value,
                mail:document.getElementById('mail').value,
                usercity:city.value,
                gendata:fm.value
               }
               let tbody = document.createElement("tbody");
       document.getElementById("printdata").appendChild(tbody);
       
       let row_1 = document.createElement("tr");
       
       let heading_1 = document.createElement("td");
       heading_1.innerHTML = data.username;
       let heading_2 = document.createElement("td");
       heading_2.innerHTML = data.mail;
       let heading_3 = document.createElement("td");
       heading_3.innerHTML = data.usercity;
       let heading_4 = document.createElement("td");
       heading_4.innerHTML = data.gendata;
       
       
       
       row_1.appendChild(heading_1);
       row_1.appendChild(heading_2);
       row_1.appendChild(heading_3);
       row_1.appendChild(heading_4);
    
       tbody.appendChild(row_1);
        }
           
    }
    
    
}





//    for(i=0;i<uname.length;i++){
//     console.log(values,"is value loop");

//     let row_2 = document.createElement("tr");
//     row_2.setAttribute("id","foo");

//     let data1 = document.createElement("td");
//     row_2.appendChild(data1);
//     data1.innerHTML = values;
//     tbody.appendChild(row_2);
//    }


