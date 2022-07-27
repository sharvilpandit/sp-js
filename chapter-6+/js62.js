//event-2

const clickParagraph=document.getElementById('click');
clickParagraph.addEventListener('click',()=>console.log('click'));
clickParagraph.addEventListener('mousedown',()=>console.log('down'));
clickParagraph.addEventListener('mouseup',()=>console.log('up'));


const dblclickParagraph=document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick',highlight);

function highlight(event){
    event.target.classList.toggle('highlight');
}

const mouseParagraph=document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover',highlight);
mouseParagraph.addEventListener('mouseout',highlight);

mouseParagraph.addEventListener('mousemove',()=>console.log('you moved'));


addEventListener('keydown',highlight);
addEventListener('keyup',(event)=>console.log('you stopped pressing'));
//addEventListener('keydown',(event)=>console.log(`you pressed the ${event.key} key`));


addEventListener*('keydown',(event)=>{
    if(event.key==='c' && event.key==='control'){
        console.log('Action cancelled');
    }
});
addEventListener*('keydown',(event)=>{
    if(event.shiftkey){
        console.log('A Shifty click');
    }
});

const brokenlink=document.getElementById('broken');
brokenlink.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log('Broken link');
});

