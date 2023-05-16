import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
const PokemonAxios = () =>{
    const [id,setId] = useState(1)
    const [nome,setNome] = useState("")
    const [imagem,setImagem] = useState("")
    const [imagem2,setImagem2] = useState("")
    const [imagem3,setImagem3] = useState("")
    const [imagem4,setImagem4] = useState("")
    
    useEffect(
        () =>{
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(
                (response) => {
                    //console.log(response)
                    setNome(response.data.name)
                    setImagem(response.data.sprites.front_default)
                    setImagem2(response.data.sprites.back_default)
                    setImagem3(response.data.sprites.front_shiny)
                    setImagem4  (response.data.sprites.back_shiny)
                }
            )
            .catch((error)=>console.log(error))
        }
        ,
        [id]    
    )
    return(
        <>  
            <button
                onClick={
                    ()=>{
                        setId((prev)=>prev-1)
                    }
                }
            >
                ANTERIOR
            </button>
            <button
                onClick={
                    ()=>{
                        setId((prev)=>prev+1)
                    }
                }
            >
                PRÓXIMO
            </button>
            <h1>Nome : {nome}</h1>
            <h1>ID : {id}</h1>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src = {imagem} style = {{width:"330px"}}/>
                        </td>
                        <td>
                            <img src = {imagem2} style = {{width:"330px"}}/>
                        </td>
                        <td>
                            <img src = {imagem3} style = {{width:"330px"}}/>
                        </td>
                        <td>
                            <img src = {imagem4} style = {{width:"330px"}}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default PokemonAxios