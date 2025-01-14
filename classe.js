// const pessoa={          /// sempre que tiver {} é um objeto
//     nome: "Tais",
//     idade: 19,
// }

// class Pessoa{
//     nome;
//     cpf; 
//     idade;                           //sé a variavél começar em letra maiuscúla ela é uma classe e classe é a unica que usa ; no javascript
// }

// const tais= new Pessoa
// tais.nome="Tais"
// tais.idade=28
// tais.cpf="062.274.591-35"
// console.log(tais)

// const miguel= new Pessoa
// miguel.nome ="Miguel"
// miguel.idade="4"
// miguel.cpf="000.000.000-00"
// miguel.cnpj="00.000.000/0001-00"
// console.log(miguel)


// class Carro{
//     marca;
//     emplacamento;
//     cor;
//     chassi;

// }

// const civic = new Carro
// civic.marca ="Honda"
// civic.emplacamento = "00A23C8"
// civic.cor = "Branco"
// civic.chassi ="325487B"
// console.log(civic)

// objeto sem classe e função:

// const garrafa={
//     marca: "Tapwere",
//     cor: "Azul",
//     valor: 80,

//  comprar:function(){
//     console.log("Garrafa Comprada")         /// sempre separar as funções por virgula.
//  },
//  vender:function(){
//     console.log("Garrafa Vendida")
//  }
    
// }
// garrafa.comprar()
// garrafa.vender()


// class Predio{
//     endereco;
//     nome;
//     portaria;

//     constructor(endereco,nome,portaria){
//         this.endereco=endereco                              // Define que endereço está ligado ao endereço da classe (ou seja this está falando que o endereço do constructor se refere ao endereço da class)
//         this.nome=nome
//         this.portaria=portaria
//     }
//     morar(){
//         console.log(`Bem vindo ao Condominio ${this.nome} que fica localizado ${this.endereco} portaria ${this.portaria} ` ) // ${} usado para imprimir o nome do prédio
//     }
// }
// const alphaville = new Predio("Rua fernando de noronha","alphaville", "B")
// const palmeiras=new Predio("Rua São Paulo","Palmeiras", "D")
// alphaville.morar()
// palmeiras.morar()



