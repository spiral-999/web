const PlacaMae = ({nome,preco}) =>{
    return(
        <div>
            <h1>Nome da Placa Mãe : {nome}</h1>
            <h1>Preço da Placa Mãe : {preco}</h1>
        </div>
    )
}
const Memoria = ({nome,preco}) =>{
    return(
        <div>
            <h1>Nome da Memória : {nome}</h1>
            <h1>Preço da Memória : {preco}</h1>
        </div>
    )
}
const PlacaDeVideo = ({nome,preco}) =>{
    return(
        <div>
            <h1>Nome da Placa de Vídeo : {nome}</h1>
            <h1>Preço da Placa de Vídeo : {preco}</h1>
        </div>
    )
}
export {PlacaMae, Memoria, PlacaDeVideo}

// Em app.js : 
// import * as PC from './components/ATIVIDADES/Atividade01/Questão02/meuPC';
// function App() {
//   return (
//     <div className="App">
//       <PC.PlacaMae nome = "RTX3090" preco = "9999.99"/>
//       <hr/>
//       <PC.Memoria nome = "Gigabyte" preco = "5500"/>
//       <hr/>
//       <PC.PlacaDeVideo nome = "DDR 4" preco = "10250"/>
//     </div>
//   );
// }