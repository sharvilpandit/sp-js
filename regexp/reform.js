let form = document.forms['userdata'];
let uname = document.getElementById('username');
let umail = document.getElementById('umail');
let cntct=document.getElementById('contact');
let password = document.getElementById('pwd');
let city = document.getElementById('city');
let submit = document.getElementById('submit');
form.addEventListener('submit', validate, false);
submit.disabled=true;

let regname = /^(\w){2,20}$/;
let regmail = /^[A-Za-z_]{1,}@[A-Za-z]{1,}[.]{1}[A-Za-z.]{1,6}$/;
let regpwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
let regct=/^(\+)?(\d){10,13}$/;

uname.addEventListener('keypress', () => {
    control();
    if (uname === '') {
        validate();
       
    } else {
        document.getElementById('namerror').innerHTML = '';
       
    }
});
umail.addEventListener('keypress', () => {
    control();
    if (umail === '') {
        validate();
       
    } else {
        document.getElementById('mailerror').innerHTML = '';
       
    }
});
umail.addEventListener('blur', () => {
    control();
    if (umail.value.match(regmail)) {
        document.getElementById('mailerror').innerHTML = '';
        
    } else {
        document.getElementById('mailerror').innerHTML =
            'Pls Enter valid mail with @ and .';
        
    }
});
cntct.addEventListener('keypress',()=>{
    control();
    if(cntct==''){
       validate();
       
    }
    else{
        document.getElementById('cnterror').innerHTML='';
    }
});
cntct.addEventListener('blur',()=>{
    control();
    if(cntct.value.match(regct)){
        document.getElementById('cnterror').innerHTML='';
        
    }
    else{
        document.getElementById('cnterror').innerHTML='Pls Enter Valid Contact';
        
    }
});
password.addEventListener('keypress', () => {
    control();
    if (password === '') {
        validate();
       
    } else {
        document.getElementById('pwderror').innerHTML = '';
        
    }
});
password.addEventListener('blur', () => {
    control();
    if (password.value.match(regpwd)) {
        document.getElementById('pwderror').innerHTML = '';
        
    } else {
        document.getElementById('pwderror').innerHTML =
        
            'Pls Enter valid password with Uppercase,lowercaseand number';
           
    }
});
city.addEventListener('click', () => {
    control();
    if (city === '') {
        validate();
        
    } else {
        document.getElementById('cityerror').innerHTML = '';
       
    }
});
male.addEventListener('click', () => {
    control();
    if (male.checked == false) {
        validate();
      
    } else {
        document.getElementById('generror').innerHTML = '';
         
    }
    
});
female.addEventListener('click', () => {
    control();
    if (female.checked == false) {
        validate();
       
    } else {
        document.getElementById('generror').innerHTML = '';
    }
});
let table=document.createElement('table');
table.setAttribute("class","table table-striped table-bordered p-5 m-auto")
let h1 =document.createElement('th');
h1.innerHTML="Name"
let h2 =document.createElement('th');
h2.innerHTML="Contact"
let h3 =document.createElement('th');
h3.innerHTML="mail"
let h4 =document.createElement('th');
h4.innerHTML="city"
let h5 =document.createElement('th');
h5.innerHTML="Gender"
let thead=document.createElement('tr');
thead.setAttribute("class","fs-1")
table.appendChild(thead)
function validate(event) {
    event.preventDefault();
    
    
    let male = document.getElementById('male');
    let female = document.getElementById('female');

    if (uname.value.match(regname)) {
        document.getElementById('namerror').innerHTML = '';
        
        
    } else {
        document.getElementById('namerror').innerHTML = 'Pls enter name';
        
    }
    if (umail.value.match(regmail)) {
        document.getElementById('mailerror').innerHTML = '';
        
        console.log(umail.value);
    } else {
        document.getElementById('mailerror').innerHTML = 'Pls enter mail';
       
    }
    if (cntct.value.match(regct)) {
        document.getElementById('cnterror').innerHTML = '';
        
        console.log(cntct.value);
    } else {
        document.getElementById('cnterror').innerHTML = 'Pls enter Contact';
        
    }
    if (password.value.match(regpwd)) {
        document.getElementById('pwderror').innerHTML = '';
        
        console.log(password.value);
    } else {
        document.getElementById('pwderror').innerHTML = 'Pls enter pwd';
       
    }
    if (city.value == '') {
        document.getElementById('cityerror').innerHTML = 'Pls Select city';
    } else {
        document.getElementById('cityerror').innerHTML = '';
        
    }
    if (male.checked == false && female.checked == false) {
        document.getElementById('generror').innerHTML = 'Pls. Select Gender';
    
    } else if (male.checked == true || female.checked == true) {
        document.getElementById('generror').innerHTML = '';
        
    }
   
    if (
        !uname.value.match(regname) ||
        !umail.value.match(regmail) ||
        !password.value.match(regpwd) ||
        !cntct.value.match(regct)||
        city.value===''||
        (male.checked==false && female.checked==false)) {
        console.log(false)
        return false;
    } 

 
    let tr=document.createElement('tr');
    tr.setAttribute("class","fs-3")
    
    table.appendChild(tr)
    
    thead.appendChild(h1)
    thead.appendChild(h2)
    thead.appendChild(h3)
    thead.appendChild(h4)
    thead.appendChild(h5)



   
    let col1=document.createElement("td");
    col1.innerHTML=uname.value;

    let col2=document.createElement("td");
    col2.innerHTML=cntct.value;

    let col3=document.createElement("td");
    col3.innerHTML=umail.value;

    let col4=document.createElement("td");
    col4.innerHTML=city.value;

    let col5=document.createElement("td");
    if(male.checked==true){
        col5.innerHTML=male.value;
    }
    else if(female.checked==true){
        col5.innerHTML=male.value;
    }


    tr.appendChild(col1);
    tr.appendChild(col2);
    tr.appendChild(col3);
    tr.appendChild(col4);
    tr.appendChild(col5);
    
    document.getElementById("output").appendChild(table);
}

function control(){
    if (
        !uname.value.match(regname) ||
        !umail.value.match(regmail) ||
        !password.value.match(regpwd) ||
        !cntct.value.match(regct)||
        city.value==='') {
        submit.disabled=true;
    }
    if (
        uname.value.match(regname) &&
        umail.value.match(regmail) &&
        password.value.match(regpwd) &&
        cntct.value.match(regct)&&
        city.value!=='') {
        submit.disabled=false;
    }
    
}

