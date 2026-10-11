

function accountCreate(username : string , aadhar ? : number)
{
    if(aadhar == undefined)   //== comparison 
    {
        console.log("Hai I am Creating my Gmail account and user name as : " +username)
    }

    else
    {
        console.log("Hai I am in the Bank for creating account with Customer name as : " +username)
    }
   
}


accountCreate("Kiran Kumar", 123456)
