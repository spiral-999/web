import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"
import CorContexto from "./MeuContexto"
const FuncaoA = () => {
    const cor = "purple"
    return (
        <CorContexto.Provider value = {{cor:cor, nome:"Mateus", cor2:"orange"}}>
            <div>
                <h1 style={{ backgroundColor: "red" }}>FUNÇÃO A</h1>
                <FuncaoB />
                <FuncaoC />
            </div>
        </CorContexto.Provider>
    )
}
export default FuncaoA