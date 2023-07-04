
function contar() {

    var inicio = document.getElementById('txtin')
    var Fim = document.getElementById('Fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || Fim.value.length == 0 || passo.value.length == 0) {
        window.alert('PREENCHA TODOS OS CAMPOS')
    } else {
        res.innerHTML = 'Contando:'
        var i = Number(inicio.value)
        var F = Number(Fim.value)
        var p = Number(passo.value)
         
        for (var c= i; c<= F; c += p){
            res.innerHTML += ` ${c}`
        }
    }



    
    

   

}
