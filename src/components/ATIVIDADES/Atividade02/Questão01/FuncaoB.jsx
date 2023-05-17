import CorContexto from "./MeuContexto"
//MODO LEGADO
const FuncaoB = () => {
    return (
        <CorContexto.Consumer>
            {
                (cores) => {
                    return (
                        <div>
                            <h1 style = {{backgroundColor : cores.bkgB}}>FUNÇÃO B</h1>
                        </div>
                    )
                }
            }
        </CorContexto.Consumer>
    )
}
export default FuncaoB