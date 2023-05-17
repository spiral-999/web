import CorContexto from "./MeuContexto"
//MODO LEGADO
const FuncaoB = () => {
    return (
        <CorContexto.Consumer>
            {
                ({cor, nome}) => {
                    return (
                        <div>
                            <h1 style = {{backgroundColor : cor}}>FUNÇÃO B de {nome}</h1>
                        </div>
                    )
                }
            }
        </CorContexto.Consumer>
    )
}
export default FuncaoB