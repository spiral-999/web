import PokemonContexto from "./PokemonContexto"
import { useState } from "react"
import ComponentePai from "./ComponentePai"
const ComponenteAvo = () => {
    const [numero, setNumero] = useState(1)
    const acaoBotao = () =>{
        setNumero(numero + 1)
    }
    return (
        <PokemonContexto.Provider value={numero}>
            <div>
                <h1>Componente Avo</h1>
                <img
                    src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                    style = {{width:"400px"}}
                />
                <button onClick = {acaoBotao}>
                    AUMENTAR NÚMERO
                </button>
            </div>
            <ComponentePai/>
        </PokemonContexto.Provider>
    )
}
export default ComponenteAvo