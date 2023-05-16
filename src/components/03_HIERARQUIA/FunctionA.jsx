import FunctionB from "./FunctionB"

const FunctionA = () =>{
    return(
        <div>
            <h1>COMPONENTE A</h1>
            <FunctionB x = {10} y = {5}/>
        </div>
    )
}
export default FunctionA