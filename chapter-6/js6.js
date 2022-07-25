//Events

console.log("Events");

function doSomething(event){
    console.log(`screen:(${event.screenX},${event.screenY}),page:(${event})`);
}
addEventListener('click',doSomething);