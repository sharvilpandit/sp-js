//objects in java script

const actor={
    name:"ak",
    height:5,
    weight:80,
    hero:true,
    villain:false,
    fly (){
        return "gym and gym";
    }

}

const name={name:"sp", realName:"spstack"};

console.log(actor);
console.log(name.name);
console.log(name.realName);
console.log(name['name']);

const fav={name:'iz',['hei' + 'ght']:'500'};
console.log(fav);

const realname=Symbol('realName');
name['realname']='stacksummation';
console.log(name);
console.log(actor.fly());

console.log(name.hasOwnProperty('city'));

console.log(name.hasOwnProperty('name'));
