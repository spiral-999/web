import logo from './logo.svg';
import './App.css';
import * as Batalha from './components/ATIVIDADES/Atividade01/Questão03/Batalha';
function App() {
  return (
    <div className="App">
      <Batalha.World>
        <Batalha.Arena nome = "Castelão"/>
      </Batalha.World>
      <Batalha.World>
        <Batalha.Arena2 nome = "Castelão">
          <Batalha.Hero nome = "Aragão"/>
          <Batalha.Enemy nome = "Valdemar"/>
        </Batalha.Arena2>
      </Batalha.World>
    </div>
  );
}

export default App;
