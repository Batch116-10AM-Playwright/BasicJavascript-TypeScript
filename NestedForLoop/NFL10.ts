
let z : string = "";

for(let r : number = 1 ; r <= 8 ; r++)  //rows
{
        for(let c : number = 1 ; c <= r ; c++)   //columns
        {
             z += c;  //adding c values into z
        }
      
        z += "\n"  //z moves to next line
}

console.log(z)