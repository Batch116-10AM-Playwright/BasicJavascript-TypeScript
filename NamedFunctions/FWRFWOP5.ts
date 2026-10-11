function adding()   : number  
{
    let a : number = 15;
    let b : number = 84;
    console.log("The Sum of A and B is : " +(a+b))
    let r : string = "Ring";
    return a;
    return b;   //Unreachable code detected
}

console.log(adding());  //first --> function calls  , second --> it gets the return value 