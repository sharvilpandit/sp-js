//form validation

let form=document.forms['userdata'];
let uname=document.getElementById('username');
let pwd=document.getElementById('pwd')  ;
let city=document.getElementById('city');
let gender=document.getElementsByName('gender')
let submit=document.getElementById('submit');
form.addEventListener('submit',validate,false)

function validate(event){
    event.preventDefault();
   console.log("gner:", gender.value);  
    if(uname.value === ''){
        alert("pls fill the uname");
    }
    if(pwd.value === '' || pwd.value.length<8){
            alert("pls fill the pwd");        
    }
    if(city.value ===''){
        alert("pls select city");    
    }
    if(gender.checked){
        alert("pls select gender"); 
    }
   let data={
    username:uname.value,
    mail:document.getElementById('mail').value,
    usercity:city.value,
    gendata:gender.value
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
   heading_4.innerHTML = "Gender";
   
   row_1.appendChild(heading_1);
   row_1.appendChild(heading_2);
   row_1.appendChild(heading_3);
   row_1.appendChild(heading_4);
   tbody.appendChild(row_1);
    
}





   for(i=0;i<uname.length;i++){
    console.log(values,"is value loop");

    let row_2 = document.createElement("tr");
    row_2.setAttribute("id","foo");

    let data1 = document.createElement("td");
    row_2.appendChild(data1);
    data1.innerHTML = values;
    tbody.appendChild(row_2);
   }


