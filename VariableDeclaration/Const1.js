const mycar = "Hyderabad"  //we are declaring the value
console.log(mycar)

//mycar = "Begumpet"  //re-assigning  //TypeError: Assignment to constant variable.

//const mycar = "Uppal" //re-declaring  //SyntaxError: Identifier 'mycar' has already been declared

{
    console.log(mycar)   //accessing outside data into inside of block //Hyderabad
    const myinfo = "Wipro"
    console.log(myinfo)  //inside data into inside of a block  //wipro
}

//console.log(myinfo)  //accessing inside of a block into outside of a block  //ReferenceError: myinfo is not defined