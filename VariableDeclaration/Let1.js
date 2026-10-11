

let mycar = "Maruthi"   //declaring the value
console.log(mycar)

mycar = 9090; //re-assigning 

console.log(mycar)  //9090

//let mycar = "Four Tyres";  //re-declaring the value   //SyntaxError: Identifier 'mycar' has already been declared

{
    console.log(mycar) //accessing outside block to into block //9090
    let myfriend = "Knowledge"
    console.log(myfriend)  //accessing inside block to inside block  //Knowledge
}

//console.log(myfriend)   //ReferenceError: myfriend is not defined

