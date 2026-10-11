
let myfav1 : number[] =[45, 12, 9, 31, 66, 37, 21];

let myfav2 : number[] = myfav1.sort((m , n ) => m-n)   //ascending order

let myfav3 : number[] = myfav1.sort((m , n ) => n-m)  //descending order

console.log(myfav2)
console.log(myfav3)

