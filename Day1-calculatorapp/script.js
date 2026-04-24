let userinput=document.getElementById("userinput")

function add(value){
    userinput.value+=value;
}

function clearData(){
    userinput.value=null;
}

function deleteOneData(){
    userinput.value=userinput.value.slice(0,-1)
}

function CalculateResult(){
   try{
      let input=userinput.value;
      let operators=["+","-","*","/"];
    
    let operator;
    for(let i=0;i<operators.length;i++){
        if(input.includes(operators[i])){
             operator=operators[i];
             break;
        }
    }

    let parts=input.split(operator)

    let  num1=Number(parts[0]);
    let num2=Number(parts[1]);
    
    let result;

    if(operator==="+"){
         result=num1+num2;
    }
     if(operator==="-"){
         result=num1-num2;
    }
     if(operator==="*"){
        result=num1*num2;
    }
     if(operator==="*"){
        result=num1*num2;
    }

    userinput.value=result;
   }catch
   {
    userinput.value="Not Defined"
   }
}
