var mycar = "Red and Black"  //we are declaring value
console.log(mycar)   //Red and Black

mycar = "I20"  //re-assigning 

console.log(mycar);   //I20

var mycar = 9553   //re-declaring 

console.log(mycar) //9553

{
    console.log(mycar)  //accessing data outside into the block  //9553
    var myfavnum = 1234
    console.log(myfavnum)  //accessing inside data inside block //1234
}

console.log(myfavnum)  //accessing inside block into outside block  //1234