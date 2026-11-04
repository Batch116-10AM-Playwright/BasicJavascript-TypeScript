
let z : string = "";

for(let r : number = 1 ; r <= 3 ; r++)
{
        for(let c : number = 1 ; c <= 8 ; c++)   //columns
        {
             z += c;  //adding c values into z
        }
      
        z += "\n"  //z moves to next line
}

console.log(z)