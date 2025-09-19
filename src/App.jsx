import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [nome, setNome] = useState('Felipe')
  let clique = 1

  const handleNomeClick = () => {
    // Verifica o valor ATUAL do nome e define o NOVO valor
    if (clique % 2 === 0) {
      clique++;
      setNome('Funcionou :D');
    } else {
      setNome('Felipe');
    }
  }

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="c_titulo">Aula de Reactinho</h1>
      <a href="https://www.google.com.br">SITE DO GOOGLE :)</a>
      <div className="c_corbranca">
        <ol>
          <li>DOMINGO</li>
          <li>SEGUNDA</li>
        </ol>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>IDADE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{nome}</td>
              <td>25</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button type="button" onClick={handleNomeClick}>
          JS
        </button>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          apertou {count} vezes
        </button>
      </div>
    </>
  )
}

export default App
