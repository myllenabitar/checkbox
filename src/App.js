import React from 'react';
import './App.css';

const linguagensArray = ['JavaScript', 'Python', 'Ruby', 'Java', 'Golang', 'PHP', 'C#', 'Swift', 'C++', 'C', 'Kotlin', 'TypeScript'];

const Checkbox = () => {
  const [linguagens, setLinguagens] = React.useState([]);

  const handleChange = ({ target }) => {
    setLinguagens((prev) =>
      target.checked ? [...prev, target.value] : prev.filter((linguagem) => linguagem !== target.value)
    );
  };

  const handleClear = () => setLinguagens([]);

  return (
    <div className="container">
      <h2>Selecione as linguagens que você sabe:</h2>
      <div className="checkbox-grid">
        {linguagensArray.map((linguagem) => (
          <label key={linguagem} className="checkbox-item">
            <input
              type="checkbox"
              value={linguagem}
              checked={linguagens.includes(linguagem)}
              onChange={handleChange}
            />
            {linguagem}
          </label>
        ))}
      </div>
      <button className="clear-button" onClick={handleClear}>
        Limpar Seleção
      </button>
      <h3>Suas linguagens: ({linguagens.length})</h3>
      {linguagens.length > 0 ? (
        <ul>
          {linguagens.map((linguagem) => (
            <li key={linguagem}>{linguagem}</li>
          ))}
        </ul>
      ) : (
        <p>Você ainda não selecionou nenhuma linguagem.</p>
      )}
    </div>
  );
};

export default Checkbox;
