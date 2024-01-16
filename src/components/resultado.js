import React from 'react';

const Resultado = ({ melhorPetshop }) => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      marginTop: '-240px',
    },
    card: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      backgroundColor: '#f0f0f0',
      width: '300px',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Melhor Petshop</h2>
        {melhorPetshop.nome && (
          <>
            <p style={{ margin: '8px 0' }}>Nome: {melhorPetshop.nome}</p>
            <p style={{ margin: '8px 0' }}>Preço Total: R$ {melhorPetshop.precoTotal.toFixed(2)}</p>
          </>
        )}
      </div>
    </div>
  );
};



export default Resultado;
