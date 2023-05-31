var agora= new Date()
var diaSem= agora.getDay ()

diaSem = 4


switch(diaSem) {
    case 0: 
    console.log(`Domingo`)
    break
    case 1:
        console.log(`Segunda`)
    break
    case 2:
        console.log (`terça`)

        break

        case 3:
            console.log (`quarta`)
        
    break

    case 4: 
    console.log (`quinta`)
}