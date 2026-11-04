let a : number = 83;
let b : number = 17;
let c : number = 44;

if(a > c)  //1
{
    console.log("Tiger Runs Faster than Human")  //if1 
    if(b < a)  //2
    {
        console.log("Dog Barks")    //if2
        if(b > c)  //3
        {
            console.log("We Eat Biryani") //if3
        }
        console.log("Cat says MEOW")  //if2
    }
    console.log("Lion Roars")  //if1
}