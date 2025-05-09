import { faturamentoEstados } from "./faturamento.js";

function calcularFaturamento(estados) {

  const total = Object.values(estados).reduce((soma, valor) => soma + valor, 0);

  const percentuais = {};
  for (const estado in estados) {
    const percentual = (estados[estado] / total) * 100;
    percentuais[estado] = parseFloat(percentual.toFixed(2));
  }

  return percentuais;
}

const resultado = calcularFaturamento(faturamentoEstados);

//Adicionei o \n para ficar melhor formatado
console.log("Percentual por estado:\n", resultado);
