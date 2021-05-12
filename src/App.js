import './App.css';
import {useState} from 'react'

function App() {

  const [lista, setLista] = useState([])

  function adicionar(){
    var texto = document.getElementById('texto').value
    setLista([...lista, texto])
    document.getElementById('texto').value = ''
  }

  function remover(posicao) {
    var novalista = lista.filter((item, index) => index !== posicao)
    setLista(novalista)
  }

  return (
    <main>
      <input type='text' id='texto'/>
      <button onClick={adicionar}>Adicionar</button>
      {
          lista.map( (item, index) => (
            <div>
              <p>{item}</p>
              <button onClick={() => remover(index)}>X</button>
            </div>
          ))
      }
    </main>
  );
}

export default App;
