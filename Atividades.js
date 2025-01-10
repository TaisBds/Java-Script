

/*const supermercado = ['Arroz', 'Feijão', 'Açucar', 'Trigo', 'Oléo']
supermercado.unshift('leite') //Adiciona intens no inicio da lista 
supermercado.shift() //Apaga o primeiro item da lista 
supermercado.pop() // Apaga o ultimo item da lista 
supermercado.push('ovo')// Adiciona no final da lista
supermercado.splice(3,1,'Sabão')// Posição do item que quer adicionar, quantidade que quer muda e item para asicionar.
// Adiciona o Sabão no lugar 
supermercado[4]=('Macarrão') //Adiciona Macarrão na 4º posição
console.log(supermercado) */


// const lista = [10,20,14,7,8,11,19] 
//  var somalista=0 // fora do for e igualado a zero, var para declarar que é um numero
// for(let i=0; i<=50; i++){
// lista.push(18+i)//vai somar sempre 18+1 até dar 50 numeros
// }
// for(let i=0; i<lista.length; i++){ //lenght comprimento da lista, soma mesmo que adicionado items a lista 
  
//     somalista+= lista[i] // somalista = somalista + lista[i]
// }
// console.log(parseInt(somalista/ lista.length))// fora do for; parseint é a conversão de variavél para numero inteiro; média;

//Lista Par

// const numeros = []
// var par = 0
// var impar = 0
// var numerosAleatorios= 0
// for(let i = 0; i < 10; i++){
//     numerosAleatorios = parseInt(Math.random()*100)
//     numeros.push(numerosAleatorios)
// }

// for (let i = 0; i < numeros.length; i++) {

//   if (numeros[i] % 2 == 0) {
//     par++;
// } else {
//     impar++;
// }
// } 

// console.log(`Numeros pares:${par}`);
// console.log(`Numeros impares:${impar}`);

//Tabuada

var numeroTab = 3;

for (let i = 1; i <= 10; i++) {
  console.log(`${numeroTab} X ${i} = ${numeroTab * i} `)
}