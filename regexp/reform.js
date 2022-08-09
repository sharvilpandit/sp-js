let form=document.forms['userdata'];
let uname=document.getElementById("username");
let umail=document.getElementById("umail");
let password=document.getElementById("pwd");
let city=document.getElementById("city");
let submit=document.getElementById("submit");
form.addEventListener("submit",validate,false);

let regname=/^(\w){2,20}$/;
let regmail=/^[A-Za-z_]{1,}@[A-Za-z]{1,}[.]{1}[A-Za-z.]{1,6}$/;
let regpwd=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;

uname.addEventListener("keypress",()=>{
    if(uname===''){
        validate
    }
    else{
        document.getElementById('namerror').innerHTML='';
    }
});
umail.addEventListener("keypress",()=>{
     if(umail===''){
        validate
    }
    else{
        document.getElementById('mailerror').innerHTML='';
    }
});
password.addEventListener("keypress",()=>{
     if(password===''){
        validate
    }
    else{
        document.getElementById('pwderror').innerHTML='';
    }
});
city.addEventListener("click",()=>{
     if(city===''){
        validate
    }
    else{
        document.getElementById('cityerror').innerHTML='';
    }
});
male.addEventListener("click",()=>{
     if(male.checked==false){
        validate
    }
    else{
        document.getElementById('generror').innerHTML='';
    }
});
female.addEventListener("click",()=>{
    if(female.checked==false){
        validate
    }
    else{
        document.getElementById('generror').innerHTML='';
    }
});

function validate(event){
    event.preventDefault();
   let male=document.getElementById('male');
   let female=document.getElementById('female');
    
    
    if(uname.value.match(regname)){
        document.getElementById('namerror').innerHTML='';
        
    }
    else{
        document.getElementById('namerror').innerHTML='Pls enter name';
    }
    if(umail.value.match(regmail)){
        document.getElementById('mailerror').innerHTML='';
        console.log(umail.value)
    }
    else{
        document.getElementById('mailerror').innerHTML='Pls enter valid mail';
    }
    if(password.value.match(regpwd)){
        document.getElementById('pwderror').innerHTML='';
        console.log(password.value)
    }
    else{
        document.getElementById('pwderror').innerHTML='Pls enter valid pwd';
    }
    if(city.value==""){
        document.getElementById('cityerror').innerHTML='Pls Select city';
    }
    else{
        document.getElementById('cityerror').innerHTML='';
    }
    if(male.checked==false && female.checked==false){
        document.getElementById('generror').innerHTML='Pls. Select Gender';
    }
    else if(male.checked==true || female.checked==true){
        document.getElementById('generror').innerHTML=''; 
    }
    if(uname.value.match(regname) ||umail.value.match(regmail) || password.value.match(regpwd) ){
        return false;
    }

}
