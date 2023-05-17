import FuncaoB from "./FuncaoB"
import FuncaoC from "./FuncaoC"
import CorContexto from "./MeuContexto"
const FuncaoA = () => {
    const cores = {bkgA:"blue", bkgB:"purple", bkgC:"violet", bkgD:"yellow"}
    return (
        <CorContexto.Provider value = {cores}>
            <div>
                <h1 style={{ backgroundColor: cores.bkgA }}>FUNÇÃO A</h1>
                <FuncaoB />
                <FuncaoC />
            </div>
        </CorContexto.Provider>
    )
}
export default FuncaoA