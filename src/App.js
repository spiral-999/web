import Signin from './components/PROVAS/PROVA2/01Signin/Signin';
import MainPage from './components/PROVAS/PROVA2/02Crud/MainPage';
function App() {
  const auth = localStorage.getItem("res") === "true";
  return (
    <div>
      {auth ? <MainPage /> : <Signin />}
    </div>
  );
}

export default App;