const Filho = ({peso,altura}) =>{
    const calcularImc = (peso,altura) => peso/(altura*altura)
    const imprimirResultado = (imc) =>{
        if (imc < 18) return <h1>Abaixo do Peso</h1>
        else if (imc > 25) return <h1>Acima do Peso</h1>
        else return <h1>Peso Ideal</h1>
    }
    return(
        <div>
            <h1>Meu IMC é {calcularImc(peso,altura)}</h1>
            <h1>{imprimirResultado(calcularImc(altura,peso))}</h1>
        </div>
    )
}
export default Filho