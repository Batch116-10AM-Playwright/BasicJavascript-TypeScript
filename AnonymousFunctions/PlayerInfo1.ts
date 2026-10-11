
function playerName(name : string) : void
{
    console.log(name)   //variable/paramter --> string --> name is printing
}

playerName("Dravid")

function playerPlay(game : (name : string) => void) : void   //here "(name : string) => void" is an anonymous function
{
        game("Cricket")   //variable/parameter --> function --> calling the function
}

playerPlay(playerName)