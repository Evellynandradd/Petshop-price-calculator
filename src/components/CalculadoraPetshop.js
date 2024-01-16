export const calcularPrecoMeuCaninoFeliz = (data, qtdCaesPequenos, qtdCaesGrandes) => {
  const dataSelecionada = new Date(data);
  const diaDaSemana = dataSelecionada.getDay();
  
  const precoPequenos = (diaDaSemana === 5 || diaDaSemana === 6) ? 20 * 1.2 : 20;
  const precoGrandes = (diaDaSemana === 5 || diaDaSemana === 6) ? 40 * 1.2 : 40;

  return {
    nome: 'Meu Canino Feliz',
    precoTotal: qtdCaesPequenos * precoPequenos + qtdCaesGrandes * precoGrandes,
  };
};

export const calcularPrecoVaiRex = (data, qtdCaesPequenos, qtdCaesGrandes) => {
  const dataSelecionada = new Date(data);
  const diaDaSemana = dataSelecionada.getDay();
  
  const precoPequenos = (diaDaSemana === 5 || diaDaSemana === 6) ? 20 : 15;
  const precoGrandes = (diaDaSemana === 5 || diaDaSemana === 6) ? 55 : 50;

  return {
    nome: 'Vai Rex',
    precoTotal: qtdCaesPequenos * precoPequenos + qtdCaesGrandes * precoGrandes,
  };
};

export const calcularPrecoChowChawgas = (qtdCaesPequenos, qtdCaesGrandes) => {
  const precoPequenos = 30;
  const precoGrandes = 45;

  return {
    nome: 'ChowChawgas',
    precoTotal: qtdCaesPequenos * precoPequenos + qtdCaesGrandes * precoGrandes,
  };
};

export const encontrarMelhorPetshop = (data, qtdCaesPequenos, qtdCaesGrandes) => {
  const distanciaMeuCaninoFeliz = 2;
  const distanciaVaiRex = 1.7;
  const distanciaChowChawgas = 0.8;

  const precoMeuCaninoFeliz = calcularPrecoMeuCaninoFeliz(data, qtdCaesPequenos, qtdCaesGrandes);
  const precoVaiRex = calcularPrecoVaiRex(data, qtdCaesPequenos, qtdCaesGrandes);
  const precoChowChawgas = calcularPrecoChowChawgas(qtdCaesPequenos, qtdCaesGrandes);

  let melhorPetshop = { nome: '', precoTotal: Infinity, distancia: Infinity };

  if (precoMeuCaninoFeliz.precoTotal < melhorPetshop.precoTotal) {
    melhorPetshop = { ...precoMeuCaninoFeliz, distancia: distanciaMeuCaninoFeliz };
  }

  if (precoVaiRex.precoTotal < melhorPetshop.precoTotal) {
    melhorPetshop = { ...precoVaiRex, distancia: distanciaVaiRex };
  }

  if (precoChowChawgas.precoTotal < melhorPetshop.precoTotal) {
    melhorPetshop = { ...precoChowChawgas, distancia: distanciaChowChawgas };
  } else if (precoChowChawgas.precoTotal === melhorPetshop.precoTotal && distanciaChowChawgas < melhorPetshop.distancia) {
    melhorPetshop = { ...precoChowChawgas, distancia: distanciaChowChawgas };
  } else if (precoVaiRex.precoTotal === melhorPetshop.precoTotal && distanciaVaiRex < melhorPetshop.distancia) {
    melhorPetshop = { ...precoVaiRex, distancia: distanciaVaiRex };
  }

  return melhorPetshop;
};

