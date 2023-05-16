import FunctionA from "./FunctionA"
const FunctionB = ({x,y}) =>{
    return(
        <div>
            <h1>COMPONENTE B</h1>
            <h1>A soma de {x} e {y} é {x+y}</h1>
        </div>
    )
}
export default FunctionB