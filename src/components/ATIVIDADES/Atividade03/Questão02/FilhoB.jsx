const FilhoB = ({ meuVetor, enviarMenor }) => {
    const calcularMenorElemento = () => {
        const menor = Math.min(...meuVetor)
        enviarMenor(menor)
    }
    return (
        <>
            <h1>Componente Filho B</h1>
            <button onClick={calcularMenorElemento}>
                Menor Elemento
            </button>
        </>
    )
}
export default FilhoB