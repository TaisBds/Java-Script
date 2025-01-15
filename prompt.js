//var entrada=prompt(`Minha primeira mensagem utilizando propmt`)
//document.write(entrada)

// var numero1=parseInt(prompt("Digite o primeiro numero"))   // parseint tranforma o prompt de string para numerico
// var numero2=parseInt(prompt("Digite o segundo numero "))
// document.write(numero1+numero2)

var tabuada=parseInt(prompt("Digite um numero:"))
for (let i=1;i<=10;i++){
    document.write(`${tabuada} x ${i} = ${tabuada*i}<br>`)
}