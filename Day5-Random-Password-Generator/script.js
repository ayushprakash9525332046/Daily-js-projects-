const passwordBox=document.getElementById("Password");


const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="!@#$%^&*()_+";


const Alltype=upper+lower+number+symbol;

function generatePassword(){
      let Password="";
      
      const length=document.getElementById("Password").value;
      
      Password+=upper[Math.floor(Math.random()*upper.length)];
      Password+=lower[Math.floor(Math.random()*lower.length)];
      Password+=number[Math.floor(Math.random()*number.length)];
      Password+=symbol[Math.floor(Math.random()*symbol.length)];

      while(length>Password.length){
        Password+=Alltype[Math.floor(Math.random()*Alltype.length)];
      }

      passwordBox.value=Password;

}

function passwordCopy(){
  passwordBox.select();
  document.execCommand("copy");
  alert("Code Copy");
}

