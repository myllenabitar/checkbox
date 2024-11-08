import React from 'react';

const linguagensArray = ['JavaScript', 'Python', 'Ruby', 'Java', 'Golang', 'PHP', 'C#'];

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
  <form>
    <h1>Quais dessas linguagens de programação você sabe programar?</h1>
    {linguagensArray.map((linguagem) => 
    <label key={linguagem} style={{textTransform: 'capitalize'}}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
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
    <h1>Sabes essas linguagens:</h1>
    <ul style={{textTransform: 'capitalize'}}>

      {linguagens.length > 0 ? (
      linguagens.map((linguagem) => <li key={linguagem}>{linguagem}</li>)
          ) : (
      <li>Não sabe nenhuma linguagem</li>

          )}
          </ul>
  </form>
  
)}

export default Checkbox;

