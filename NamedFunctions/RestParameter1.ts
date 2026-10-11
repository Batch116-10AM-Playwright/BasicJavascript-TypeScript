
function sumOfTotal(...marks : number[])    //78, 12, 63, 54
{
    let y : number = 0;
    for(let m of marks)       //78    12   63  54
    {
        y = y + m;     //y --> 78  ,  90,  153,   207
    }
    console.log("The Sum of Marks : " +y)
}

sumOfTotal(45, 89, 12, 61, -61, 32, 45, 23)

