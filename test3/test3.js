import { dados } from './dados.js';

function analisarFaturamento(dados) {
  // Filtra os dias com faturamento > 0 
  // esse value.valor pega o segundo valor do objeto, chamei de value mesmo.

  const diasComFaturamento = dados.filter(value => value.valor > 0);

  // Calcula o menor e maior valor
  const menorValor = Math.min(...diasComFaturamento.map(value => value.valor));
  const maiorValor = Math.max(...diasComFaturamento.map(value => value.valor));

  // Calcula a média mensal
  const soma = diasComFaturamento.reduce((total, value) => total + value.valor, 0);
  const media = soma / diasComFaturamento.length;

  // Conta os dias com faturamento acima da média
  const diasAcimaDaMedia = diasComFaturamento.filter(value => value.valor > media).length;

  return {
    menorValor,
    maiorValor,
    diasAcimaDaMedia
  };
}

const resultado = analisarFaturamento(dados);

//Aqui eu adicionei o toLocalString para ficar em um formato mais agradável
console.log("Menor valor de faturamento:", resultado.menorValor.toFixed(2).toLocaleString('en-US'));
console.log("Maior valor de faturamento:", resultado.maiorValor.toLocaleString('en-US'));
console.log("Dias com faturamento acima da média:", resultado.diasAcimaDaMedia);
