
let z : string = "";

for(let r : number = 1 ; r <= 6 ; r++)  //rows
{
        for(let c : number = 1 ; c <= r ; c++)   //columns
        {
             z += r;  //adding c values into z
        }
      
        z += "\n"  //z moves to next line
}

console.log(z)