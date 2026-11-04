
let z : string = "";

for(let r : number = 1 ; r <= 4 ; r++)  //rows
{
        for(let c : number = 1 ; c <= 18 ; c++)   //columns
        {
             z += r;  //adding c values into z
        }
      
        z += "\n"  //z moves to next line
}

console.log(z)