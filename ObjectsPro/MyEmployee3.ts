interface  empdata      //rough data
{
    empid : number,
    empname : string,
    empsalary : number,
    empdesignation : string,
    status : boolean,
    empaddress : {        //empaddress ---> sub object
                    estreet : string,
                    elocation : string,
                    epincode : number,
                    estate : string
                 }
}    

let empinfo : empdata =     //converts to fair data as empinfo
{
    empid : 5612,
    empname : "Raghu",
    empsalary : 781234,
    empdesignation : "QA Lead",
    status : true,
    empaddress : 
                {
                    estreet : "Road No : 3",
                    elocation : "Hyderabad",
                    epincode : 500032,
                    estate : "Telangana"
                }
}

console.log(empinfo)
empinfo.empdesignation = "QA Manager"   //here we have updated employee designation
empinfo.empaddress.elocation = "Secunderabad";
console.log(empinfo)