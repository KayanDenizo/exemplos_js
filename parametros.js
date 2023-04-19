// Parâmetros de função

                          //2           //2
// function soma(numero1, numero2){
//   return numero1 + numero2;
// }

// console.log(soma(2, 2))
// console.log(soma(275, 25))
// console.log(soma(75, 1000))

// Parâmetros x argumentos

// Ordem dos parâmetros

function nomeIdade(nome, idade){
  return `meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade(14, "Kayan"))

function soma(numero1, numero2){
  return numero1 + numero2;
}

function multiplica(numero1, numero2){
  return numero1 * numero2
}
                                                //9              //6
console.log(multiplica(soma(4, 5), soma(3, 3))) // => Ele vai somar 4 + 5 e 3 + 3, depois vai multiplicar os resultados, que são 9 * 6 que vai dar 54