import { useEffect, useState } from "react"
const Pokemon = () => {
    const [flag, setFlag] = useState(true)
    // variável para controlar a flag de posição do pokemon de acordo com a dica
    const [pokemon, setPokemon] = useState("")
    // variável para guardar a imagem do pokemon
    useEffect(() => {
        if (flag) {
            setPokemon("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png")
        } else {
            setPokemon("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/94.png")
        }
    }
    ,
    [flag] // useEffect altera apenas o valor da flag para true ou false
    )

    return (
        <div>
            <img src={pokemon} style={{width:"400px"}}/>
            <button onClick={() => setFlag(!flag)}>MUDAR O SPRITE</button>
        </div>
        // o botão altera o valor da flag que consequentemente altera a posição do pokemon
    )
}
export default Pokemon