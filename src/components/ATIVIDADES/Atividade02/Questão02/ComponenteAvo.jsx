import PokemonContexto from "./PokemonContexto"
import ComponentePai from "./ComponentePai"
const ComponenteAvo = () => {
    const numero = 1
    return (
        <PokemonContexto.Provider value={numero}>
            <div>
                <h1>Componente Avo</h1>
                <img
                    src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`}
                    style = {{width:"400px"}}
                />
            </div>
            <ComponentePai/>
        </PokemonContexto.Provider>
    )
}
export default ComponenteAvo