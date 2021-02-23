/*
Desafio
Você deve fazer a leitura de 5 valores inteiros. 
Em seguida mostre quantos valores informados são pares,
quantos valores informados são ímpares, quantos valores
informados são positivos e quantos valores informados são negativos.

Entrada
Você receberá 5 valores inteiros.

Saída
Exiba a mensagem conforme o exemplo de saída abaixo, 
sendo uma mensagem por linha e não esquecendo o final de linha após cada uma.
*/
var positivo=0;
var negativo=0;
var par=0;
var impar=0;
var valor;
for (i = 0; i < 5; i++) {
    valor = parseInt(gets());
    if (valor%2 == 0){
        par++
    } else {
        impar++
    }
    if (valor > 0){
        positivo++
    } else if (valor < 0){
        negativo++
    }
  }
console.log(par + " valor(es) par(es)");
console.log(impar + " valor(es) impar(es)");
console.log(positivo + " valor(es) positivo(s)");
console.log(negativo + " valor(es) negativo(s)");


