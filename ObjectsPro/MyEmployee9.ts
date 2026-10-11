interface  husband      //rough data
{
    hname : string,
    hage : number,
    hhobbies : string,
    hDOB : string
}    

interface wife
{
    wname : string,
    wage : number,
    whobbies : string,
    wDOB : string
} 

let hubdata : husband =
{
    hname : "Tarun",
    hage : 28,
    hhobbies : "Tennis",
    hDOB : "12 Dec 1996"
}

let wifdata : wife =
{
    wname : "Sudha",
    wage : 23,
    whobbies : "Cooking",
    wDOB : "13 July 2003"
}


let wifehusband = {...hubdata, ...wifdata}

console.log(wifehusband)