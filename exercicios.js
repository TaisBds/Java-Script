
// criar uma lista de numeros e fazer a comparação dentro de uma função. 
var listaNumerosFavoritos=[10,20,30,40,50,60,70,80,90,100]
function comparar(numero){
    
    for(let i=0;i< listaNumerosFavoritos.length;i++){
        if(numero == listaNumerosFavoritos[i]){
        console.log("Numero já esxistente")
        return false
    }else{

    }return true
}
   
  
}
  var cadastro = comparar()
    console.log(cadastro)
    if(cadastro){
        console.log("Liberado")

    }