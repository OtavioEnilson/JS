
function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById ('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são: ${hora} horas.` 

    

    if (hora >=0 && hora < 12) {
        //BOM DIA!
        img.src= 'manhacertoo.png'
        document.body.style.background = "blue"
        
    }
        else if(hora >=12 && hora < 18 ) {
        //BOA TARDE! 
        img.src= 'tardecerto.png'
        document.body.style.background = "grey"
    }
        else {
        //BOA NOITE!
        img.src= 'noitecerto.png'
        document.body.style.background = "black"
        }

   

   

}
