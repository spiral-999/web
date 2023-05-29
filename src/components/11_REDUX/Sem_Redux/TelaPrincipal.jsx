import Imagem from "./Imagem"
import BotaoDecrementar from "./BotaoDecrementar"
import BotaoIncrementar from "./BotaoIncrementar"
import { useState } from "react"
const TelaPrincipal = () =>{
    const [id,setId] = useState(1)
    const incrementar = () => {
        setId((prev)=>prev+1)
    }
    const decrementar = () => {
        setId((prev)=>prev-1)
    }
    return (
        <center>
            <table>
                <tbody>
                    <tr>
                        <Imagem id={id}/>
                    </tr>
                    <tr>
                        <td>
                            <BotaoIncrementar incrementar={incrementar}/>
                        </td>
                        <td>
                            <BotaoDecrementar decrementar={decrementar}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </center>
    )
}
export default TelaPrincipal