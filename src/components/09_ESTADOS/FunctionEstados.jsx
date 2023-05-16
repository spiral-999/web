import { useState, useEffect } from "react"

const FuncionEstados = () => {
    //let contador = 0
    const [contador, setContador] = useState(0)
    const [ehPar, setEhPar] = useState(true)
    const [ehImpar, setEhImpar] = useState(false)
    useEffect(
        ()=>{
            if(contador%2===0) setEhPar(true)
            else setEhPar(false)
        }
        ,
        [contador]
    )
    useEffect(
        ()=>{
            if(contador%2===1) setEhImpar(true)
            else setEhImpar(false)
        }
        ,
        [contador]
    )
    const acaoBotao = () =>{
        setContador(contador + 1)
    }
    return (
        <>
            <h1>{contador}</h1>
            <h1>Par : {""+ehPar}</h1>
            <h1>Impar : {""+ehImpar}</h1>
            <button
            onClick={acaoBotao}>
                Aumentar Contador
            </button>
        </>
    )
}
export default FuncionEstados