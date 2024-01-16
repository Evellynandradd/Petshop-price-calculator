// src/App.js

import React, { useState } from 'react';
import Formulario from './components/formulario';
import Resultado from './components/resultado';
import {
  calcularPrecoMeuCaninoFeliz,
  calcularPrecoVaiRex,
  calcularPrecoChowChawgas,
  encontrarMelhorPetshop
} from './components/CalculadoraPetshop';

const App = () => {
  const [melhorPetshop, setMelhorPetshop] = useState(null);

  const handleSubmit = ({ data, qtdCaesPequenos, qtdCaesGrandes }) => {
    const melhorPetshop = encontrarMelhorPetshop(data, qtdCaesPequenos, qtdCaesGrandes);
    setMelhorPetshop(melhorPetshop);
  };

  return (
    <div>
      <h1></h1>
      <Formulario onSubmit={handleSubmit} />
      {melhorPetshop && <Resultado melhorPetshop={melhorPetshop} />}
    </div>
  );
};

export default App;
