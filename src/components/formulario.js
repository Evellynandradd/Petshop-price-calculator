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
      <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
        <h2 style={styles.title}>Encontre o Melhor Petshop</h2>
        <label style={styles.label}>
          Data:
          <input type="date" value={data} onChange={(e) => setData(e.target.value)} style={styles.input} />
        </label>
        <div style={styles.space}></div>
        <label style={styles.label}>
          Quantidade de cães pequenos:
          <input type="number" value={qtdCaesPequenos} onChange={(e) => setQtdCaesPequenos(e.target.value)} style={styles.input} />
        </label>
        <div style={styles.space}></div>
        <label style={styles.label}>
          Quantidade de cães grandes:
          <input type="number" value={qtdCaesGrandes} onChange={(e) => setQtdCaesGrandes(e.target.value)} style={styles.input} />
        </label>
        <div style={{ textAlign: 'center' }}>
          <button type="submit" style={styles.button}>Calcular</button>
        </div>
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
      height: '300px',
      margin: '40px auto',
      backgroundColor: '#f0f0f0',
    },
    title: {
      fontSize: '1.5em',
      marginBottom: '10px',
    },
    label: {
      display: 'block',
      marginBottom: '10px',
    },
    input: {
      width: '95%',
      padding: '8px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    space: {
      marginBottom: '2px',
    },
    button: {
      width: '50%',
      padding: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1em',
      marginTop: '10px',
    },
  };
  

export default Formulario;
