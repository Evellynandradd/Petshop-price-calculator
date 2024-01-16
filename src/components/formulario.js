import React, { useState } from 'react';
import Resultado from './resultado';

const Formulario = ({ onSubmit }) => {
  const [data, setData] = useState('');
  const [qtdCaesPequenos, setQtdCaesPequenos] = useState(0);
  const [qtdCaesGrandes, setQtdCaesGrandes] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();


    if (data && qtdCaesPequenos >= 0 && qtdCaesGrandes >= 0) {
      onSubmit({ data, qtdCaesPequenos, qtdCaesGrandes });
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  };

  return (
    <div style={styles.card}>
      <form onSubmit={handleSubmit}>
        <h2 style={styles.title}>Encontre o Melhor Petshop</h2>
        <label>
          Data:
          <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
        </label>
        <br />
        <div style={styles.space}></div>
        <label>
          Quantidade de cães pequenos:
          <input type="number" value={qtdCaesPequenos} onChange={(e) => setQtdCaesPequenos(e.target.value)} />
        </label>
        <br />
        <div style={styles.space}></div> 
        <label>
          Quantidade de cães grandes:
          <input type="number" value={qtdCaesGrandes} onChange={(e) => setQtdCaesGrandes(e.target.value)} />
        </label>
        <br />
        <button type="submit" style={styles.button}>Calcular</button>
      </form>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    width: '300px',
    height: '390px', 
    margin: '70px auto',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  space: {
    marginBottom: '20px',
  },
  button: {
    marginTop: '10px',
  },
};



export default Formulario;
