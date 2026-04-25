let display=document.body;
let btn=document.querySelector("button");


function change(){
    let colors=["red","blue","green","yellow"];
    let random=Math.floor(Math.random()*colors.length);
    let randomcolor=colors[random];
    display.style.background=randomcolor;
    btn.style.background=randomcolor;
}


