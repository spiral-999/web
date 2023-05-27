import Imagem from "./Imagem"
import BotaoDecrementar from "./BotaoDecrementar"
import BotaoIncrementar from "./BotaoIncrementar"
import { useState } from "react"
const TelaPrincipal = () =>{
    return (
        <center>
            <table>
                <tbody>
                    <tr>
                        <Imagem/>
                    </tr>
                    <tr>
                        <td>
                            <BotaoIncrementar/>
                        </td>
                        <td>
                            <BotaoDecrementar/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </center>
    )
}
export default TelaPrincipal