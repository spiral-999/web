import PokemonContexto from "./PokemonContexto"
import { useContext } from "react"

const Evolucao2 = () => {
    const numero = useContext(PokemonContexto)
    return (
        <div>
            <h1>SEGUNDA EVOLUÇÃO</h1>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero + 2}.png`}
                style={{ width: "300px" }}
            />
        </div>
    )
}
export default Evolucao2