import Filho from "./Filho"
const Pai = () =>{
    const mensagemDoFilho = (msg) =>{
        alert("Meu Filho Disse " + msg)
    }
    return(
        <div>
            <h1>Pai</h1>
            <Filho falarComPai={mensagemDoFilho}/>
        </div>
    )
}
export default Pai