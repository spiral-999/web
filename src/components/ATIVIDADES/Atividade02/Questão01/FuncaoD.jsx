import CorContexto from "./MeuContexto"
//MODO LEGADO
const FuncaoD = () => {
    return (
        <CorContexto.Consumer>
            {
                (cores) => {
                    return (
                        <div>
                            <h1 style={{ backgroundColor: cores.bkgD }}>FUNÇÃO D</h1>
                        </div>
                    )
                }
            }
        </CorContexto.Consumer>
    )
}
export default FuncaoD