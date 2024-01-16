import React from 'react';

const Resultado = ({ melhorPetshop }) => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', 
      marginTop: '-430px', 
    },
    card: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '12px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Melhor Petshop</h2>
        {melhorPetshop.nome && (
          <>
            <p>Nome: {melhorPetshop.nome}</p>
            <p>Preço Total: R$ {melhorPetshop.precoTotal.toFixed(2)}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Resultado;
