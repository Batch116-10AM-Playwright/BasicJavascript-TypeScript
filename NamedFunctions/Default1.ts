

function ticketBooking(age : number , ticketPrice : string = "50% concession")
{
      if(age > 60)
      {
        console.log("The Update ticket rate is : " +ticketPrice)
      }
      else
      {
        console.log("Pay full amount as per ticker Fare")
      }
}

ticketBooking(18);

 

