//forms

console.log("form");

const forms = document.forms['form'];
let input=document.getElementById('nametxt');
console.log(forms);
form.addEventListener('submit',json,false)

// function search(event){
//     alert(`You searched for ${input.value}`);
//     event.preventDefault();
// }

function json(event){
    event.preventDefault();
    const name={};
    name.name=forms.nametxt.value;
    alert(JSON.stringify(forms));
    return  name;
}

forms.age=form.age.value