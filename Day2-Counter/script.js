let count=0;
let display=document.getElementById("count");


function increment(){
    count=count+1;
    display.innerText=count;
}

function reset(){
    display.innerText="0";
}

function decrement(){
    count=count-1;
    display.innerText=count;
}
