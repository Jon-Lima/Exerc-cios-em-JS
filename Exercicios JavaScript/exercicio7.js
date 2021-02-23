/*
Desafio
Faça a leitura de um valor inteiro. Em seguida, calcule o menor 
número de notas possíveis (cédulas) onde o valor pode ser decomposto. 
As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na 
sequência mostre o valor lido e a relação de notas necessárias.

Entrada
Você receberá um valor inteiro N (0 < N < 1000000).

Saída
Exiba o valor lido e a quantidade mínima de notas de cada tipo 
necessárias, seguindo o exemplo de saída abaixo. Após cada linha 
deve ser imprimido o fim de linha.
*/

var valor = parseInt(gets());
var valorOriginal = valor;
let notas100 = (valor - valor%100) / 100;
valor = valor - (notas100*100)
let notas50 = (valor - valor%50) / 50;
valor = valor - (notas50*50)
let notas20 = (valor - valor%20) / 20;
valor = valor - (notas20*20)
let notas10 = (valor - valor%10) / 10;
valor = valor - (notas10*10)
let notas5 = (valor - valor%5) / 5;
valor = valor - (notas5*5)
let notas2 = (valor - valor%2) / 2;
valor = valor - (notas2*2)
let notas1 = valor;

console.log(valorOriginal);
console.log(notas100 + " nota(s) de R$ 100,00");
console.log(notas50 + " nota(s) de R$ 50,00");
console.log(notas20 + " nota(s) de R$ 20,00");
console.log(notas10 + " nota(s) de R$ 10,00");
console.log(notas5 + " nota(s) de R$ 5,00");
console.log(notas2 + " nota(s) de R$ 2,00");
console.log(notas1 + " nota(s) de R$ 1,00");
