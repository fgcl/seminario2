import { useState } from 'react'
import imagine from './assets/imagine.png'
import imagem from './assets/imagem.jpg'
import './App.css'
import Menu from './Menu.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [nome, setNome] = useState('Felipe')
  // Usar o useState para "lembrar" a contagem de cliques
  const [clique, setClique] = useState(0);

  const handleNomeClick = () => {
    // 1. Incrementa o contador de cliques para a próxima renderização
    const novoClique = clique + 1;
    setClique(novoClique);

    // 2. Usa o novo valor do contador para decidir o nome
    if (novoClique % 2 !== 0) {
      setNome('Funcionou :D');
    }
    else if (novoClique == 2){
      setNome('Você apertou duas vezes esse botao \'-\'');
    } else {
      setNome('Felipe');
    }
  }

  return (
    <>
    <Menu nome="Ok"/>
    <div class="espaco">
    </div>
    <div>
    <h4 class='c_titulo'>Calculando...</h4>
    {/* imagem dentro do public comentar shift+alt+A */}
    <img src='public/imagem.jpg' className="c_imagem" alt="React logo" />
    <img src={imagine} className="logo react" alt="React logo" />
    <p class="c_paragrafo"> Tá muito bonito isso em cara</p>
    </div>
      <h1 className="c_titulo">Aula de Reacto</h1>
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
