import React from 'react';
import './App.css';

const linguagensArray = ['JavaScript', 'Python', 'Ruby', 'Java', 'Golang', 'PHP', 'C#', 'Swift', 'C++', 'C', 'Kotlin', 'TypeScript'];


const Checkbox = () => {
   const [linguagens, setLinguagens]= React.useState([]);

    function handleChange ({target}) {
      if (target.checked) { 
        setLinguagens([...linguagens, target.value]);
      }  else {
        setLinguagens(
          linguagens.filter((linguagem) => {
        return linguagem !== target.value
      }),
    );
    }   
  }
  function handleChecked (linguagem) {
    return linguagens.includes(linguagem);
  } 
  const [search, setSearch] = React.useState('');

  const filteredLinguagens = linguagensArray.filter((linguagem) =>
  linguagem.toLowerCase().includes(search.toLowerCase())
);
  return (
  
    <div>
      {linguagens.length === 0 && (
      <div className="welcome-screen">
        <h1>Bem-vindo!</h1>
        <p>Selecione as linguagens que você sabe programar!</p>
      </div>
    )}
      {linguagensArray.map((linguagem) => (
  <div key={linguagem} className="card">
    <input
      type="checkbox"
      value={linguagem}
      checked={handleChecked(linguagem)}
      onChange={handleChange}
      id={linguagem}
    />
    <label htmlFor={linguagem}>
      <div className="card-content">
        <div className="icon">{linguagem[0]}</div>
        <span>{linguagem}</span>
      </div>
    </label>
  </div>
))}
<button className="styled-button" onClick={() => setLinguagens([])}>
  Limpar Seleção
</button>
      <h3>Sabe todas essas linguagens: ({linguagens.length})</h3>
      <ul style={{ textTransform: 'capitalize' }}>
        {linguagens.length > 0 ? (
          linguagens.map((linguagem) => <li key={linguagem}>{linguagem}</li>)
        ) : (
          <p>Não sabe nenhuma linguagem</p>
        )}
      </ul>
    </div>
  )
}

export default Checkbox;

