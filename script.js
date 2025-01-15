// var maior = 0;
// // const lista = [
// //   { nome: "Rafael", idade: 15 },
// //   { nome: "Media", idade: 19 },
// //   { nome: "Erick", idade: 23 },
// //   { nome: "Andressa", idade: 21 },
// //   { nome: "Sandro", idade: 43 },
// //   { nome: "Samantha", idade: 13 },
// //   { nome: "valentina", idade: 3 },
// //   { nome: "Enzo", idade: 12 },
// //   { nome: "Ana", idade: 27 },
// //   { nome: "liz", idade: 22 },
// //   { nome: "Tais", idade: 17 },
// // ];
// for (let i = 0; i < lista.length; i++) {
//   if (lista[i].idade > 18) {
//     maior++;
//   }
// }
// console.log(`A quantidade de pessoas acima de 18 anos são: ${maior}`);

const lista = [
    { nome: "Rafael", idade: 15},
    { nome: "Media", idade: 19},
    { nome: "Erick", idade: 23},
    { nome: "Andressa", idade: 21},
    { nome: "Sandro", idade: 43},
    { nome: "Samantha", idade: 13},
    { nome: "valentina", idade: 3},
    { nome: "Enzo", idade: 12},
    { nome: "Ana", idade: 27},
    { nome: "liz", idade: 22},
    { nome: "Tais", idade: 17},
  ];
  var numeroAleatorio = 0;

  for(let i = 0;i < lista.length;i++){
   numeroAleatorio = parseInt(Math.random()*10)
    lista[i].filhos = numeroAleatorio
  }

  console.log(lista)
  