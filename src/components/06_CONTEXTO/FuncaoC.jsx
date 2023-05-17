import FuncaoD from "./FuncaoD"
import { useContext } from "react"
import CorContexto from "./MeuContexto"
const FuncaoC = () =>{
    const objeto = useContext(CorContexto)
    const {cor,cor2,nome} = objeto
    return(
        <div>
            <h1 style = {{backgroundColor: cor2}}>FUNÇÃO C</h1>
            <FuncaoD/>
        </div>
    )
}
export default FuncaoC