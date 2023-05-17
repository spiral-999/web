import FuncaoD from "./FuncaoD"
import { useContext } from "react"
import CorContexto from "./MeuContexto"
const FuncaoC = () =>{
    const cores = useContext(CorContexto)
    return(
        <div>
            <h1 style = {{backgroundColor: cores.bkgC}}>FUNÇÃO C</h1>
            <FuncaoD/>
        </div>
    )
}
export default FuncaoC