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

  return (
  <form className="checkbox-style">
    <h2>Quais dessas linguagens de programação você sabe programar?</h2>
    {linguagensArray.map((linguagem) => 
    <label key={linguagem} style={{textTransform: 'capitalize'}}>
      <ul style={{listStyleType: 'none', padding: 0 }}>
        <li>
          <input 
            type="checkbox" 
            value={linguagem} 
            checked={handleChecked(linguagem)} 
            onChange={handleChange}>
          </input>
            {linguagem}
        </li>
      </ul>
    </label>)}
    <h3>Sabes todas essas linguagens: ({linguagens.length})</h3>
    <ul style={{textTransform: 'capitalize'}} >
      {linguagens.length > 0 ? (
      linguagens.map((linguagem) => <li key={linguagem}>{linguagem}</li>)
          ) : (
      <p>Não sabes nenhuma linguagem</p>
          )}
    </ul>
  </form>
  
)}

export default Checkbox;

